export const formateCurrency = (
  amount: number,
  locale: string = 'en-US',
  currency: string = 'USD'
) => {
  return amount?.toLocaleString(locale, {
    style: 'currency',
    currency,
  });
};
