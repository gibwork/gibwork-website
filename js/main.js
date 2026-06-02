javascript
// js/main.js
// Dynamic data loading for contributor stories, dashboard metrics animation, intersection observer for scroll effects

(function() {
    'use strict';

    // ===== CONFIGURATION =====
    const CONFIG = Object.freeze({
        apiEndpoint: 'https://api.gibwork.com/v1/landing',
        animationDuration: 2000,
        observerThreshold: 0.2,
        observerRootMargin: '0px 0px -50px 0px',
        retryAttempts: 3,
        retryDelay: 1000,
        cacheDuration: 300000, // 5 minutes
        requestTimeout: 5000,
        maxRetryDelay: 5000,
        minAnimationDuration: 500,
        maxAnimationDuration: 5000
    });

    // ===== CUSTOM ERROR TYPES =====
    class DataFetchError extends Error {
        /**
         * @param {string} message - Error description
         * @param {number|null} statusCode - HTTP status code if applicable
         */
        constructor(message, statusCode = null) {
            super(message);
            this.name = 'DataFetchError';
            this.statusCode = statusCode;
        }
    }

    class RenderError extends Error {
        /**
         * @param {string} message - Error description
         * @param {string|null} elementId - DOM element ID if applicable
         */
        constructor(message, elementId = null) {
            super(message);
            this.name = 'RenderError';
            this.elementId = elementId;
        }
    }

    class ValidationError extends Error {
        /**
         * @param {string} message - Error description
         * @param {string} field - Field that failed validation
         */
        constructor(message, field) {
            super(message);
            this.name = 'ValidationError';
            this.field = field;
        }
    }

    // ===== LOGGER =====
    const Logger = {
        /** @type {boolean} */
        _isDevelopment: typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development',

        /**
         * @param {string} message
         * @param {*} [data]
         */
        info: (message, data = null) => {
            console.info(`[Gibwork Landing] INFO: ${message}`, data || '');
        },

        /**
         * @param {string} message
         * @param {*} [data]
         */
        warn: (message, data = null) => {
            console.warn(`[Gibwork Landing] WARN: ${message}`, data || '');
        },

        /**
         * @param {string} message
         * @param {Error|null} [error]
         */
        error: (message, error = null) => {
            console.error(`[Gibwork Landing] ERROR: ${message}`, error || '');
        },

        /**
         * @param {string} message
         * @param {*} [data]
         */
        debug: (message, data = null) => {
            if (this._isDevelopment) {
                console.debug(`[Gibwork Landing] DEBUG: ${message}`, data || '');
            }
        }
    };

    // ===== DATA CACHE =====
    const dataCache = {
        /** @type {Object|null} */
        data: null,
        /** @type {number|null} */
        timestamp: null,

        /**
         * @param {Object} data
         */
        set(data) {
            if (!data || typeof data !== 'object') {
                throw new ValidationError('Invalid cache data', 'data');
            }
            this.data = data;
            this.timestamp = Date.now();
        },

        /**
         * @returns {Object|null}
         */
        get() {
            if (!this.data || !this.timestamp) return null;
            if (Date.now() - this.timestamp > CONFIG.cacheDuration) {
                this.clear();
                return null;
            }
            return this.data;
        },

        clear() {
            this.data = null;
            this.timestamp = null;
        },

        /**
         * @returns {boolean}
         */
        isValid() {
            return this.data !== null && 
                   this.timestamp !== null && 
                   (Date.now() - this.timestamp <= CONFIG.cacheDuration);
        }
    };

    /** @type {boolean} */
    let metricsAnimated = false;

    // ===== DOM REFS WITH VALIDATION =====
    const dom = {
        spotlightContainer: document.getElementById('contributor-spotlight'),
        successContainer: document.getElementById('project-success'),
        metricsContainer: document.getElementById('dashboard-metrics'),
        trustContainer: document.getElementById('trust-indicators')
    };

    // Validate DOM elements exist
    Object.entries(dom).forEach(([key, element]) => {
        if (!element) {
            Logger.warn(`DOM element "${key}" not found. Related features will be disabled.`);
        }
    });

    // ===== UTILITY FUNCTIONS =====
    /**
     * Format number with K/M suffixes
     * @param {number} num - Number to format
     * @returns {string} Formatted number string
     * @throws {ValidationError} If input is invalid
     */
    function formatNumber(num) {
        if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
            Logger.warn('Invalid number provided to formatNumber', { input: num });
            return '0';
        }
        
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    /**
     * Sanitize HTML string to prevent XSS
     * @param {string} str - String to sanitize
     * @returns {string} Sanitized string
     */
    function sanitizeHTML(str) {
        if (typeof str !== 'string') {
            Logger.warn('Non-string value passed to sanitizeHTML', { input: str });
            return '';
        }
        
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    /**
     * Debounce function execution
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} Debounced function
     * @throws {TypeError} If parameters are invalid
     */
    function debounce(func, wait) {
        if (typeof func !== 'function') {
            throw new TypeError('First argument must be a function');
        }
        if (typeof wait !== 'number' || wait < 0 || !isFinite(wait)) {
            throw new TypeError('Wait time must be a non-negative finite number');
        }

        /** @type {number|null} */
        let timeout = null;
        
        return function(...args) {
            if (timeout !== null) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                func.apply(this, args);
                timeout = null;
            }, wait);
        };
    }

    /**
     * Validate contributor data
     * @param {Object} contributor - Contributor object
     * @returns {boolean} Whether contributor data is valid
     */
    function validateContributor(contributor) {
        if (!contributor || typeof contributor !== 'object') {
            Logger.warn('Invalid contributor data: not an object');
            return false;
        }

        const required = ['username', 'task', 'reward', 'testimonial'];
        const missing = required.filter(field => !contributor[field]);
        
        if (missing.length > 0) {
            Logger.warn('Invalid contributor data', { missing, contributor });
            return false;
        }
        
        if (typeof contributor.reward !== 'number' || contributor.reward < 0 || !isFinite(contributor.reward)) {
            Logger.warn('Invalid reward value', { reward: contributor.reward });
            return false;
        }
        
        return true;
    }

    /**
     * Validate success story data
     * @param {Object} story - Success story object
     * @returns {boolean} Whether story data is valid
     */
    function validateSuccessStory(story) {
        if (!story || typeof story !== 'object') {
            Logger.warn('Invalid success story data: not an object');
            return false;
        }

        const required = ['project', 'type', 'metric', 'description'];
        const missing = required.filter(field => !story[field]);
        
        if (missing.length > 0) {
            Logger.warn('Invalid success story data', { missing, story });
            return false;
        }
        
        return true;
    }

    /**
     * Validate metrics data
     * @param {Object} metrics - Metrics object
     * @returns {boolean} Whether metrics data is valid
     */
    function validateMetrics(metrics) {
        if (!metrics || typeof metrics !== 'object') {
            Logger.warn('Invalid metrics data: not an object');
            return false;
        }

        const required = ['tasksCompleted', 'contributorsPaid', 'totalRewardsDistributed', 'activeProjects'];
        const missing = required.filter(field => typeof metrics[field] !== 'number' || !isFinite(metrics[field]));
        
        if (missing.length > 0) {
            Logger.warn('Invalid metrics data', { missing, metrics });
            return false;
        }
        
        return true;
    }

    // ===== DATA FETCHING =====
    /**
     * Fetch with retry logic
     * @param {string} url - URL to fetch
     * @param {Object} options - Fetch options
     * @param {number} [retries] - Number of retry attempts
     * @returns {Promise<Object>} Response data
     * @throws {DataFetchError} If all retries fail
     */
    async function fetchWithRetry(url, options, retries = CONFIG.retryAttempts) {
        if (!url || typeof url !== 'string') {
            throw new ValidationError('Invalid URL', 'url');
        }

        let lastError = null;
        
        for (let i = 0; i < retries; i++) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), CONFIG.requestTimeout);

                const response = await fetch(url, {
                    ...options,
                    signal: controller.signal
                });

                clearTimeout(timeoutId);
                
                if (!response.ok) {
                    throw new DataFetchError(
                        `HTTP error! status: ${response.status}`,
                        response.status
                    );
                }
                
                const data = await response.json();
                
                if (!data || typeof data !== 'object') {
                    throw new DataFetchError('Invalid response format');
                }
                
                return data;
            } catch (error) {
                lastError = error;
                
                if (error instanceof DataFetchError && error.statusCode === 404) {
                    throw error; // Don't retry 404s
                }
                
                if (i < retries - 1) {
                    const delay = Math.min(
                        CONFIG.retryDelay * Math.pow(2, i),
                        CONFIG.maxRetryDelay
                    );
                    Logger.warn(`Retry ${i + 1}/${retries} failed`, { error: error.message });
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }
        
        throw lastError || new DataFetchError('All retry attempts failed');
    }

    /**
     * Fetch landing page data
     * @returns {Promise<Object>} Landing page data
     */
    async function fetchLandingData() {
        if (dataCache.isValid()) {
            Logger.debug('Returning cached data');
            return dataCache.get();
        }

        try {
            Logger.info('Fetching landing page data');
            
            const data = await fetchWithRetry(CONFIG.apiEndpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            dataCache.set(data);
            Logger.info('Successfully fetched landing data');
            return data;
            
        } catch (error) {
            Logger.error('Failed to fetch live data', error);
            
            if (error instanceof DataFetchError && error.statusCode === 404) {
                Logger.warn('API endpoint not found, using fallback data');
            }
            
            const fallbackData = getFallbackData();
            dataCache.set(fallbackData);
            return fallbackData;
        }
    }

    /**
     * Get fallback data when API is unavailable
     * @returns {Object} Fallback data
     */
    function getFallbackData() {
        return {
            contributors: [
                {
                    username: 'crypto_designer',
                    task: 'UI/UX Design for DeFi Dashboard',
                    reward: 2500,
                    testimonial: 'Completed a design task in 2 days and earned my first on-chain reward through Gibwork.'
                },
                {
                    username: 'web3_dev',
                    task: 'Smart Contract Audit',
                    reward: 5000,
                    testimonial: 'The platform made it easy to find legitimate blockchain projects needing security reviews.'
                },
                {
                    username: 'content_creator',
                    task: 'Technical Documentation',
                    reward: 1800,
                    testimonial: 'Gibwork connected me with a project that valued quality documentation as much as code.'
                }
            ],
            successStories: [
                {
                    project: 'DeFi Protocol X',
                    type: 'Community Growth',
                    metric: '500% increase in community members',
                    description: 'Leveraged Gibwork contributors to build and moderate a thriving Discord community.'
                },
                {
                    project: 'NFT Marketplace Y',
                    type: 'Content Creation',
                    metric: '100+ pieces of content created',
                    description: 'Engaged global creators to produce tutorials, art, and marketing materials.'
                },
                {
                    project: 'Web3 Game Z',
                    type: 'Development',
                    metric: '3-month development cycle completed in 6 weeks',
                    description: 'Accessed specialized blockchain developers through Gibwork\'s global talent pool.'
                }
            ],
            metrics: {
                tasksCompleted: 15000,
                contributorsPaid: 3200,
                totalRewardsDistributed: 850000,
                activeProjects: 245
            }
        };
    }

    // ===== RENDER FUNCTIONS =====
    /**
     * Render contributor spotlight section
     * @param {Array} contributors - Array of contributor objects
     * @returns {Promise<void>}
     */
    async function renderContributorSpotlight(contributors) {
        if (!dom.spotlightContainer) {
            Logger.warn('Contributor spotlight container not found');
            return;
        }

        if (!Array.isArray(contributors) || contributors.length === 0) {
            Logger.warn('No contributors to render');
            dom.spotlightContainer.innerHTML = '<p class="text-gray-500">No contributor stories available yet.</p>';
            return;
        }

        try {
            const validContributors = contributors.filter(validateContributor);
            
            if (validContributors.length === 0) {
                throw new RenderError('No valid contributors found', 'contributor-spotlight');
            }

            const html = validContributors.map(contributor => `
                <div class="contributor-card bg-white rounded-lg shadow-lg p-6 mb-4">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            ${sanitizeHTML(contributor.username.charAt(0).toUpperCase())}
                        </div>
                        <div class="ml-4">
                            <h3 class="font-semibold text-lg">${sanitizeHTML(contributor.username)}</h3>
                            <p class="text-sm text-gray-500">${sanitizeHTML(contributor.task)}</p>
                        </div>
                    </div>
                    <div class="mb-3">
                        <span class="text-green-500 font-bold">$${formatNumber(contributor.reward)}</span>
                        <span class="text-gray-400 text-sm ml-2">earned</span>
                    </div>
                    <blockquote class="text-gray-600 italic border-l-4 border-purple-500 pl-4">
                        "${sanitizeHTML(contributor.testimonial)}"
                    </blockquote>
                </div>
            `).join('');

            dom.spotlightContainer.innerHTML = html;
            Logger.info('Contributor spotlight rendered successfully', { count: validContributors.length });
            
        } catch (error) {
            Logger.error('Failed to render contributor spotlight', error);
            dom.spotlightContainer.innerHTML = '<p class="text-red-500">Failed to load contributor stories. Please try again later.</p>';
        }
    }

    /**
     * Render project success stories section
     * @param {Array} stories - Array of success story objects
     * @returns {Promise<void>}
     */
    async function renderSuccessStories(stories) {
        if (!dom.successContainer) {
            Logger.warn('Success stories container not found');
            return;
        }

        if (!Array.isArray(stories) || stories.length === 0) {
            Logger.warn('No success stories to render');
            dom.successContainer.innerHTML = '<p class="text-gray-500">No success stories available yet.</p>';
            return;
        }

        try {
            const validStories = stories.filter(validateSuccessStory);
            
            if (validStories.length === 0) {
                throw new RenderError('No valid success stories found', 'project-success');
            }

            const html = validStories.map(story => `
                <div class="success-card bg-white rounded-lg shadow-lg p-6 mb-4">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-semibold text-lg">${sanitizeHTML(story.project)}</h3>
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            ${sanitizeHTML(story.type)}
                        </span>
                    </div>
                    <p class="text-green-600 font-bold text-xl mb-2">${sanitizeHTML(story.metric)}</p>
                    <p class="text-gray-600">${sanitizeHTML(story.description)}</p>
                </div>
            `).join('');

            dom.successContainer.innerHTML = html;
            Logger.info('Success stories rendered successfully', { count: validStories.length });
            
        } catch (error) {
            Logger.error