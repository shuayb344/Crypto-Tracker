import axios from 'axios';
const baseURL = 'https://api.coingecko.com/api/v3';
export async function fetchCryptoData() {
  try {
    const response = await axios.get(`${baseURL}/coins/markets?vs_currency=usd`);
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto data:', error);
  }
}
;
export async function fetchCryptoDetails(id) {
  try {
    const response = await axios.get(`${baseURL}/coins/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto details:', error);
  }
}
export async function fetchCryptoPriceHistory(id) {
  try {
    const response = await axios.get(`${baseURL}/coins/${id}/market_chart?vs_currency=usd&days=7`);
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto price history:', error);
  }
}


export async function fetchNews() {
  try {
    const response = await axios.get(
      'https://min-api.cryptocompare.com/data/v2/news/?lang=EN'
    );
    return response.data?.Data || [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}