import React from 'react';
import AppNavigation from '../Navigation/AppNavigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import AboutSection from '../AboutSection/AboutSection';
import Services from '../Services/Services';
// import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const AppLayout: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <AppNavigation />
      <main>
        <HomeBanner />
        <AboutSection />
        <Services />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AppLayout;
