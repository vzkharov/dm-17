const digitsOnlyRegex = /\D/g;

const phoneMask = '+7 (___) ___-__-__';
const phoneRegex = /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/;

const isValidPhone = (phone: string): boolean => {
  if (!phone) {
    return false;
  }

  const digitsOnly = phone.replace(digitsOnlyRegex, '');
  return phoneRegex.test(digitsOnly);
};

const formatPhone = (phone: string): string => {
  // Remove all non-digit characters

  const digits = phone.replace(/\D/g, '');

  // Always start with +7
  let formatted = '+7';

  // Format the rest of the number according to the mask
  if (digits.length >= 1) {
    formatted += ` (${digits.substring(1, 4)}`;
  }
  if (digits.length > 4) {
    formatted += `) ${digits.substring(4, 7)}`;
  }
  if (digits.length > 7) {
    formatted += `-${digits.substring(7, 9)}`;
  }
  if (digits.length > 9) {
    formatted += `-${digits.substring(9, 11)}`;
  }

  return formatted;
};

export { isValidPhone, formatPhone, phoneMask, phoneRegex };
