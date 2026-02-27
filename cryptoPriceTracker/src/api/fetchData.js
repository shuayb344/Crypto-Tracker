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
