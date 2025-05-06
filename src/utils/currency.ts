const formatPrice = (price: number) =>
  price.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  });

export { formatPrice };
