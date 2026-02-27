export const formatMoney = (amount) => {
  if (amount < 0.01) return amount.toFixed(8);
  return new Intl.NumberFormat("en-US", {
    style : "currency",
    currency : "USD",
    minimumFractionDigits :2 ,
    maximumFractionDigits : 2,}).format(amount);
}
export const formatMarketCap = (amount) => {
  if (amount >= 1e12) return `${(amount / 1e12).toFixed(2)}T`;
  if (amount >= 1e9) return `${(amount / 1e9).toFixed(2)}B`;
  if (amount >= 1e6) return `${(amount / 1e6).toFixed(2)}M`;
  if (amount >= 1e3) return `${(amount / 1e3).toFixed(2)}K`;
  return amount.toLocaleString();
}