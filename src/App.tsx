import { useEffect, useState, createContext, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { siteConfig } from './lib/config';
import { useLenis } from './hooks/useLenis';
import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import LatestArticles from './sections/LatestArticles';
import ArtCategory from './sections/ArtCategory';
import LifestyleSection from './sections/LifestyleSection';
import DesignSection from './sections/DesignSection';
import GreenTribe from './sections/GreenTribe';
import AuthorsSection from './sections/AuthorsSection';
import InstagramGallery from './sections/InstagramGallery';
import Footer from './sections/Footer';
import OnboardingSystem from './sections/OnboardingSystem';
import Dashboard from './sections/Dashboard';

gsap.registerPlugin(ScrollTrigger);

// Theme Types
export type ThemeType = 'barber' | 'beautician' | 'photographer' | 'tattoo' | 'skincare' | 'makeup';

// Studio Data Interface
export interface StudioData {
  theme: ThemeType;
  studioName: string;
  city: string;
  yearsInBusiness: string;
  services: { name: string; price: number }[];
  weeklyClients: number;
  averagePrice: number;
  workingDays: string[];
  workingHours: { start: string; end: string };
}

// App Context
interface AppContextType {
  isOnboarding: boolean;
  setIsOnboarding: (value: boolean) => void;
  currentTheme: ThemeType;
  setCurrentTheme: (theme: ThemeType) => void;
  studioData: StudioData;
  setStudioData: (data: Partial<StudioData>) => void;
  onboardingPhase: number;
  setOnboardingPhase: (phase: number) => void;
  showDashboard: boolean;
  setShowDashboard: (value: boolean) => void;
}

const defaultStudioData: StudioData = {
  theme: 'barber',
  studioName: '',
  city: '',
  yearsInBusiness: '',
  services: [],
  weeklyClients: 0,
  averagePrice: 0,
  workingDays: [],
  workingHours: { start: '09:00', end: '18:00' },
};

export const AppContext = createContext<AppContextType>({
  isOnboarding: false,
  setIsOnboarding: () => {},
  currentTheme: 'barber',
  setCurrentTheme: () => {},
  studioData: defaultStudioData,
  setStudioData: () => {},
  onboardingPhase: 1,
  setOnboardingPhase: () => {},
  showDashboard: false,
  setShowDashboard: () => {},
});

export const useAppContext = () => useContext(AppContext);

function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  const [isOnboarding, setIsOnboarding] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('barber');
  const [studioData, setStudioDataState] = useState<StudioData>(defaultStudioData);
  const [onboardingPhase, setOnboardingPhase] = useState(1);
  const [showDashboard, setShowDashboard] = useState(false);

  const setStudioData = (data: Partial<StudioData>) => {
    setStudioDataState(prev => ({ ...prev, ...data }));
  };

  useEffect(() => {
    // Set document title
    document.title = siteConfig.title || 'Studio Performance OS';
    document.documentElement.lang = siteConfig.language || 'en';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  useEffect(() => {
    // Update theme attribute when theme changes
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    // Refresh ScrollTrigger on load
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);

    // Handle resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const contextValue: AppContextType = {
    isOnboarding,
    setIsOnboarding,
    currentTheme,
    setCurrentTheme,
    studioData,
    setStudioData,
    onboardingPhase,
    setOnboardingPhase,
    showDashboard,
    setShowDashboard,
  };

  // Show Dashboard if onboarding is complete
  if (showDashboard) {
    return (
      <AppContext.Provider value={contextValue}>
        <div className="relative min-h-screen bg-[#0a0a0a]">
          <Dashboard />
        </div>
      </AppContext.Provider>
    );
  }

  // Show Onboarding System
  if (isOnboarding) {
    return (
      <AppContext.Provider value={contextValue}>
        <div className="relative min-h-screen bg-[#0a0a0a]">
          <OnboardingSystem />
        </div>
      </AppContext.Provider>
    );
  }

  // Show Landing Page with Template Sections
  return (
    <AppContext.Provider value={contextValue}>
      <div className="relative min-h-screen bg-brand-linen cursor-custom">
        {/* Noise texture overlay */}
        <NoiseOverlay />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <main>
          {/* Hero Section - Split Screen Perspective Theater */}
          <HeroSection />

          {/* Latest Articles - Horizontal Dynamic Flow (Problem/Solution Cards) */}
          <LatestArticles />

          {/* Art Category - Fixed Sidebar with Reveal (Dashboard Features) */}
          <ArtCategory />

          {/* Lifestyle - Scattered Polaroid Chaos (Creative Professional Types) */}
          <LifestyleSection />

          {/* Design - Mosaic Wall (Theme Showcase) */}
          <DesignSection />

          {/* Green Tribe - Parallax Video Background (Social Proof) */}
          <GreenTribe />

          {/* Authors - Orbital Avatar System (Team) */}
          <AuthorsSection />

          {/* Instagram Gallery - 3D Tunnel (Studio Showcase) */}
          <InstagramGallery />
        </main>

        {/* Footer - Curtain Reveal */}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
