import { useEffect, useState } from "react";
import { fetchCryptoData } from "../api/fetchData";
export function MarketPage() {
  const[cryptoData,setCryptoData] = useState([]);
  const [loading,setLoading] = useState(true);

   const fetchData = async () => {
    try {
      const data = await fetchCryptoData();
      setCryptoData(data);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="p-4 bg-black  text-white">
      {loading? (<div className="flex flex-col gap-3 justify-center items-center h-32">
      <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin "></div>
      <p>Loading Crypto ... </p>
    </div>):(<div>
      {cryptoData.map((crypto) => (
        <div key={crypto.id} className="flex items-center gap-4 p-4 border-b border-gray-700">
          <img src={crypto.image} alt={crypto.name} className="w-10 h-10" />
          <div>
            <h2 className="text-lg font-bold">{crypto.name}</h2>
            <p className="text-sm text-gray-400">${crypto.current_price}</p>
          </div>
        </div>
      ))}
      </div>)}
    </div>    
  );
}