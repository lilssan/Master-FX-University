/**
 * Master FX University - HeroSection Component
 * Split layout with conversion-optimized copy on the left
 * and interactive institutional trading terminal mockup on the right.
 * Headline: "MASTER THE MARKET. FOLLOW THE EXPERTS. PROFIT CONSISTENTLY."
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  Flame,
  CheckCircle2,
  Activity,
  Bell,
  Smartphone,
  Layers,
  ChevronRight,
  Eye,
  BarChart3,
  SlidersHorizontal,
} from 'lucide-react';
import { PlanDuration } from '../types';

interface HeroSectionProps {
  onCtaClick: (planId?: PlanDuration) => void;
  onExplorePricing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCtaClick,
  onExplorePricing,
}) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'M15' | 'H1' | 'H4' | 'D1'>('H1');
  const [activeSignal, setActiveSignal] = useState<'EURUSD' | 'XAUUSD'>('EURUSD');

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[600px] h-[500px] bg-crimson/12 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[400px] bg-crimson/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: High-Converting Copy & Direct CRO Callouts */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Live Session Status Pip */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#181214] border border-crimson/40 text-xs font-mono font-medium text-neutral-300 w-fit mb-6 shadow-[0_0_15px_rgba(211,47,47,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-white font-semibold">LIVE SIGNAL DESK:</span>
            <span className="text-emerald-400 font-bold">LONDON / NY SESSION OVERLAP</span>
          </div>

          {/* Exact Required Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
            MASTER THE MARKET.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-crimson-bright">
              FOLLOW THE EXPERTS.
            </span>{' '}
            <span className="text-crimson-bright block sm:inline">PROFIT CONSISTENTLY.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
            Stop blowing trading accounts on emotional setups. Receive 0-5 institutional sniper signals daily with exact entries, stop-losses, and profit targets dispatched straight to your WhatsApp and Telegram.
          </p>

          {/* Core Trust & Win-Rate Points */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono metric-tabular">89.4%</div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono mt-0.5">Audited Win Rate</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-crimson-bright font-mono metric-tabular">0-5</div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono mt-0.5">High-Precision Signals</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono metric-tabular">₦420M+</div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono mt-0.5">Student Profits Documented</div>
            </div>
          </div>

          {/* CTAs with Red Glowing Primary Action */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={() => onCtaClick('november-special')}
              className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded bg-crimson hover:bg-crimson-bright text-white font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-200 shadow-[0_0_24px_rgba(211,47,47,0.5)] hover:shadow-[0_0_36px_rgba(255,51,75,0.7)] active:scale-[0.98] cursor-pointer"
            >
              <Flame className="w-5 h-5 fill-white" />
              <span>CLAIM NOVEMBER ACCESS (₦25,000)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={onExplorePricing}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-semibold text-sm sm:text-base transition-colors duration-200 cursor-pointer"
            >
              <span>Explore All 3 VIP Tiers</span>
            </button>
          </div>

          {/* Guarantee & Frictionless Micro-Copy */}
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Verified Order Flow Execution
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              Instant VIP Onboarding via WhatsApp Desk: <strong className="text-emerald-400">+234 814 892 1554</strong>
            </span>
          </div>
        </div>

        {/* Right Column: Responsive Tech Mockup (Trading Charts & Signal Desk) */}
        <div className="lg:col-span-5 relative">
          {/* Main Terminal Window Mockup */}
          <div className="relative rounded-xl bg-[#0E0E11] border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(211,47,47,0.2)] overflow-hidden">
            {/* Terminal Window Header */}
            <div className="px-4 py-3 bg-[#16161A] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 font-mono text-xs font-semibold text-neutral-300 tracking-wider">
                  MASTER_FX_TERMINAL_V4
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  FEED LIVE
                </span>
              </div>
            </div>

            {/* Terminal Controls Bar */}
            <div className="px-4 py-2.5 bg-[#121215] border-b border-white/5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveSignal('EURUSD')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeSignal === 'EURUSD'
                      ? 'bg-crimson/20 border border-crimson/50 text-white font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  EUR/USD
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSignal('XAUUSD')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeSignal === 'XAUUSD'
                      ? 'bg-crimson/20 border border-crimson/50 text-white font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  XAU/USD
                </button>
              </div>

              <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                {(['M15', 'H1', 'H4', 'D1'] as const).map((tf) => (
                  <button
                    key={tf}
                    type="button"
                    onClick={() => setSelectedTimeframe(tf)}
                    className={`px-1.5 py-0.5 rounded ${
                      selectedTimeframe === tf
                        ? 'bg-white/10 text-crimson-bright font-bold'
                        : 'hover:text-white'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Trading Chart Visualizer (SVG Candlesticks with Order Line Overlays) */}
            <div className="p-4 bg-[#0A0A0C] relative">
              {/* Chart Grid Lines */}
              <div className="h-44 w-full relative flex flex-col justify-between py-2 border-b border-white/5 font-mono text-[10px] text-neutral-600">
                <div className="w-full border-b border-dashed border-white/5 flex justify-between">
                  <span>1.08950</span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/60 px-1 rounded">TP3 (+180 pips)</span>
                </div>
                <div className="w-full border-b border-dashed border-white/5 flex justify-between">
                  <span>1.08720</span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/40 px-1 rounded">TP2 (+110 pips)</span>
                </div>
                <div className="w-full border-b border-dashed border-emerald-500/30 flex justify-between">
                  <span className="text-emerald-400">1.08450</span>
                  <span className="text-emerald-400 font-bold">TP1 (+65 pips) [HIT]</span>
                </div>
                <div className="w-full border-b-2 border-crimson flex justify-between items-center bg-crimson/10 px-1 py-0.5">
                  <span className="text-white font-bold text-[11px]">ENTRY: 1.08150</span>
                  <span className="text-crimson-bright font-black uppercase tracking-wider text-[11px]">INSTITUTIONAL BUY</span>
                </div>
                <div className="w-full border-b border-dashed border-rose-500/40 flex justify-between">
                  <span className="text-rose-400">1.07880</span>
                  <span className="text-rose-400 font-bold">SL (27 pips risk)</span>
                </div>

                {/* SVG Candlestick representation */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                  {/* Candlestick bars */}
                  <g opacity="0.85">
                    {/* Candle 1 */}
                    <line x1="12%" y1="75%" x2="12%" y2="55%" stroke="#FF334B" strokeWidth="1.5" />
                    <rect x="10%" y="60%" width="4%" height="12%" fill="#FF334B" />

                    {/* Candle 2 */}
                    <line x1="24%" y1="78%" x2="24%" y2="52%" stroke="#FF334B" strokeWidth="1.5" />
                    <rect x="22%" y="58%" width="4%" height="15%" fill="#FF334B" />

                    {/* Candle 3 (Hammer Reversal) */}
                    <line x1="36%" y1="88%" x2="36%" y2="50%" stroke="#00E676" strokeWidth="1.5" />
                    <rect x="34%" y="54%" width="4%" height="14%" fill="#00E676" />

                    {/* Candle 4 (Bullish Impulsive) */}
                    <line x1="48%" y1="62%" x2="48%" y2="35%" stroke="#00E676" strokeWidth="1.5" />
                    <rect x="46%" y="40%" width="4%" height="18%" fill="#00E676" />

                    {/* Candle 5 (Consolidation) */}
                    <line x1="60%" y1="46%" x2="60%" y2="30%" stroke="#00E676" strokeWidth="1.5" />
                    <rect x="58%" y="34%" width="4%" height="8%" fill="#00E676" />

                    {/* Candle 6 (Breakout Surge) */}
                    <line x1="72%" y1="40%" x2="72%" y2="18%" stroke="#00E676" strokeWidth="1.5" />
                    <rect x="70%" y="22%" width="4%" height="16%" fill="#00E676" />

                    {/* Candle 7 (Current active live bar) */}
                    <line x1="84%" y1="28%" x2="84%" y2="12%" stroke="#00E676" strokeWidth="2" />
                    <rect x="82%" y="15%" width="4%" height="11%" fill="#00E676" />
                  </g>
                </svg>
              </div>

              {/* Live Signal Ticket Card */}
              <div className="mt-3 p-3 rounded-lg bg-[#141418] border border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white font-mono">
                      {activeSignal === 'EURUSD' ? 'EUR/USD' : 'XAU/USD'}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400">
                      BUY CONFIRMED
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5 font-mono">
                    Session: London Open • R:R 1:3.4
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-base font-black text-emerald-400 font-mono">
                    +114 PIPS
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono">
                    TP2 SECURED
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Notification Floating Preview Card (Illustrates Instant WhatsApp Dispatch) */}
            <div className="p-4 bg-[#111114] border-t border-white/10">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#18181D] border border-emerald-500/30 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">Master FX VIP Dispatch</span>
                    <span className="text-[10px] font-mono text-neutral-400">JUST NOW</span>
                  </div>
                  <p className="text-[11px] font-mono text-neutral-300 mt-1 truncate">
                    🚨 NEW SETUP: XAU/USD BUY @ 2,740.20 | SL: 2,732.00 | TP1: 2,752.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Live Win-Rate Badge */}
          <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3.5 rounded-xl bg-[#17171C] border border-crimson/50 shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(211,47,47,0.3)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-crimson/20 border border-crimson/50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-crimson-bright" />
            </div>
            <div>
              <div className="text-xs font-mono text-neutral-400">Weekly Target Met</div>
              <div className="text-sm font-bold text-white font-mono">+642 Pips Banked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
