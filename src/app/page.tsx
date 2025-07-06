'use client';

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainBanner from '@/components/MainBanner';
import LetterTemplates from '@/components/LetterTemplates';
import Statistics from '@/components/Statistics';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <MainBanner />
      <LetterTemplates />
      <Statistics />
      <Footer />
    </div>
  );
}
