import { fetchCryptoData } from "../api/fetchData";
import { useState, useEffect } from "react";
import { formatMoney } from "../utils/FormatMoney";

export function HomePageCards() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCryptoData()
      .then((res) => {
        setData(res || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  if (data.length === 0) {
    return <div className="text-white">Error loading data</div>;
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {data.slice(0, 4).map((crypto) => (
        <div className="bg-neutral-950 mx-auto p-4 hover:bg-neutral-900 rounded-lg shadow-md flex flex-row sm:flex-col items-center  gap-4 mb-3 ">
          <span className="">#{crypto.market_cap_rank}</span>
          <img className="w-12  h-12 sm:w-24 sm:h-24" src={crypto.image} alt={crypto.name} />
          <div>
            <h2 className="text-lg font-bold">{crypto.name}</h2>
            <p className="text-sm text-gray-400">
              {crypto.symbol.toUpperCase()}
            </p>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <p className="text-lg font-semibold">
              {formatMoney(crypto.current_price)}
            </p>
            <p
              className={`text-sm ${
                crypto.price_change_percentage_24h >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
