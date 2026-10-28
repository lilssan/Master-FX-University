import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateNigerianPhoneNumber,
  validateEmail,
  validateFullName,
  formatNaira,
  PRICING_TIERS,
  getTierById,
  OFFICIAL_WHATSAPP_DESK_NUMBER,
  OFFICIAL_WHATSAPP_DESK_FORMATTED,
} from './validation';

test('OFFICIAL_WHATSAPP_DESK_NUMBER is valid +234 format (+2348148921554)', () => {
  const result = validateNigerianPhoneNumber(OFFICIAL_WHATSAPP_DESK_NUMBER);
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '+2348148921554');
  assert.equal(result.formatted, '+234 814 892 1554');
});

test('validateNigerianPhoneNumber accepts standard 080 format', () => {
  const result = validateNigerianPhoneNumber('08031234567');
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '+2348031234567');
  assert.equal(result.formatted, '+234 803 123 4567');
  assert.equal(result.error, undefined);
});

test('validateNigerianPhoneNumber accepts +234 with spaces and dashes', () => {
  const result = validateNigerianPhoneNumber('+234 812-345-6789');
  assert.equal(result.isValid, true);
  assert.equal(result.normalized, '+2348123456789');
  assert.equal(result.formatted, '+234 812 345 6789');
});

test('validateNigerianPhoneNumber accepts 070, 090, 091 prefixes', () => {
  assert.equal(validateNigerianPhoneNumber('07012345678').isValid, true);
  assert.equal(validateNigerianPhoneNumber('09098765432').isValid, true);
  assert.equal(validateNigerianPhoneNumber('09123456789').isValid, true);
});

test('validateNigerianPhoneNumber rejects invalid lengths and invalid operators', () => {
  assert.equal(validateNigerianPhoneNumber('').isValid, false);
  assert.equal(validateNigerianPhoneNumber('12345').isValid, false);
  // invalid prefix like 012...
  assert.equal(validateNigerianPhoneNumber('01234567890').isValid, false);
});

test('validateEmail validates RFC compliant emails', () => {
  assert.equal(validateEmail('trader@masterfx.com').isValid, true);
  assert.equal(validateEmail('user.name+tag@domain.co').isValid, true);
  assert.equal(validateEmail('').isValid, false);
  assert.equal(validateEmail('invalid-email').isValid, false);
  assert.equal(validateEmail('@domain.com').isValid, false);
});

test('validateFullName requires non-empty string >= 2 chars', () => {
  assert.equal(validateFullName('Tariq Danjuma').isValid, true);
  assert.equal(validateFullName('A').isValid, false);
  assert.equal(validateFullName('   ').isValid, false);
});

test('formatNaira produces correct currency strings', () => {
  const formatted25k = formatNaira(25000);
  assert.match(formatted25k, /25,000/);
  const formatted30k = formatNaira(30000);
  assert.match(formatted30k, /30,000/);
  const formatted70k = formatNaira(70000);
  assert.match(formatted70k, /70,000/);
});

test('PRICING_TIERS includes the three required tiers with exact prices', () => {
  assert.equal(PRICING_TIERS.length, 3);
  
  const oneMonth = PRICING_TIERS.find((t) => t.id === '1-month');
  assert.ok(oneMonth);
  assert.equal(oneMonth?.priceNGN, 30000);

  const novSpecial = PRICING_TIERS.find((t) => t.id === 'november-special');
  assert.ok(novSpecial);
  assert.equal(novSpecial?.priceNGN, 25000);
  assert.equal(novSpecial?.isSpecialOffer, true);

  const threeMonths = PRICING_TIERS.find((t) => t.id === '3-months');
  assert.ok(threeMonths);
  assert.equal(threeMonths?.priceNGN, 70000);
});

test('getTierById falls back to november-special if invalid ID provided', () => {
  const result = getTierById('non-existent' as any);
  assert.equal(result.id, 'november-special');
});
