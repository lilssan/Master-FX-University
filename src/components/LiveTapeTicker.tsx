/**
 * Master FX University - LiveTapeTicker Component
 * Continuous horizontal stream of live FX quotes, spreads, and market deltas
 * Matches the institutional terminal aesthetic specified in the design guide.
 */

import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { TickerPair } from '../types';

const INITIAL_PAIRS: TickerPair[] = [
  { symbol: 'EUR/USD', price: '1.0842', change: '+0.42%', isUp: true, spread: '0.1' },
  { symbol: 'GBP/USD', price: '1.2980', change: '+0.68%', isUp: true, spread: '0.3' },
  { symbol: 'USD/JPY', price: '152.45', change: '-0.31%', isUp: false, spread: '0.2' },
  { symbol: 'XAU/USD', price: '2,742.60', change: '+1.45%', isUp: true, spread: '1.2' },
  { symbol: 'GBP/JPY', price: '197.85', change: '+0.28%', isUp: true, spread: '0.5' },
  { symbol: 'USD/CAD', price: '1.3892', change: '-0.15%', isUp: false, spread: '0.4' },
  { symbol: 'BTC/USD', price: '72,150.00', change: '+3.12%', isUp: true, spread: '4.0' },
  { symbol: 'AUD/USD', price: '0.6582', change: '+0.19%', isUp: true, spread: '0.2' },
];

export const LiveTapeTicker: React.FC = () => {
  const [pairs, setPairs] = useState<TickerPair[]>(INITIAL_PAIRS);

  // Micro jitter to reflect live ticking liquidity
  useEffect(() => {
    const interval = setInterval(() => {
      setPairs((prev) =>
        prev.map((item) => {
          if (Math.random() > 0.4) return item;
          const delta = (Math.random() * 0.04 - 0.02).toFixed(2);
          const isUp = parseFloat(delta) >= 0;
          return {
            ...item,
            change: `${isUp ? '+' : ''}${delta}%`,
            isUp,
          };
        })
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0B0B0B] border-y border-white/10 overflow-hidden py-2 text-xs font-mono">
      <div className="flex items-center">
        {/* Fixed Terminal Label */}
        <div className="shrink-0 px-4 py-1 flex items-center gap-2 bg-[#121215] border-r border-white/10 z-10 text-neutral-400">
          <Activity className="w-3.5 h-3.5 text-crimson-bright animate-pulse" />
          <span className="font-bold text-white tracking-wider text-[11px]">TICKER FEED</span>
        </div>

        {/* Marquee ticker stream */}
        <div className="flex overflow-hidden relative w-full">
          <div className="flex shrink-0 animate-marquee items-center gap-8 pl-4">
            {pairs.concat(pairs).map((pair, idx) => (
              <div key={idx} className="flex items-center gap-2.5 shrink-0">
                <span className="text-white font-bold">{pair.symbol}</span>
                <span className="text-neutral-300 metric-tabular">{pair.price}</span>
                <span
                  className={`flex items-center text-[11px] font-semibold ${
                    pair.isUp ? 'text-market-long text-emerald-400' : 'text-market-short text-rose-400'
                  }`}
                >
                  {pair.isUp ? (
                    <TrendingUp className="w-3 h-3 mr-0.5 inline" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-0.5 inline" />
                  )}
                  {pair.change}
                </span>
                <span className="text-neutral-500 text-[10px]">SPR: {pair.spread}</span>
                <span className="text-neutral-700">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTapeTicker;
