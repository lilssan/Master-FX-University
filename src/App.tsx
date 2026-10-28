/**
 * Master FX University - Landing Page & CRO Funnel Entry
 * Architecture:
 * - Navbar
 * - LiveTapeTicker
 * - HeroSection (Split layout with interactive trading terminal)
 * - ValuePropsGrid (2x2 grid with accurate signals, 0-5 daily, risk mgmt, entry/SL/TP)
 * - LiveSignalsProof (Verified signal ledger & student payouts in NGN)
 * - PricingEngine (3-tier cards with 1.05x scaled November Special)
 * - FaqSection
 * - Footer
 * - LeadCaptureModal (Dialog capturing Name, Email, +234 WhatsApp Number)
 */

import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import LiveTapeTicker from './components/LiveTapeTicker';
import HeroSection from './components/HeroSection';
import ValuePropsGrid from './components/ValuePropsGrid';
import LiveSignalsProof from './components/LiveSignalsProof';
import PricingEngine from './components/PricingEngine';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import LeadCaptureModal from './components/LeadCaptureModal';
import { PlanDuration } from './types';
import { Flame, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PlanDuration>('november-special');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (planId: PlanDuration = 'november-special') => {
    setSelectedPlan(planId);
    setIsModalOpen(true);
  };

  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-crimson selection:text-white relative">
      {/* Top Urgency Sticky Micro-Header */}
      <div className="bg-gradient-to-r from-crimson-dark via-crimson to-crimson-dark py-1.5 px-4 text-center text-xs font-semibold tracking-wider text-white flex items-center justify-center gap-2 shadow-md z-50 relative">
        <Flame className="w-3.5 h-3.5 fill-white animate-bounce" />
        <span>
          <strong>NOVEMBER FLASH SALE:</strong> VIP Black Pass discounted from{' '}
          <span className="line-through opacity-80">₦30,000</span> to{' '}
          <strong className="underline decoration-white underline-offset-2">₦25,000</strong>. Limited slots remaining!
        </span>
        <button
          type="button"
          onClick={() => handleOpenModal('november-special')}
          className="ml-2 px-2 py-0.5 rounded bg-black/40 hover:bg-black/60 text-[11px] font-mono uppercase tracking-wider text-white border border-white/20 transition-colors cursor-pointer"
        >
          Claim Now
        </button>
      </div>

      {/* Navigation */}
      <Navbar onJoinClick={handleOpenModal} />

      {/* Institutional Live FX Tape Ticker */}
      <LiveTapeTicker />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onCtaClick={handleOpenModal}
          onExplorePricing={handleScrollToPricing}
        />

        {/* 2. 2x2 Value Props Grid */}
        <ValuePropsGrid />

        {/* Audit Proof & Verified Signal Ledger */}
        <LiveSignalsProof />

        {/* 3. Pricing Engine (Middle tier 1.05x scaled with glowing red border) */}
        <PricingEngine
          onSelectPlan={handleOpenModal}
          selectedPlanId={selectedPlan}
        />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onJoinClick={handleOpenModal} />

      {/* 4. Lead Capture Modal (+234 format validation) */}
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
        onPlanChange={setSelectedPlan}
      />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
