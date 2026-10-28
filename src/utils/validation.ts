/**
 * Master FX University - Form Validation & Utility Logic
 * CRO-optimized phone formatting (+234 Nigeria standard) and financial calculation helpers
 */

import { PlanDuration, PricingTier } from '../types';

export const OFFICIAL_WHATSAPP_DESK_NUMBER = '+2348148921554';
export const OFFICIAL_WHATSAPP_DESK_RAW = '2348148921554';
export const OFFICIAL_WHATSAPP_DESK_FORMATTED = '+234 814 892 1554';

/**
 * Validates and normalizes Nigerian phone numbers.
 * Supports inputs like:
 * - "+2348031234567"
 * - "+234 803 123 4567"
 * - "08031234567"
 * - "8031234567"
 * - "2348031234567"
 */
export function validateNigerianPhoneNumber(input: string): {
  isValid: boolean;
  normalized: string;
  formatted: string;
  error?: string;
} {
  const cleaned = input.trim().replace(/[\s\-\(\)]/g, '');

  if (!cleaned) {
    return {
      isValid: false,
      normalized: '',
      formatted: '',
      error: 'WhatsApp number is required for instant VIP group dispatch',
    };
  }

  let digitsOnly = cleaned;
  if (digitsOnly.startsWith('+')) {
    digitsOnly = digitsOnly.substring(1);
  }

  // Handle various prefixes
  let standard10Digits = '';

  if (digitsOnly.startsWith('234') && digitsOnly.length === 13) {
    // 234 + 10 digits (e.g. 2348031234567)
    standard10Digits = digitsOnly.substring(3);
  } else if (digitsOnly.startsWith('0') && digitsOnly.length === 11) {
    // 0 + 10 digits (e.g. 08031234567)
    standard10Digits = digitsOnly.substring(1);
  } else if (digitsOnly.length === 10) {
    // 10 digits direct (e.g. 8031234567)
    standard10Digits = digitsOnly;
  } else {
    return {
      isValid: false,
      normalized: cleaned,
      formatted: cleaned,
      error: 'Please enter a valid 11-digit Nigerian WhatsApp number (e.g., 08012345678 or +234...)',
    };
  }

  // Check valid Nigerian mobile network prefixes (70, 80, 81, 90, 91)
  const prefix2 = standard10Digits.substring(0, 2);
  const validPrefixes = ['70', '71', '80', '81', '90', '91'];
  if (!validPrefixes.includes(prefix2)) {
    return {
      isValid: false,
      normalized: `+234${standard10Digits}`,
      formatted: `+234 ${standard10Digits}`,
      error: 'Unrecognized Nigerian mobile operator prefix (expected 070, 080, 081, 090, 091)',
    };
  }

  const normalized = `+234${standard10Digits}`;
  const formatted = `+234 ${standard10Digits.slice(0, 3)} ${standard10Digits.slice(3, 6)} ${standard10Digits.slice(6)}`;

  return {
    isValid: true,
    normalized,
    formatted,
  };
}

/**
 * Validates an email address with standard RFC pattern
 */
export function validateEmail(email: string): {
  isValid: boolean;
  error?: string;
} {
  const trimmed = email.trim();
  if (!trimmed) {
    return { isValid: false, error: 'Email address is required for course portal access' };
  }

  // Standard safe regex for email validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid email address (e.g., trader@example.com)' };
  }

  return { isValid: true };
}

/**
 * Validates full name
 */
export function validateFullName(name: string): {
  isValid: boolean;
  error?: string;
} {
  const trimmed = name.trim();
  if (!trimmed) {
    return { isValid: false, error: 'Your full name is required for certificate and terminal onboarding' };
  }
  if (trimmed.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long' };
  }
  return { isValid: true };
}

/**
 * Formats amount into Nigerian Naira display string
 */
export function formatNaira(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Available pricing tiers in the system
 */
export const PRICING_TIERS: PricingTier[] = [
  {
    id: '1-month',
    name: 'Starter Trader Pass',
    tagline: 'Foundational Market Execution',
    durationLabel: '1 Month Access',
    priceNGN: 30000,
    description: 'Perfect for serious beginners testing our high-accuracy signal desk and risk models.',
    features: [
      { text: '0-5 High-Conviction Signals Daily', isHighlight: true },
      { text: 'Audited 89.4% Historical Win Rate' },
      { text: 'Exact Entry, Stop-Loss & 3 TP Targets' },
      { text: 'Strict 1:2 to 1:5 Risk-to-Reward Guidance' },
      { text: 'Real-time Telegram & WhatsApp Channel Alerts' },
      { text: 'Weekly London/NY Strategy Review' },
    ],
    ctaText: 'Start 1-Month Pass',
    deliveryChannels: ['WhatsApp', 'Telegram'],
  },
  {
    id: 'november-special',
    name: 'VIP Black Pass',
    tagline: 'Exclusive November Promotion',
    durationLabel: 'November Special (Limited Time)',
    priceNGN: 25000,
    originalPriceNGN: 30000,
    isSpecialOffer: true,
    savingsText: 'Save ₦5,000 (17% OFF)',
    badge: 'LIMITED NOVEMBER OFFER',
    description: 'Our most popular tier. Full VIP channel access with priority trade alerts and mentor coaching.',
    features: [
      { text: '0-5 High-Conviction Signals Daily', isHighlight: true },
      { text: 'Instant WhatsApp Direct Desk Routing', isHighlight: true },
      { text: 'Live Sniper Breakout & News Event Trade Rooms', isHighlight: true },
      { text: 'Clear Entry, SL, TP1, TP2, TP3 Matrix' },
      { text: 'Institutional Lot Sizing & Risk Calculator' },
      { text: 'Master FX Video Strategy Vault (14+ Hrs)' },
      { text: 'Priority Mentor Trade Reviews' },
    ],
    ctaText: 'Claim November Special (₦25,000)',
    deliveryChannels: ['WhatsApp', 'Telegram', 'Live Streams'],
  },
  {
    id: '3-months',
    name: 'Institutional Mastery',
    tagline: 'Quarterly High-Performance Track',
    durationLabel: '3 Months VIP Access',
    priceNGN: 70000,
    originalPriceNGN: 90000,
    isBestValue: true,
    savingsText: 'Save ₦20,000 (Best Value)',
    badge: 'MAXIMUM ROI',
    description: 'For committed traders aiming for funded account challenges and full-time consistency.',
    features: [
      { text: 'Everything in VIP Black Pass included', isHighlight: true },
      { text: '3 Full Months of Continuous Signal Flow' },
      { text: 'Prop Firm Challenge Strategy Roadmap (FTMO / MFF)' },
      { text: 'Direct 1-on-1 Portfolio Diagnostics' },
      { text: 'Advanced Smart Money Concepts (SMC) Masterclass' },
      { text: 'Lifetime Discord Mastermind Alumni Access' },
    ],
    ctaText: 'Secure 3-Month Mastery',
    deliveryChannels: ['WhatsApp', 'Telegram', 'Discord', 'Live Streams'],
  },
];

export function getTierById(tierId: PlanDuration): PricingTier {
  const found = PRICING_TIERS.find((t) => t.id === tierId);
  return found || PRICING_TIERS[1]; // default to november special
}
