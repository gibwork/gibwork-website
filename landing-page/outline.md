typescript
import React, { useState, useEffect, useCallback, useMemo, ErrorInfo } from 'react';
import { logger } from './utils/logger';
import { validateEmail, sanitizeInput } from './utils/validation';
import { trackEvent } from './utils/analytics';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';

// Type definitions
interface MobileAppProps {
  readonly platform: 'ios' | 'android';
  readonly downloadUrl: string;
  readonly isAvailable: boolean;
}

interface StepCardProps {
  readonly stepNumber: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

interface HeroSectionProps {
  readonly heading: string;
  readonly subheading: string;
  readonly ctaText: string;
  readonly onCtaClick: () => void;
}

interface DownloadButtonProps {
  readonly platform: 'ios' | 'android';
  readonly url: string;
  readonly onClick: () => void;
}

interface AnalyticsHook {
  readonly trackDownload: (platform: 'ios' | 'android') => void;
  readonly trackHeroClick: () => void;
}

interface NewsletterFormHook {
  readonly email: string;
  readonly setEmail: React.Dispatch<React.SetStateAction<string>>;
  readonly isSubmitting: boolean;
  readonly error: string | null;
  readonly success: boolean;
  readonly handleSubmit: (e: React.FormEvent) => Promise<void>;
}

// Constants
const APP_STORE_URL = 'https://apps.apple.com/app/gibwork';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.gibwork';

const HERO_CONTENT = {
  heading: 'The Decentralized Work Marketplace for Top Tech Talent.',
  subheading: 'Connect with global opportunities, earn in Solana, and build your reputation in the decentralized economy.',
  ctaText: 'Start Earning Now'
} as const;

const MOBILE_SECTION_CONTENT = {
  heading: 'Earn on the Go. Anytime. Anywhere.',
  subheading: 'Bring the Solana talent layer to your pocket. Track bounties, submit work, and receive instant payouts directly through the Gibwork mobile app.'
} as const;

const HOW_IT_WORKS_STEPS: readonly StepCardProps[] = [
  {
    stepNumber: 1,
    title: 'Discover Bounties',
    description: 'Browse open ecosystem tasks matched to your skills and interests.',
    icon: '🔍'
  },
  {
    stepNumber: 2,
    title: 'Submit & Ship',
    description: 'Execute deliverables and submit directly via GitHub integration or mobile app.',
    icon: '🚀'
  },
  {
    stepNumber: 3,
    title: 'Get Paid Instantly',
    description: 'Receive automated, secure Solana-native token payouts directly to your wallet.',
    icon: '💰'
  }
] as const;

const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Please enter a valid email address',
  UNEXPECTED_ERROR: 'An unexpected error occurred',
  DOWNLOAD_FAILED: 'Failed to open download URL',
  TRACKING_FAILED: 'Failed to track event'
} as const;

// Custom hook for analytics tracking
const useAnalytics = (): AnalyticsHook => {
  const trackDownload = useCallback((platform: 'ios' | 'android'): void => {
    try {
      if (!platform || !['ios', 'android'].includes(platform)) {
        throw new Error(`Invalid platform: ${platform}`);
      }
      
      trackEvent('mobile_app_download', { platform });
      logger.info('Tracked download event', { 
        platform,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : ERROR_MESSAGES.TRACKING_FAILED;
      logger.error('Failed to track download event', { 
        error: errorMessage, 
        platform,
        timestamp: new Date().toISOString()
      });
    }
  }, []);

  const trackHeroClick = useCallback((): void => {
    try {
      trackEvent('hero_cta_click');
      logger.info('Tracked hero CTA click', {
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : ERROR_MESSAGES.TRACKING_FAILED;
      logger.error('Failed to track hero CTA click', { 
        error: errorMessage,
        timestamp: new Date().toISOString()
      });
    }
  }, []);

  return { trackDownload, trackHeroClick };
};

// Custom hook for form handling
const useNewsletterForm = (): NewsletterFormHook => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = useCallback(async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    
    try {
      setError(null);
      setIsSubmitting(true);

      if (!email || typeof email !== 'string') {
        throw new Error(ERROR_MESSAGES.INVALID_EMAIL);
      }

      const sanitizedEmail: string = sanitizeInput(email.trim());
      
      if (!sanitizedEmail || !validateEmail(sanitizedEmail)) {
        throw new Error(ERROR_MESSAGES.INVALID_EMAIL);
      }

      // Simulate API call with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      try {
        await new Promise<void>((resolve, reject) => {
          const timer = setTimeout(resolve, 1000);
          controller.signal.addEventListener('abort', () => {
            clearTimeout(timer);
            reject(new Error('Request timed out'));
          });
        });
      } finally {
        clearTimeout(timeoutId);
      }
      
      setSuccess(true);
      setEmail('');
      
      logger.info('Newsletter subscription successful', { 
        email: sanitizedEmail,
        timestamp: new Date().toISOString()
      });
      
      trackEvent('newsletter_subscription', { email: sanitizedEmail });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : ERROR_MESSAGES.UNEXPECTED_ERROR;
      setError(errorMessage);
      setSuccess(false);
      
      logger.error('Newsletter subscription failed', { 
        error: errorMessage,
        timestamp: new Date().toISOString()
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [email]);

  return { email, setEmail, isSubmitting, error, success, handleSubmit };
};

// Download Button Component
const DownloadButton: React.FC<DownloadButtonProps> = React.memo(({ platform, url, onClick }) => {
  const handleClick = useCallback((): void => {
    try {
      if (!url || !platform) {
        throw new Error('Invalid download button props');
      }

      onClick();
      
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      
      if (!newWindow) {
        throw new Error('Popup blocked or failed to open');
      }
      
      newWindow.focus();
      
      logger.info('Download URL opened successfully', {
        platform,
        url,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : ERROR_MESSAGES.DOWNLOAD_FAILED;
      logger.error('Failed to open download URL', { 
        error: errorMessage, 
        platform, 
        url,
        timestamp: new Date().toISOString()
      });
    }
  }, [platform, url, onClick]);

  const buttonText: string = platform === 'ios' ? 'Download on App Store' : 'Get it on Google Play';
  const buttonClass: string = `download-button download-button--${platform}`;
  const ariaLabel: string = `Download Gibwork on ${platform === 'ios' ? 'iOS' : 'Android'}`;

  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      aria-label={ariaLabel}
      type="button"
      disabled={!url}
    >
      <span className="download-button__icon" aria-hidden="true">
        {platform === 'ios' ? '🍎' : '▶️'}
      </span>
      <span className="download-button__text">{buttonText}</span>
    </button>
  );
});

DownloadButton.displayName = 'DownloadButton';

// Step Card Component
const StepCard: React.FC<StepCardProps> = React.memo(({ stepNumber, title, description, icon }) => {
  if (!stepNumber || !title || !description || !icon) {
    logger.warn('StepCard rendered with missing props', {
      stepNumber,
      title,
      description,
      icon
    });
    return null;
  }

  return (
    <div className="step-card" role="article" aria-label={`Step ${stepNumber}: ${title}`}>
      <div className="step-card__icon" aria-hidden="true">{icon}</div>
      <div className="step-card__content">
        <span className="step-card__number">Step {stepNumber}</span>
        <h3 className="step-card__title">{title}</h3>
        <p className="step-card__description">{description}</p>
      </div>
    </div>
  );
});

StepCard.displayName = 'StepCard';

// Hero Section Component
const HeroSection: React.FC<HeroSectionProps> = React.memo(({ heading, subheading, ctaText, onCtaClick }) => {
  if (!heading || !subheading || !ctaText || !onCtaClick) {
    logger.warn('HeroSection rendered with missing props');
    return null;
  }

  return (
    <section className="hero-section" role="banner">
      <div className="hero-section__content">
        <h1 className="hero-section__heading">{heading}</h1>
        <p className="hero-section__subheading">{subheading}</p>
        <button
          className="hero-section__cta"
          onClick={onCtaClick}
          aria-label={ctaText}
          type="button"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Mobile App Section Component
const MobileAppSection: React.FC = React.memo(() => {
  const { trackDownload } = useAnalytics();

  const iosButton = useMemo((): DownloadButtonProps => ({
    platform: 'ios' as const,
    url: APP_STORE_URL,
    onClick: () => trackDownload('ios')
  }), [trackDownload]);

  const androidButton = useMemo((): DownloadButtonProps => ({
    platform: 'android' as const,
    url: PLAY_STORE_URL,
    onClick: () => trackDownload('android')
  }), [trackDownload]);

  return (
    <section className="mobile-section" aria-label="Gibwork Mobile App">
      <div className="mobile-section__container">
        <div className="mobile-section__mockup">
          <div className="phone-frame" role="img" aria-label="Gibwork mobile app dashboard">
            <div className="phone-frame__screen">
              <div className="phone-frame__content">
                <span className="phone-frame__placeholder">App Dashboard</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-section__content">
          <h2 className="mobile-section__heading">{MOBILE_SECTION_CONTENT.heading}</h2>
          <p className="mobile-section__subheading">{MOBILE_SECTION_CONTENT.subheading}</p>
          <div className="mobile-section__buttons">
            <DownloadButton {...iosButton} />
            <DownloadButton {...androidButton} />
          </div>
        </div>
      </div>
    </section>
  );
});

MobileAppSection.displayName = 'MobileAppSection';

// How It Works Section Component
const HowItWorksSection: React.FC = React.memo(() => {
  if (!HOW_IT_WORKS_STEPS || HOW_IT_WORKS_STEPS.length === 0) {
    logger.warn('HowItWorksSection rendered with no steps');
    return null;
  }

  return (
    <section className="how-it-works" aria-label="How Gibwork Works">
      <div className="how-it-works__container">
        <h2 className="how-it-works__heading">How It Works</h2>
        <div className="how-it-works__grid">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

HowItWorksSection.displayName = 'HowItWorksSection';

// Main Landing Page Component
const LandingPage: React.FC = () => {
  const { trackHeroClick } = useAnalytics();
  const newsletterForm = useNewsletterForm();

  const heroProps = useMemo((): HeroSectionProps => ({
    heading: HERO_CONTENT.heading,
    subheading: HERO_CONTENT.subheading,
    ctaText: HERO_CONTENT.ctaText,
    onCtaClick: trackHeroClick
  }), [trackHeroClick]);

  return (
    <ErrorBoundary
      fallback={<div className="error-fallback">Something went wrong. Please try again later.</div>}
      onError={(error: Error, errorInfo: ErrorInfo) => {
        logger.error('LandingPage error caught by ErrorBoundary', {
          error: error.message,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString()
        });
      }}
    >
      <main className="landing-page">
        <HeroSection {...heroProps} />
        <HowItWorksSection />
        <MobileAppSection />
        
        {/* Newsletter Section */}
        <section className="newsletter-section" aria-label="Newsletter subscription">
          <div className="newsletter-section__container">
            <h2 className="newsletter-section__heading">Stay Updated</h2>
            <form 
              className="newsletter-section__form" 
              onSubmit={newsletterForm.handleSubmit}
              noValidate
            >
              <div className="newsletter-section__input-group">
                <input
                  type="email"
                  className="newsletter-section__input"
                  placeholder="Enter your email"
                  value={newsletterForm.email}
                  onChange={(e) => newsletterForm.setEmail(e.target.value)}
                  disabled={newsletterForm.isSubmitting}
                  aria-label="Email address"
                  required
                />
                <button
                  type="submit"
                  className="newsletter-section__button"
                  disabled={newsletterForm.isSubmitting || !newsletterForm.email}
                >
                  {newsletterForm.isSubmitting ? (
                    <LoadingSpinner size="small" />
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              {newsletterForm.error && (
                <p className="newsletter-section__error" role="alert">
                  {newsletterForm.error}
                </p>
              )}
              {newsletterForm.success && (
                <p className="newsletter-section__success" role="status">
                  Successfully subscribed!
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </ErrorBoundary>
  );
};

LandingPage.displayName = 'LandingPage';

export default LandingPage;