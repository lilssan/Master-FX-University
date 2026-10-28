/**
 * Master FX University - Footer Component
 * Institutional footer with regulatory compliance, derivatives risk warning, and rapid contact links
 */

import React from 'react';
import { ShieldCheck, MessageCircle, Send, ArrowUpRight } from 'lucide-react';
import { PlanDuration } from '../types';

interface FooterProps {
  onJoinClick: (planId?: PlanDuration) => void;
}

export const Footer: React.FC<FooterProps> = ({ onJoinClick }) => {
  return (
    <footer className="w-full bg-[#070709] border-t border-white/10 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-crimson flex items-center justify-center font-mono font-bold text-white text-sm">
                FX
              </div>
              <span className="text-white font-black text-lg tracking-tight">
                MASTER FX <span className="text-crimson-bright">UNIVERSITY</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
              Master FX University is an institutional financial technology and foreign exchange education academy. We empower traders across Nigeria and worldwide with mechanical order flow setups, daily high-precision signals, and strict risk preservation models.
            </p>
            <div className="mt-4 flex items-center gap-3 text-[11px] font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Official WhatsApp Desk: <strong className="text-white">+234 814 892 1554</strong></span>
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Methodology & 2x2 Grid
                </a>
              </li>
              <li>
                <a href="#proof" className="hover:text-white transition-colors">
                  Audited Signals Ledger
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-crimson-bright hover:underline">
                  November Special Tier (₦25,000)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Support */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">VIP Desks</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => onJoinClick('november-special')}
                  className="text-white font-semibold flex items-center gap-1 hover:text-crimson-bright transition-colors cursor-pointer"
                >
                  <span>VIP Telegram Channel</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/2348148921554?text=Hello%20Master%20FX%20University%20Desk%2C%20I%20would%20like%20to%20inquire%20about%20the%20VIP%20desk."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold flex items-center gap-1 hover:text-crimson-bright transition-colors"
                >
                  <span>Direct WhatsApp Concierge (+234 814 892 1554)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <span className="text-[11px] text-neutral-500 font-mono block mt-2">
                  Operating Hours: London (08:00 UTC) to New York Close (21:00 UTC)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Risk Disclaimer */}
        <div className="pt-8 space-y-3 text-[11px] text-neutral-500 leading-relaxed">
          <p>
            <strong className="text-neutral-400">High-Risk Investment Warning:</strong> Trading Foreign Exchange (Forex), Contracts for Difference (CFDs), and commodities on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange products, you should carefully consider your investment objectives, level of experience, and risk appetite.
          </p>
          <p>
            Master FX University provides educational materials, algorithmic setups, and market research signals. All educational signals and trade parameters are for informational and execution demonstration purposes. Past performance is no guarantee of future results.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-600 font-mono text-[10px]">
            <span>© {new Date().getFullYear()} Master FX University. All Rights Reserved.</span>
            <span>Obsidian & Crimson Institutional Terminal Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
