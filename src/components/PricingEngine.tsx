/**
 * Master FX University - PricingEngine Component
 * CRO-optimized 3-tier pricing architecture with prioritized November Special
 * Features high-urgency countdown timer, 1.05x elevation, glowing red boundaries, and WhatsApp VIP routing.
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Clock,
  Flame,
  Check,
  MessageCircle,
  TrendingUp,
} from 'lucide-react';
import { PRICING_TIERS, formatNaira } from '../utils/validation';
import { PlanDuration, PricingTier } from '../types';

export interface PricingEngineProps {
  onSelectPlan: (planId: PlanDuration) => void;
  selectedPlanId?: PlanDuration;
}

export const PricingEngine: React.FC<PricingEngineProps> = ({
  onSelectPlan,
  selectedPlanId = 'november-special',
}) => {
  // Live countdown timer for the November Special urgency element
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 38,
    seconds: 50,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial glow effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-crimson/10 blur-[130px] rounded-full" />
      </div>

      {/* Header and CRO Framing */}
      <div className="relative text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/10 border border-crimson/40 text-crimson-bright text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(211,47,47,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-crimson-bright animate-pulse" />
          <span>Transparent Institutional Pricing</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          CHOOSE YOUR TRADING EDGE. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-crimson-bright">
            JOIN THE WINNING DESK.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
          One setup pays for your entire membership. Transparent execution with pre-set entries, stop-losses, and profit targets.
        </p>

        {/* November Special Flash Banner */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-lg bg-[#140D0E] border border-crimson/50 text-white text-sm shadow-[0_0_25px_rgba(211,47,47,0.25)]">
          <div className="flex items-center gap-1.5 text-crimson-bright font-bold">
            <Flame className="w-4 h-4 fill-crimson animate-bounce" />
            <span>NOVEMBER SPECIAL EXPIRING SOON:</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-white">
            <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10">
              {String(timeLeft.days).padStart(2, '0')}d
            </span>
            :
            <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10">
              {String(timeLeft.hours).padStart(2, '0')}h
            </span>
            :
            <span className="px-2 py-0.5 rounded bg-black/60 border border-white/10">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </span>
            :
            <span className="px-2 py-0.5 rounded bg-black/60 border border-crimson/40 text-crimson-bright">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>
      </div>

      {/* 3-Tier Grid with 1.05x Scaling on the Middle Card */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
        {PRICING_TIERS.map((tier) => {
          const isSpecial = tier.isSpecialOffer;
          const isBest = tier.isBestValue;
          const isSelected = selectedPlanId === tier.id;

          return (
            <motion.div
              key={tier.id}
              whileHover={{ y: isSpecial ? -6 : -4 }}
              transition={{ duration: 0.2 }}
              className={`relative flex flex-col justify-between rounded-xl transition-all duration-300 ${
                isSpecial
                  ? 'lg:-mt-4 lg:-mb-4 lg:scale-105 z-20 bg-gradient-to-b from-[#1C1214] via-[#121215] to-[#0E0E11] border-2 border-crimson shadow-[0_0_40px_rgba(211,47,47,0.35)] hover:shadow-[0_0_55px_rgba(211,47,47,0.5)]'
                  : 'bg-[#121214] border border-white/10 hover:border-white/20 shadow-xl'
              }`}
            >
              {/* Top Accent Glow for the Special Card */}
              {isSpecial && (
                <div className="absolute -top-[1px] left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-crimson-bright to-transparent blur-xs" />
              )}

              {/* Badges / Header Ribbons */}
              <div className="p-6 sm:p-8 pb-4">
                <div className="flex items-center justify-between gap-2 mb-4">
                  {isSpecial ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-crimson text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(211,47,47,0.6)]">
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <span>{tier.badge}</span>
                    </div>
                  ) : isBest ? (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-bold tracking-wider uppercase">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>{tier.badge}</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium uppercase tracking-wider">
                      <span>Standard Pass</span>
                    </div>
                  )}

                  {/* Channel Badges */}
                  <div className="flex items-center gap-1">
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp VIP</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{tier.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">{tier.tagline}</p>

                {/* Price Presentation */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight metric-tabular">
                    {formatNaira(tier.priceNGN)}
                  </span>
                  <span className="text-neutral-400 text-sm font-medium">/ {tier.durationLabel.toLowerCase().replace(' access', '')}</span>
                </div>

                {tier.originalPriceNGN && (
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-sm line-through text-neutral-500 font-mono">
                      {formatNaira(tier.originalPriceNGN)}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-crimson/20 border border-crimson/30 text-crimson-bright">
                      {tier.savingsText}
                    </span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-neutral-300 mt-4 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="px-6 sm:px-8 py-4 border-t border-white/5 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  What's included in this pass:
                </p>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <div className="mt-0.5 shrink-0">
                        {feature.isHighlight ? (
                          <div className="w-4 h-4 rounded-full bg-crimson/20 flex items-center justify-center border border-crimson/60">
                            <Check className="w-2.5 h-2.5 text-crimson-bright font-bold" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <Check className="w-2.5 h-2.5 text-neutral-300" />
                          </div>
                        )}
                      </div>
                      <span
                        className={
                          feature.isHighlight
                            ? 'text-white font-medium'
                            : 'text-neutral-300'
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA & Delivery Guarantee */}
              <div className="p-6 sm:p-8 pt-4">
                <button
                  type="button"
                  onClick={() => onSelectPlan(tier.id)}
                  aria-label={`Get started with ${tier.name}`}
                  className={`w-full group flex items-center justify-center gap-2 px-6 py-4 rounded font-semibold text-sm tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                    isSpecial
                      ? 'bg-crimson text-white hover:bg-crimson-bright hover:shadow-[0_0_24px_rgba(255,51,75,0.6)] active:scale-[0.98]'
                      : 'bg-white/10 text-white hover:bg-white/15 border border-white/10 hover:border-white/30 active:scale-[0.98]'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Instant Telegram + WhatsApp VIP activation upon verification</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Guarantee & Verification Seal */}
      <div className="mt-16 p-6 rounded-xl bg-[#121215] border border-white/10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-crimson/15 border border-crimson/40 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6 text-crimson-bright" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm sm:text-base">100% Audited Signal Accuracy Guarantee</h4>
            <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
              Every signal comes with predefined stop-loss, risk sizing, and target pips. Zero guessing.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 shrink-0 text-xs font-mono text-neutral-300">
          <div className="text-center">
            <div className="text-emerald-400 font-bold text-base sm:text-lg">89.4%</div>
            <div className="text-neutral-500 text-[10px] uppercase">Win Ratio</div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-white font-bold text-base sm:text-lg">1:3.2</div>
            <div className="text-neutral-500 text-[10px] uppercase">Avg R:R</div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-crimson-bright font-bold text-base sm:text-lg">0-5</div>
            <div className="text-neutral-500 text-[10px] uppercase">Daily Signals</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingEngine;
