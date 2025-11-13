import { ShivaNavbar } from './components/ShivaNavbar';
import { ShivaHero } from './components/ShivaHero';
import { ShivaAnnouncements } from './components/ShivaAnnouncements';
import { AboutShivaTemple } from './components/AboutShivaTemple';
import { ShivaDarshan } from './components/ShivaDarshan';
import { ShivaServices } from './components/ShivaServices';
import { AboutShivaTrust } from './components/AboutShivaTrust';
import { DevoteeTestimonials } from './components/DevoteeTestimonials';
import { ShivaGallery } from './components/ShivaGallery';
import { ShivaVideos } from './components/ShivaVideos';
import { ShivaTrustActivities } from './components/ShivaTrustActivities';
import { ShivaTempleStats } from './components/ShivaTempleStats';
import { ShivaDonationPlans } from './components/ShivaDonationPlans';
import { DonationSection } from './components/DonationSection';
import { ShivaContactFooter } from './components/ShivaContactFooter';
import { ScrollToTop } from './components/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <ShivaNavbar />
          <ShivaHero />
          <ShivaAnnouncements />
          <AboutShivaTemple />
          <ShivaDarshan />
          <ShivaServices />
          <AboutShivaTrust />
          <DevoteeTestimonials />
          <ShivaGallery />
          <ShivaVideos />
          <ShivaTrustActivities />
          <ShivaTempleStats />
          <ShivaDonationPlans />
          <DonationSection />
          <ShivaContactFooter />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
