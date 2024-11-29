import { maskSensitiveInfo, validateEmail } from "../src/myModule";

describe('Email Validation', () => {
  test('Valid email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('Invalid email', () => {
    expect(validateEmail('test@com')).toBe(false);
    expect(validateEmail('invalid-email')).toBe(false);
  });
});

describe('Mask Sensitive Info', () => {
  test('Correctly masks card number', () => {
    expect(maskSensitiveInfo('1234567890123456')).toBe('************3456');
  });
});
