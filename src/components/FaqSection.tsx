/**
 * Master FX University - FaqSection Component
 * Answers common CRO objections: payment methods in Nigeria, signal speed, beginner guidance, brokers
 */

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How are signals delivered to me after payment?',
    answer:
      'Immediately after completing your registration and generating your VIP ticket, you are automatically routed to our official WhatsApp Desk. Within 2 to 5 minutes of verification, you are added to the Master FX VIP Telegram channel and priority WhatsApp broadcast group.',
  },
  {
    question: 'Can total beginners follow these signals profitably?',
    answer:
      'Yes. Every signal gives exact, unambiguous figures: Pair name, BUY/SELL direction, exact Entry Price, Stop Loss, and three Take-Profit targets (TP1, TP2, TP3). You also receive our 1-hour "Copy & Paste Execution Guide" explaining position sizing and how to manage trades on MT4/MT5.',
  },
  {
    question: 'What payment methods do you accept in Nigeria?',
    answer:
      'We accept all Nigerian bank transfers (instant automated confirmation), local debit cards (Mastercard, Visa, Verve), and cryptocurrency (USDT TRC20/BEP20) for international traders.',
  },
  {
    question: 'Why only 0-5 signals per day?',
    answer:
      'Retail channels that send 20+ signals a day cause traders to over-leverage and blow accounts during session chop. Master FX waits patiently for high-probability liquidity sweeps during London and New York session opens. We prioritize capital preservation and high risk-to-reward ratios (1:2 to 1:5).',
  },
  {
    question: 'Which Forex broker or app do I need?',
    answer:
      'Our signals work on any regulated Forex broker and any trading platform, including MetaTrader 4 (MT4), MetaTrader 5 (MT5), cTrader, and TradingView. If you are doing prop firm challenges like FTMO, FundedNext, or The Funded Trader, our risk guidelines are fully compatible with daily drawdown rules.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 uppercase mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-crimson-bright" />
          <span>Clarity & Transparency</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="mt-2 text-sm text-neutral-400">
          Everything you need to know about Master FX University VIP access.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="rounded-xl bg-[#121215] border border-white/10 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-white font-semibold text-sm sm:text-base hover:text-crimson-bright transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-crimson-bright' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/5 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
