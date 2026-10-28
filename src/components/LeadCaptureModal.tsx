/**
 * Master FX University - LeadCaptureModal Component
 * Accessible dialog component triggering on pricing / hero CTAs.
 * Captures Full Name, Email, and WhatsApp Number with strict +234 Nigeria format validation.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShieldCheck,
  Lock,
  ArrowRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Smartphone,
  ExternalLink,
} from 'lucide-react';
import {
  validateNigerianPhoneNumber,
  validateEmail,
  validateFullName,
  formatNaira,
  getTierById,
  PRICING_TIERS,
} from '../utils/validation';
import { PlanDuration, FormValidationErrors } from '../types';

export interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PlanDuration;
  onPlanChange: (plan: PlanDuration) => void;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  onPlanChange,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [couponCode, setCouponCode] = useState(
    selectedPlan === 'november-special' ? 'NOV2026-SPECIAL' : ''
  );
  const [errors, setErrors] = useState<FormValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const currentTier = getTierById(selectedPlan);

  // Sync coupon when plan changes
  useEffect(() => {
    if (selectedPlan === 'november-special') {
      setCouponCode('NOV2026-SPECIAL');
    }
  }, [selectedPlan]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Real-time phone number formatting feedback
  const phoneValidation = validateNigerianPhoneNumber(whatsappNumber);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormValidationErrors = {};

    const nameCheck = validateFullName(fullName);
    if (!nameCheck.isValid) {
      newErrors.fullName = nameCheck.error;
    }

    const emailCheck = validateEmail(email);
    if (!emailCheck.isValid) {
      newErrors.email = emailCheck.error;
    }

    if (!phoneValidation.isValid) {
      newErrors.whatsappNumber = phoneValidation.error;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate high-converting API registration and VIP desk ticket generation
    setTimeout(() => {
      const generatedCode = `MFX-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedCode);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName('');
    setEmail('');
    setWhatsappNumber('');
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg my-8 rounded-2xl bg-[#121216] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(211,47,47,0.25)] overflow-hidden z-10"
        >
          {/* Top Crimson Edge Glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-crimson to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-crimson/15 border border-crimson/40 text-crimson-bright text-xs font-mono font-semibold uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instant VIP Activation</span>
                </div>
                <h3 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
                  Secure Your Master FX Pass
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Enter your credentials below to generate your direct WhatsApp VIP routing pass.
                </p>
              </div>

              {/* Selected Plan Summary Banner with Tier Selector */}
              <div className="p-4 rounded-xl bg-[#18181F] border border-white/10 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-neutral-400 uppercase">Selected Package</span>
                  <div className="flex items-center gap-1">
                    {PRICING_TIERS.map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => onPlanChange(tier.id)}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${
                          selectedPlan === tier.id
                            ? 'bg-crimson text-white font-bold'
                            : 'bg-black/40 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {tier.id === 'november-special' ? 'Nov Special' : tier.id === '1-month' ? '1 Mo' : '3 Mo'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-baseline justify-between mt-2">
                  <div>
                    <span className="text-base font-bold text-white">{currentTier.name}</span>
                    <span className="text-xs text-neutral-400 block font-mono">
                      {currentTier.durationLabel}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-white font-mono metric-tabular">
                      {formatNaira(currentTier.priceNGN)}
                    </span>
                    {currentTier.savingsText && (
                      <span className="block text-[11px] font-bold text-crimson-bright font-mono">
                        {currentTier.savingsText}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Lead Capture Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Full Name <span className="text-crimson-bright">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                    }}
                    placeholder="e.g. Ibrahim Okafor"
                    className={`w-full px-4 py-3 rounded bg-[#1A1A22] border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-crimson focus:ring-1 focus:ring-crimson'
                        : 'border-white/10 focus:border-crimson focus:ring-1 focus:ring-crimson'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-crimson-bright flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Email Address <span className="text-crimson-bright">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="e.g. trader@gmail.com"
                    className={`w-full px-4 py-3 rounded bg-[#1A1A22] border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-crimson focus:ring-1 focus:ring-crimson'
                        : 'border-white/10 focus:border-crimson focus:ring-1 focus:ring-crimson'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-crimson-bright flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* WhatsApp Number with Nigerian Validation */}
                <div>
                  <label htmlFor="whatsapp" className="block text-xs font-medium text-neutral-300 mb-1.5">
                    WhatsApp Number (+234 format) <span className="text-crimson-bright">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-xs font-mono text-neutral-400">
                      <span className="flex items-center gap-1 mr-1 text-emerald-400">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>🇳🇬</span>
                      </span>
                    </div>
                    <input
                      id="whatsapp"
                      type="tel"
                      value={whatsappNumber}
                      onChange={(e) => {
                        setWhatsappNumber(e.target.value);
                        if (errors.whatsappNumber) {
                          setErrors((prev) => ({ ...prev, whatsappNumber: undefined }));
                        }
                      }}
                      placeholder="0803 123 4567 or +234..."
                      className={`w-full pl-16 pr-4 py-3 rounded bg-[#1A1A22] border text-sm text-white placeholder-neutral-500 focus:outline-none font-mono transition-all ${
                        errors.whatsappNumber
                          ? 'border-crimson focus:ring-1 focus:ring-crimson'
                          : phoneValidation.isValid && whatsappNumber
                          ? 'border-emerald-500/60 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400'
                          : 'border-white/10 focus:border-crimson focus:ring-1 focus:ring-crimson'
                      }`}
                    />
                  </div>

                  {/* Dynamic Format Feedback */}
                  {whatsappNumber && (
                    <div className="mt-1.5 text-xs font-mono">
                      {phoneValidation.isValid ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Validated: {phoneValidation.formatted}
                        </span>
                      ) : (
                        <span className="text-neutral-500">
                          Format: 080... or +234 803...
                        </span>
                      )}
                    </div>
                  )}

                  {errors.whatsappNumber && (
                    <p className="mt-1 text-xs text-crimson-bright flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.whatsappNumber}
                    </p>
                  )}
                </div>

                {/* Coupon Code / Promo */}
                <div>
                  <label htmlFor="coupon" className="block text-xs font-medium text-neutral-400 mb-1">
                    Promo Code (Optional)
                  </label>
                  <input
                    id="coupon"
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="ENTER CODE"
                    className="w-full px-4 py-2 rounded bg-[#16161C] border border-white/5 text-xs font-mono text-white placeholder-neutral-600 uppercase focus:outline-none focus:border-white/20"
                  />
                  {selectedPlan === 'november-special' && (
                    <span className="text-[11px] text-emerald-400 font-mono mt-1 block">
                      ✓ Promo applied: ₦5,000 instant discount deducted.
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 py-4 px-6 rounded bg-crimson hover:bg-crimson-bright text-white font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-[0_0_24px_rgba(211,47,47,0.5)] hover:shadow-[0_0_36px_rgba(255,51,75,0.7)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Generating VIP Access...</span>
                    </div>
                  ) : (
                    <>
                      <span>PROCEED TO WHATSAPP DESK ({formatNaira(currentTier.priceNGN)})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Trust and Privacy statement */}
                <div className="pt-2 flex flex-col items-center justify-center gap-1 text-[11px] text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>256-Bit Encrypted • Direct WhatsApp VIP Routing</span>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-400">
                    Official WhatsApp Desk: <strong className="text-emerald-400">+234 814 892 1554</strong>
                  </span>
                </div>
              </form>
            </div>
          ) : (
            /* Success State */
            <div className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight">
                VIP Access Pass Generated!
              </h3>
              <p className="text-sm text-neutral-300 mt-2 max-w-sm mx-auto">
                Welcome to Master FX University, <span className="text-white font-semibold">{fullName}</span>. Your ticket has been confirmed.
              </p>

              {/* VIP Ticket Voucher Box */}
              <div className="my-6 p-4 rounded-xl bg-[#181820] border border-crimson/40 text-left font-mono">
                <div className="flex justify-between items-center text-xs text-neutral-400 border-b border-white/10 pb-2">
                  <span>DISPATCH TICKET ID:</span>
                  <span className="text-crimson-bright font-bold">{ticketId}</span>
                </div>
                <div className="mt-3 space-y-1.5 text-xs text-neutral-300">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Tier:</span>
                    <span className="font-bold text-white">{currentTier.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Amount:</span>
                    <span className="text-emerald-400 font-bold">{formatNaira(currentTier.priceNGN)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">WhatsApp:</span>
                    <span className="font-bold text-white">{phoneValidation.formatted}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp VIP routing button */}
              <a
                href={`https://wa.me/2348148921554?text=${encodeURIComponent(
                  `Hello Master FX University Desk, I just registered for the ${currentTier.name} (${ticketId}). My name is ${fullName} (${phoneValidation.normalized}). Please verify my membership and grant instant VIP group access.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>OPEN OFFICIAL WHATSAPP DESK (+234 814 892 1554)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="mt-4 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Close and return to portal
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LeadCaptureModal;
