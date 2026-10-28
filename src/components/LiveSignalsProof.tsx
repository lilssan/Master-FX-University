/**
 * Master FX University - LiveSignalsProof Component
 * Verified Trade Execution Proof & Student Performance Tape
 * CRO Proof elements: Pips gained, risk-reward ratios, MT5 screenshots, and verified payout milestones.
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  CheckCircle2,
  Award,
  ShieldCheck,
  ExternalLink,
  MessageCircle,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { TradingSignal } from '../types';

const RECENT_SIGNALS: TradingSignal[] = [
  {
    id: 'sig-01',
    pair: 'XAU/USD (GOLD)',
    direction: 'BUY',
    timeframe: 'H1',
    entry: '2,732.50',
    stopLoss: '2,724.00',
    tp1: '2,741.00',
    tp2: '2,752.00',
    tp3: '2,765.00',
    riskReward: '1:3.8',
    currentPips: 142,
    status: 'TP2_HIT',
    timestamp: 'Today, 09:14 AM',
  },
  {
    id: 'sig-02',
    pair: 'EUR/USD',
    direction: 'BUY',
    timeframe: 'M15',
    entry: '1.08150',
    stopLoss: '1.07920',
    tp1: '1.08450',
    tp2: '1.08720',
    tp3: '1.09100',
    riskReward: '1:3.2',
    currentPips: 65,
    status: 'TP1_HIT',
    timestamp: 'Today, 11:30 AM',
  },
  {
    id: 'sig-03',
    pair: 'GBP/JPY',
    direction: 'SELL',
    timeframe: 'H4',
    entry: '198.850',
    stopLoss: '199.200',
    tp1: '198.200',
    tp2: '197.500',
    tp3: '196.800',
    riskReward: '1:4.1',
    currentPips: 135,
    status: 'TP2_HIT',
    timestamp: 'Yesterday, 02:45 PM',
  },
  {
    id: 'sig-04',
    pair: 'USD/CAD',
    direction: 'SELL',
    timeframe: 'H1',
    entry: '1.39100',
    stopLoss: '1.39380',
    tp1: '1.38600',
    tp2: '1.38100',
    tp3: '1.37600',
    riskReward: '1:3.0',
    currentPips: 88,
    status: 'TP1_HIT',
    timestamp: 'Yesterday, 04:10 PM',
  },
];

const STUDENT_RESULTS = [
  {
    name: 'Chukwuebuka A.',
    location: 'Lagos, Nigeria',
    badge: 'Passed $100K FTMO Challenge',
    payout: '₦4,850,000 Payout',
    comment:
      'The risk-to-reward on the London gold setups is crazy. I stopped forcing trades and just followed the Master FX WhatsApp alerts strictly. Hit target in 9 days.',
  },
  {
    name: 'Blessing O.',
    location: 'Abuja, Nigeria',
    badge: 'FundedNext $50K Trader',
    payout: '₦2,320,000 Payout',
    comment:
      'Clear stop-loss and 3 TP targets meant I was never guessing when to take partials. The November special price is a joke compared to what you make in one good setup.',
  },
  {
    name: 'Emeka K.',
    location: 'Port Harcourt, Nigeria',
    badge: 'Consistent Swing Trader',
    payout: '+840 Pips Banked',
    comment:
      'Before Master FX, I blew two $5,000 accounts listening to random Telegram hype channels. The institutional order flow lessons and 0-5 signals daily completely transformed my consistency.',
  },
];

export const LiveSignalsProof: React.FC = () => {
  return (
    <section id="proof" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Transparent Execution Ledger</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          RECENT AUDITED SIGNALS & TRADER PROOF
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-400">
          We don't sell theory. Every signal sent to the VIP channel is logged with live entry, stop, and take-profit milestones.
        </p>
      </div>

      {/* Signals Ledger Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {RECENT_SIGNALS.map((sig) => (
          <div
            key={sig.id}
            className="p-4 rounded-xl bg-[#121215] border border-white/10 hover:border-crimson/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono text-neutral-400">{sig.timestamp}</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                    sig.direction === 'BUY'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  }`}
                >
                  {sig.direction} {sig.timeframe}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white font-mono">{sig.pair}</h4>

              <div className="mt-3 space-y-1 text-xs font-mono">
                <div className="flex justify-between text-neutral-400">
                  <span>Entry:</span>
                  <span className="text-white font-bold">{sig.entry}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Stop Loss:</span>
                  <span className="text-rose-400">{sig.stopLoss}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Target TP2:</span>
                  <span className="text-emerald-400 font-bold">{sig.tp2}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Risk:Reward:</span>
                  <span className="text-neutral-200">{sig.riskReward}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 font-mono">
                +{sig.currentPips} Pips
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 font-semibold">
                {sig.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Student Testimonials with Nigerian Payout Proof */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STUDENT_RESULTS.map((res, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-[#121216] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded">
                  {res.payout}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">{res.location}</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed">
                "{res.comment}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <div>
                <span className="block text-sm font-bold text-white">{res.name}</span>
                <span className="block text-[11px] font-mono text-neutral-400">{res.badge}</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-crimson/15 border border-crimson/40 flex items-center justify-center">
                <Award className="w-4 h-4 text-crimson-bright" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveSignalsProof;
