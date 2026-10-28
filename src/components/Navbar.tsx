/**
 * Master FX University - Navbar Component
 * Minimalist institutional terminal header with live market ticker pip and direct CTA
 */

import React from 'react';
import { Flame, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { PlanDuration } from '../types';

interface NavbarProps {
  onJoinClick: (planId?: PlanDuration) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#080808]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center shadow-[0_0_20px_rgba(211,47,47,0.45)] border border-crimson/50">
            <span className="text-white font-black text-lg tracking-wider font-mono">FX</span>
          </div>
          <div>
            <span className="text-white font-extrabold text-base sm:text-lg tracking-tight block leading-tight">
              MASTER FX <span className="text-crimson-bright font-black">UNIVERSITY</span>
            </span>
            <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase block">
              Institutional Signal Desk & Academy
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          <a href="#features" className="hover:text-white transition-colors">
            Methodology
          </a>
          <a href="#proof" className="hover:text-white transition-colors">
            Live Proof
          </a>
          <a href="#pricing" className="text-crimson-bright hover:text-white transition-colors flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 fill-crimson" />
            <span>November Special (₦25,000)</span>
          </a>
          <a
            href="https://wa.me/2348148921554"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-mono text-[11px] normal-case bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded"
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp Desk</span>
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onJoinClick('november-special')}
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded bg-crimson hover:bg-crimson-bright text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_0_18px_rgba(211,47,47,0.4)] active:scale-[0.98] cursor-pointer"
          >
            <span>JOIN VIP DESK</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
