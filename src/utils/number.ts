const formatNumber = (value: unknown): number => (typeof value === 'number' ? value : Number(value));

const formatInteger = (value: unknown): number => {
  const number = formatNumber(value);

  return Math.floor(number);
};

export { formatNumber, formatInteger };
