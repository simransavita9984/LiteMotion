import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProfitabilitySection from '@/components/ProfitabilitySection';
import MarketCapture from '@/components/MarketCapture';
import BrandLogos from '@/components/BrandLogos';
import FeaturesSection from '@/components/FeaturesSection';
import ProductShowcase from '@/components/ProductShowcase';
import InventorySection from '@/components/InventorySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProfitabilitySection />
        <MarketCapture />
        <BrandLogos />
        <FeaturesSection />
        <ProductShowcase />
        <InventorySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;