/**
 * Master FX University - Type Definitions
 * Strict TypeScript interfaces for fintech landing page & CRO funnel
 */

export type PlanDuration = '1-month' | 'november-special' | '3-months';

export interface PricingTier {
  id: PlanDuration;
  name: string;
  tagline: string;
  durationLabel: string;
  priceNGN: number;
  originalPriceNGN?: number;
  isSpecialOffer?: boolean;
  isBestValue?: boolean;
  savingsText?: string;
  badge?: string;
  description: string;
  features: {
    text: string;
    isHighlight?: boolean;
    tooltip?: string;
  }[];
  ctaText: string;
  deliveryChannels: ('WhatsApp' | 'Telegram' | 'Discord' | 'Live Streams')[];
}

export interface LeadFormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  selectedPlan: PlanDuration;
  couponCode?: string;
}

export interface FormValidationErrors {
  fullName?: string;
  email?: string;
  whatsappNumber?: string;
  form?: string;
}

export interface TradingSignal {
  id: string;
  pair: string;
  direction: 'BUY' | 'SELL';
  timeframe: string;
  entry: string;
  stopLoss: string;
  tp1: string;
  tp2: string;
  tp3: string;
  riskReward: string;
  currentPips: number;
  status: 'ACTIVE' | 'TP1_HIT' | 'TP2_HIT' | 'TP3_HIT';
  timestamp: string;
}

export interface TickerPair {
  symbol: string;
  price: string;
  change: string;
  isUp: boolean;
  spread: string;
}

export interface ValueProp {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  statsLabel: string;
  statsValue: string;
  visualData?: {
    label: string;
    value: string;
    trend?: 'up' | 'down' | 'neutral';
  }[];
}
