typescript
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  ArrowDownCircle, 
  Smartphone, 
  Search, 
  CheckCircle, 
  DollarSign,
  Apple,
  GooglePlay,
  ChevronRight,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { logger } from './utils/logger';
import { validateEmail, sanitizeInput } from './utils/validation';
import { trackEvent } from './utils/analytics';

// Type definitions
interface StepCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

interface DownloadButton {
  platform: 'ios' | 'android';
  icon: React.ReactNode;
  label: string;
  url: string;
}

interface HeroSectionProps {
  onCtaClick: () => void;
}

interface MobileSectionProps {
  onDownloadClick: (platform: 'ios' | 'android') => void;
}

interface HowItWorksProps {
  steps: StepCard[];
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Constants
const APP_STORE_URLS = {
  ios: 'https://apps.apple.com/app/gibwork',
  android: 'https://play.google.com/store/apps/details?id=com.gibwork'
} as const;

const STEPS: StepCard[] = [
  {
    icon: <Search className="w-8 h-8 text-blue-600" aria-hidden="true" />,
    title: 'Discover Bounties',
    description: 'Browse open ecosystem tasks matched to your skills and expertise.',
    stepNumber: 1
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-green-600" aria-hidden="true" />,
    title: 'Submit & Ship',
    description: 'Execute deliverables and submit directly via GitHub integration or mobile app.',
    stepNumber: 2
  },
  {
    icon: <DollarSign className="w-8 h-8 text-purple-600" aria-hidden="true" />,
    title: 'Get Paid Instantly',
    description: 'Receive automated, secure Solana-native token payouts directly to your wallet.',
    stepNumber: 3
  }
];

const DOWNLOAD_BUTTONS: DownloadButton[] = [
  {
    platform: 'ios',
    icon: <Apple className="w-5 h-5" aria-hidden="true" />,
    label: 'Download on App Store',
    url: APP_STORE_URLS.ios
  },
  {
    platform: 'android',
    icon: <GooglePlay className="w-5 h-5" aria-hidden="true" />,
    label: 'Get it on Google Play',
    url: APP_STORE_URLS.android
  }
];

// Error Boundary Component
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    logger.error('Landing page error boundary caught an error', {
      error: error.message,
      componentStack: errorInfo.componentStack
    });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="text-center p-8">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-4">Please try refreshing the page</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Refresh page"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hero Section Component
const HeroSection: React.FC<HeroSectionProps> = React.memo(({ onCtaClick }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCtaClick = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      logger.info('Hero CTA clicked');
      trackEvent('hero_cta_click', { timestamp: Date.now() });
      
      await onCtaClick();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process request';
      logger.error('Hero CTA error', { error: errorMessage });
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [onCtaClick]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Decentralized Work Marketplace for{' '}
            <span className="text-blue-600">Top Tech Talent</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Earn crypto by completing bounties, building projects, and contributing to the 
            Solana ecosystem. Flexible, fast, and secure.
          </p>
          
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
              <p className="text-red-700">{error}</p>
            </div>
          )}
          
          <button
            onClick={handleCtaClick}
            disabled={isLoading}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Start earning on Gibwork"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />
                Processing...
              </>
            ) : (
              <>
                Start Earning
                <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Mobile Section Component
const MobileSection: React.FC<MobileSectionProps> = React.memo(({ onDownloadClick }) => {
  const [clickedPlatform, setClickedPlatform] = useState<string | null>(null);

  const handleDownload = useCallback(async (platform: 'ios' | 'android') => {
    try {
      setClickedPlatform(platform);
      
      logger.info('Download button clicked', { platform });
      trackEvent('download_click', { platform, timestamp: Date.now() });
      
      await onDownloadClick(platform);
      
      // Open app store URL
      window.open(APP_STORE_URLS[platform], '_blank', 'noopener,noreferrer');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to open app store';
      logger.error('Download error', { platform, error: errorMessage });
    } finally {
      setClickedPlatform(null);
    }
  }, [onDownloadClick]);

  return (
    <section 
      className="py-20 bg-white"
      aria-label="Mobile app download section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Mockup */}
          <div className="relative" aria-hidden="true">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm font-semibold text-gray-800">Gibwork</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Earn on the Go. Anytime. Anywhere.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Bring the Solana talent layer to your pocket. Track bounties, submit work, 
              and receive instant payouts directly through the Gibwork mobile app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {DOWNLOAD_BUTTONS.map((button) => (
                <button
                  key={button.platform}
                  onClick={() => handleDownload(button.platform)}
                  disabled={clickedPlatform === button.platform}
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={`${button.label} for ${button.platform}`}
                >
                  {clickedPlatform === button.platform ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />
                  ) : (
                    button.icon
                  )}
                  <span className="ml-2">{button.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

MobileSection.displayName = 'MobileSection';

// How It Works Section Component
const HowItWorks: React.FC<HowItWorksProps> = React.memo(({ steps }) => {
  if (!steps || steps.length === 0) {
    logger.warn('HowItWorks rendered with no steps');
    return null;
  }

  return (
    <section 
      className="py-20 bg-gray-50"
      aria-label="How it works section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps and start earning crypto today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
                {step.icon}
              </div>
              <div className="flex items-center mb-4">
                <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  Step {step.stepNumber}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

HowItWorks.displayName = 'HowItWorks';

// Main Landing Page Component
const LandingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializePage = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        logger.info('Landing page initialized');
        trackEvent('page_view', { page: 'landing', timestamp: Date.now() });
        
        // Simulate initial data loading
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize page';
        logger.error('Page initialization error', { error: errorMessage });
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    initializePage();
  }, []);

  const handleCtaClick = useCallback(async () => {
    try {
      logger.info('CTA button clicked');
      trackEvent('cta_click', { timestamp: Date.now() });
      
      // Navigate to signup or next page
      window.location.href = '/signup';
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to navigate';
      logger.error('CTA navigation error', { error: errorMessage });
      throw err;
    }
  }, []);

  const handleDownloadClick = useCallback(async (platform: 'ios' | 'android') => {
    try {
      logger.info('Download initiated', { platform });
      trackEvent('download_initiated', { platform, timestamp: Date.now() });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process download';
      logger.error('Download error', { platform, error: errorMessage });
      throw err;
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" aria-hidden="true" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Page</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Retry loading page"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <HeroSection onCtaClick={handleCtaClick} />
        <HowItWorks steps={STEPS} />
        <MobileSection onDownloadClick={handleDownloadClick} />
      </div>
    </ErrorBoundary>
  );
};

LandingPage.displayName = 'LandingPage';

export default LandingPage;