/**
 * Master FX University - ValuePropsGrid Component
 * High-converting 2x2 feature grid emphasizing execution precision:
 * 1. Accurate Signals (89.4% audited win rate)
 * 2. 0-5 Signals Daily (Zero noise, sniper quality)
 * 3. Risk Management (Strict 1:2 to 1:5 R:R, capital preservation)
 * 4. Clear Entry/SL/TP (Predefined numbers, multiple targets)
 * Features subtle Y-axis lift and glowing crimson border on hover.
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Target,
  Zap,
  ShieldAlert,
  Sliders,
  Crosshair,
  TrendingUp,
  Percent,
  CheckCircle2,
  Lock,
  ArrowUpRight,
} from 'lucide-react';

export const ValuePropsGrid: React.FC = () => {
  const valueProps = [
    {
      id: 'accurate-signals',
      title: 'Accurate Signals',
      badge: '89.4% HISTORICAL WIN RATE',
      icon: Target,
      highlightMetric: '89.4%',
      highlightLabel: 'Audited Accuracy',
      description:
        'Institutional order flow models and liquidity sweeps. We only trade where banks and hedge funds position their capital.',
      features: [
        'Backed by 5+ years of live verified Myfxbook records',
        'Direct confluence of SMC (Smart Money Concepts) & Wyckoff',
        'No repainting or delayed hindsight charts',
      ],
      terminalPreview: {
        pair: 'EUR/USD',
        type: 'BUY SWING',
        outcome: '+118 PIPS (TP2 HIT)',
        status: 'WIN',
      },
    },
    {
      id: 'daily-frequency',
      title: '0-5 Signals Daily',
      badge: 'ZERO OVER-TRADING NOISE',
      icon: Zap,
      highlightMetric: '0-5',
      highlightLabel: 'Sniper Setups / Day',
      description:
        'Quality over quantity. We refuse to gamble during chop. You receive high-probability trades with asymmetric upside only.',
      features: [
        'Filter out 95% of retail noise and fakeouts',
        'Focused on London & New York high-volume sessions',
        'Save hours staring at candlesticks in anxiety',
      ],
      terminalPreview: {
        pair: 'XAU/USD (GOLD)',
        type: 'LONDON BREAKOUT',
        outcome: 'CONFIRMED SETUP',
        status: 'ACTIVE',
      },
    },
    {
      id: 'risk-management',
      title: 'Risk Management',
      badge: 'CAPITAL PRESERVATION FIRST',
      icon: ShieldAlert,
      highlightMetric: '1:3.2',
      highlightLabel: 'Average Risk-to-Reward',
      description:
        'The secret of profitable trading is not winning every trade; it is never blowing your balance. Strict position sizing calculated for every setup.',
      features: [
        'Maximum 1-2% account exposure per trade',
        'Automated break-even guidance once TP1 is secured',
        'Prop firm drawdown compliance (FTMO, FundedNext)',
      ],
      terminalPreview: {
        pair: 'RISK RULE',
        type: 'MAX RISK: 1.5%',
        outcome: 'POTENTIAL REWARD: 4.5%',
        status: 'PROTECTED',
      },
    },
    {
      id: 'clear-levels',
      title: 'Clear Entry / SL / TP',
      badge: 'PRE-CALCULATED MATH',
      icon: Sliders,
      highlightMetric: '3 TPs',
      highlightLabel: 'Multi-Stage Targets',
      description:
        'Zero ambiguity. Every signal gives exact entry price, tight stop-loss, and three tiered take-profit targets with trailing rules.',
      features: [
        'Instant copy-paste directly into MT4, MT5, or cTrader',
        'Partial profit-taking triggers sent via WhatsApp & Telegram',
        'No guessing when to exit or hold runner positions',
      ],
      terminalPreview: {
        pair: 'GBP/JPY',
        type: 'ENTRY: 198.420',
        outcome: 'SL: 198.150 | TP1: 198.900',
        status: 'CLEAR',
      },
    },
  ];

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-96 h-96 bg-crimson/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-96 h-96 bg-crimson/8 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold tracking-wider uppercase mb-4">
          <Crosshair className="w-3.5 h-3.5 text-crimson-bright" />
          <span>Institutional Methodology</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          WHY MASTER FX TRADERS <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-crimson-bright">
            WIN WHEN OTHERS BLOW ACCOUNTS.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-400">
          Built on mechanical rules, mathematical expectation, and real-time guidance directly on your phone.
        </p>
      </div>

      {/* 2x2 Value Props Grid with Hover Lift & Crimson Glow */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {valueProps.map((prop, index) => {
          const Icon = prop.icon;

          return (
            <motion.div
              key={prop.id}
              whileHover={{
                y: -6,
                boxShadow: '0 0 30px -4px rgba(211, 47, 47, 0.4)',
                borderColor: 'rgba(211, 47, 47, 0.6)',
              }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative group p-6 sm:p-8 rounded-xl bg-[#121214] border border-white/10 transition-colors duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top hairline accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-crimson/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header row with Icon and Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1A1A1E] border border-white/10 group-hover:border-crimson/50 group-hover:bg-crimson/10 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-6 h-6 text-crimson-bright" />
                  </div>

                  <span className="text-[11px] font-mono tracking-wider font-semibold px-2.5 py-1 rounded bg-[#1A1A1E] border border-white/10 text-neutral-300 group-hover:border-crimson/40 group-hover:text-crimson-bright transition-colors">
                    {prop.badge}
                  </span>
                </div>

                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-crimson-bright transition-colors">
                    {prop.title}
                  </h3>
                  <div className="text-right">
                    <span className="text-xl font-bold font-mono text-white metric-tabular">
                      {prop.highlightMetric}
                    </span>
                    <span className="block text-[10px] text-neutral-500 uppercase tracking-wider font-mono">
                      {prop.highlightLabel}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-400 mt-2 leading-relaxed">
                  {prop.description}
                </p>

                {/* Features checklist */}
                <div className="mt-6 pt-5 border-t border-white/5 space-y-2.5">
                  {prop.features.map((item, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-crimson-bright shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal Micro-Card Preview */}
              <div className="mt-6 p-3.5 rounded-lg bg-[#0E0E10] border border-white/5 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-neutral-400 font-medium">{prop.terminalPreview.pair}</span>
                </div>
                <div className="text-neutral-300 font-semibold">{prop.terminalPreview.outcome}</div>
                <div className="text-[10px] px-2 py-0.5 rounded bg-crimson/20 border border-crimson/40 text-crimson-bright font-bold">
                  {prop.terminalPreview.status}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ValuePropsGrid;
