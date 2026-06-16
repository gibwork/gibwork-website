javascript
// js/main.js
// Interactive functionality for Gibwork landing page - Production Quality v4.0

(function() {
  'use strict';

  // ============================================
  // Constants & Configuration
  // ============================================
  const CONFIG = Object.freeze({
    HEADER_OFFSET: 80,
    SCROLL_BEHAVIOR: 'smooth',
    COUNTER_DEFAULT_DURATION: 2000,
    COUNTER_OBSERVER_THRESHOLD: 0.3,
    COUNTER_OBSERVER_ROOT_MARGIN: '0px 0px -50px 0px',
    ANIMATION_THRESHOLD: 0.1,
    ANIMATION_ROOT_MARGIN: '0px 0px -100px 0px',
    LOG_PREFIX: '[Gibwork]',
    ERROR_PREFIX: '[Gibwork Error]',
    MOBILE_BREAKPOINT: 768,
    DEBOUNCE_DELAY: 250,
    LAZY_LOAD_THRESHOLD: 200,
    MAX_RETRY_COUNT: 3,
    RETRY_DELAY: 1000,
    CACHE_DURATION: 3600000,
    API_TIMEOUT: 5000,
    MAX_FILE_SIZE: 5242880,
    ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
    SANITIZE_REGEX: /<[^>]*>/g,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    URL_REGEX: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/,
    PHONE_REGEX: /^\+?[\d\s-]{10,15}$/,
    USERNAME_REGEX: /^[a-zA-Z0-9_]{3,30}$/,
    PASSWORD_MIN_LENGTH: 8,
    PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  });

  // ============================================
  // Logger
  // ============================================
  class Logger {
    private static readonly PREFIX = CONFIG.LOG_PREFIX;
    private static readonly ERROR_PREFIX = CONFIG.ERROR_PREFIX;
    private static readonly LOG_LEVELS = {
      DEBUG: 0,
      INFO: 1,
      WARN: 2,
      ERROR: 3
    } as const;

    private static currentLevel: number = Logger.LOG_LEVELS.INFO;
    private static logQueue: Array<{ level: string; message: string; timestamp: number }> = [];
    private static readonly MAX_QUEUE_SIZE = 100;

    static setLevel(level: keyof typeof Logger.LOG_LEVELS): void {
      Logger.currentLevel = Logger.LOG_LEVELS[level];
    }

    static debug(message: string, ...args: unknown[]): void {
      if (Logger.currentLevel <= Logger.LOG_LEVELS.DEBUG) {
        const formattedMessage = `${Logger.PREFIX} [DEBUG] ${message}`;
        console.debug(formattedMessage, ...args);
        Logger.enqueueLog('DEBUG', message);
      }
    }

    static info(message: string, ...args: unknown[]): void {
      if (Logger.currentLevel <= Logger.LOG_LEVELS.INFO) {
        const formattedMessage = `${Logger.PREFIX} ${message}`;
        console.info(formattedMessage, ...args);
        Logger.enqueueLog('INFO', message);
      }
    }

    static warn(message: string, ...args: unknown[]): void {
      if (Logger.currentLevel <= Logger.LOG_LEVELS.WARN) {
        const formattedMessage = `${Logger.PREFIX} [WARN] ${message}`;
        console.warn(formattedMessage, ...args);
        Logger.enqueueLog('WARN', message);
      }
    }

    static error(message: string, error?: Error, ...args: unknown[]): void {
      if (Logger.currentLevel <= Logger.LOG_LEVELS.ERROR) {
        const formattedMessage = `${Logger.ERROR_PREFIX} ${message}`;
        console.error(formattedMessage, error, ...args);
        Logger.enqueueLog('ERROR', message);
        Logger.reportError(message, error);
      }
    }

    private static enqueueLog(level: string, message: string): void {
      Logger.logQueue.push({ level, message, timestamp: Date.now() });
      if (Logger.logQueue.length > Logger.MAX_QUEUE_SIZE) {
        Logger.logQueue.shift();
      }
    }

    static getLogQueue(): ReadonlyArray<{ level: string; message: string; timestamp: number }> {
      return Object.freeze([...Logger.logQueue]);
    }

    private static reportError(message: string, error?: Error): void {
      try {
        if (window.gibwork?.errorTracking?.captureException) {
          window.gibwork.errorTracking.captureException(error || new Error(message));
        }
      } catch (e) {
        console.error('Failed to report error to tracking service', e);
      }
    }
  }

  // ============================================
  // Types & Interfaces
  // ============================================
  interface CounterElement extends HTMLElement {
    dataset: {
      counter: string;
      duration?: string;
      suffix?: string;
      prefix?: string;
      initial?: string;
      decimals?: string;
    };
  }

  interface AppStoreLink extends HTMLElement {
    dataset: {
      appStore: string;
      iosUrl?: string;
      androidUrl?: string;
      fallbackUrl?: string;
      appId?: string;
    };
  }

  interface ScrollAnimationElement extends HTMLElement {
    dataset: {
      animation?: string;
      delay?: string;
      duration?: string;
      easing?: string;
      threshold?: string;
    };
  }

  interface FormElement extends HTMLFormElement {
    elements: HTMLFormControlsCollection & {
      email?: HTMLInputElement;
      name?: HTMLInputElement;
      message?: HTMLTextAreaElement;
      username?: HTMLInputElement;
      password?: HTMLInputElement;
      confirmPassword?: HTMLInputElement;
    };
  }

  interface LazyImageElement extends HTMLImageElement {
    dataset: {
      src?: string;
      srcset?: string;
      sizes?: string;
      fallback?: string;
      alt?: string;
      loading?: string;
    };
  }

  interface PerformanceMetrics {
    loadTime: number;
    domContentLoaded: number;
    firstPaint: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    timeToInteractive: number;
    totalBlockingTime: number;
  }

  interface CacheEntry<T> {
    data: T;
    timestamp: number;
    ttl: number;
  }

  interface ValidationResult {
    isValid: boolean;
    errors: string[];
  }

  // ============================================
  // Cache System
  // ============================================
  class CacheManager {
    private static cache: Map<string, CacheEntry<unknown>> = new Map();
    private static readonly DEFAULT_TTL = CONFIG.CACHE_DURATION;

    static get<T>(key: string): T | null {
      try {
        const entry = CacheManager.cache.get(key);
        if (!entry) return null;

        if (Date.now() - entry.timestamp > entry.ttl) {
          CacheManager.cache.delete(key);
          return null;
        }

        return entry.data as T;
      } catch (error) {
        Logger.error(`Cache get failed for key: ${key}`, error as Error);
        return null;
      }
    }

    static set<T>(key: string, data: T, ttl: number = CacheManager.DEFAULT_TTL): void {
      try {
        CacheManager.cache.set(key, {
          data,
          timestamp: Date.now(),
          ttl
        });
      } catch (error) {
        Logger.error(`Cache set failed for key: ${key}`, error as Error);
      }
    }

    static invalidate(key: string): void {
      CacheManager.cache.delete(key);
    }

    static clear(): void {
      CacheManager.cache.clear();
    }

    static getSize(): number {
      return CacheManager.cache.size;
    }
  }

  // ============================================
  // Input Validation
  // ============================================
  class InputValidator {
    static validateEmail(email: string): ValidationResult {
      const errors: string[] = [];
      
      if (!email || typeof email !== 'string') {
        errors.push('Email is required');
        return { isValid: false, errors };
      }

      const trimmedEmail = email.trim();
      
      if (trimmedEmail.length === 0) {
        errors.push('Email cannot be empty');
      } else if (trimmedEmail.length > 254) {
        errors.push('Email is too long');
      } else if (!CONFIG.EMAIL_REGEX.test(trimmedEmail)) {
        errors.push('Invalid email format');
      }

      return { isValid: errors.length === 0, errors };
    }

    static validatePassword(password: string): ValidationResult {
      const errors: string[] = [];

      if (!password || typeof password !== 'string') {
        errors.push('Password is required');
        return { isValid: false, errors };
      }

      if (password.length < CONFIG.PASSWORD_MIN_LENGTH) {
        errors.push(`Password must be at least ${CONFIG.PASSWORD_MIN_LENGTH} characters`);
      }
      if (!CONFIG.PASSWORD_REGEX.test(password)) {
        errors.push('Password must contain uppercase, lowercase, number, and special character');
      }

      return { isValid: errors.length === 0, errors };
    }

    static validateUsername(username: string): ValidationResult {
      const errors: string[] = [];

      if (!username || typeof username !== 'string') {
        errors.push('Username is required');
        return { isValid: false, errors };
      }

      const trimmedUsername = username.trim();
      if (!CONFIG.USERNAME_REGEX.test(trimmedUsername)) {
        errors.push('Username must be 3-30 characters, alphanumeric and underscores only');
      }

      return { isValid: errors.length === 0, errors };
    }

    static sanitizeInput(input: string): string {
      if (typeof input !== 'string') return '';
      return input.replace(CONFIG.SANITIZE_REGEX, '').trim();
    }
  }

  // ============================================
  // Performance Monitor
  // ============================================
  class PerformanceMonitor {
    private static metrics: PerformanceMetrics = {
      loadTime: 0,
      domContentLoaded: 0,
      firstPaint: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: 0,
      totalBlockingTime: 0
    };

    private static observer: PerformanceObserver | null = null;

    static init(): void {
      try {
        if (!window.performance) {
          Logger.warn('Performance API not available');
          return;
        }

        // Track navigation timing
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (perfData) {
            PerformanceMonitor.metrics.loadTime = perfData.loadEventEnd - perfData.startTime;
            PerformanceMonitor.metrics.domContentLoaded = perfData.domContentLoadedEventEnd - perfData.startTime;
          }
        });

        // Track paint metrics
        if ('PerformanceObserver' in window) {
          PerformanceMonitor.observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.name === 'first-paint') {
                PerformanceMonitor.metrics.firstPaint = entry.startTime;
              } else if (entry.name === 'first-contentful-paint') {
                PerformanceMonitor.metrics.firstContentfulPaint = entry.startTime;
              }
            }
          });
          PerformanceMonitor.observer.observe({ entryTypes: ['paint'] });

          // Track LCP
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            if (entries.length > 0) {
              PerformanceMonitor.metrics.largestContentfulPaint = entries[entries.length - 1].startTime;
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Track CLS
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                PerformanceMonitor.metrics.cumulativeLayoutShift += (entry as any).value;
              }
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        }
      } catch (error) {
        Logger.error('Failed to initialize performance monitoring', error as Error);
      }
    }

    static getMetrics(): Readonly<PerformanceMetrics> {
      return Object.freeze({ ...PerformanceMonitor.metrics });
    }

    static destroy(): void {
      if (PerformanceMonitor.observer) {
        PerformanceMonitor.observer.disconnect();
        PerformanceMonitor.observer = null;
      }
    }
  }

  // ============================================
  // Smooth Scroll Handler
  // ============================================
  class SmoothScroll {
    private static readonly SCROLL_DURATION = 800;
    private static readonly SCROLL_EASING = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    static init(): void {
      try {
        document.addEventListener('click', (event: MouseEvent) => {
          const target = event.target as HTMLElement;
          const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
          
          if (!anchor) return;

          const targetId = anchor.getAttribute('href');
          if (!targetId || targetId === '#') return;

          event.preventDefault();
          SmoothScroll.scrollToElement(targetId);
        });
      } catch (error) {
        Logger.error('Failed to initialize smooth scroll', error as Error);
      }
    }

    static scrollToElement(targetId: string): void {
      try {
        const targetElement = document.querySelector(targetId);
        if (!targetElement) {
          Logger.warn(`Target element not found: ${targetId}`);
          return;
        }

        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - CONFIG.HEADER_OFFSET;
        
        window.scrollTo({
          top: targetPosition,
          behavior: CONFIG.SCROLL_BEHAVIOR
        });
      } catch (error) {
        Logger.error(`Failed to scroll to element: ${targetId}`, error as Error);
      }
    }
  }

  // ============================================
  // Counter Animation
  // ============================================
  class CounterAnimation {
    private static observers: IntersectionObserver[] = [];
    private static animatedElements: Set<HTMLElement> = new Set();

    static init(): void {
      try {
        const counterElements = document.querySelectorAll<CounterElement>('[data-counter]');
        
        if (counterElements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as CounterElement;
              if (!CounterAnimation.animatedElements.has(element)) {
                CounterAnimation.animatedElements.add(element);
                CounterAnimation.animateCounter(element);
                observer.unobserve(element);
              }
            }
          });
        }, {
          threshold: CONFIG.COUNTER_OBSERVER_THRESHOLD,
          rootMargin: CONFIG.COUNTER_OBSERVER_ROOT_MARGIN
        });

        counterElements.forEach((element) => {
          observer.observe(element);
        });

        CounterAnimation.observers.push(observer);
      } catch (error) {
        Logger.error('Failed to initialize counter animations', error as Error);
      }
    }

    private static animateCounter(element: CounterElement): void {
      try {
        const targetValue = parseFloat(element.dataset.counter);
        const duration = parseInt(element.dataset.duration || String(CONFIG.COUNTER_DEFAULT_DURATION));
        const suffix = element.dataset.suffix || '';
        const prefix = element.dataset.prefix || '';
        const initialValue = parseFloat(element.dataset.initial || '0');
        const decimals = parseInt(element.dataset.decimals || '0');
        
        if (isNaN(targetValue)) {
          Logger.warn('Invalid counter value', element);
          return;
        }

        const startTime = performance.now();
        const difference = targetValue - initialValue;

        const animate = (currentTime: number): void => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Ease out cubic
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = initialValue + (difference * easedProgress);
          
          element.textContent = `${prefix}${currentValue.toFixed(decimals)}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            element.textContent = `${prefix}${targetValue.toFixed(decimals)}${suffix}`;
          }
        };

        requestAnimationFrame(animate);
      } catch (error) {
        Logger.error('Failed to animate counter', error as Error);
      }
    }

    static destroy(): void {
      CounterAnimation.observers.forEach((observer) => observer.disconnect());
      CounterAnimation.observers = [];
      CounterAnimation.animatedElements.clear();
    }
  }

  // ============================================
  // Scroll Animation
  // ============================================
  class ScrollAnimation {
    private static observer: IntersectionObserver | null = null;
    private static animatedElements: Set<HTMLElement> = new Set();

    static init(): void {
      try {
        const elements = document.querySelectorAll<ScrollAnimationElement>('[data-animation]');
        
        if (elements.length === 0) return;

        CounterAnimation.observers.forEach((obs) => obs.disconnect());
        CounterAnimation.observers = [];

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as ScrollAnimationElement;
              if (!ScrollAnimation.animatedElements.has(element)) {
                ScrollAnimation.animatedElements.add(element);
                ScrollAnimation.applyAnimation(element);
                observer.unobserve(element);
              }
            }