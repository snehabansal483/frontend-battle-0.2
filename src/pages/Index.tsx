
import React from 'react';
import { ThemeProvider } from '@/hooks/useTheme';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import VideoGallery from '@/components/VideoGallery';
import Analytics from '@/components/Analytics';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen pt-16">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <VideoGallery />
        <Analytics />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
