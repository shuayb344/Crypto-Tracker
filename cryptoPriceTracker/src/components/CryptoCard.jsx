import { Link } from "react-router-dom";
import { formatMoney } from "../utils/FormatMoney";
export function CryptoCard({ crypto }) {
  return (<Link  to={`/coins/${crypto.id}`}>
    <div className="bg-neutral-950 mx-auto p-4 hover:bg-neutral-900 rounded-lg shadow-md flex items-center gap-4 mb-3 sm:w-[70%]">
      <span className="">#{crypto.market_cap_rank}</span>
      <img src={crypto.image} alt={crypto.name} className="w-12 h-12" />
      <div>
        <h2 className="text-lg font-bold">{crypto.name}</h2>
        <p className="text-sm text-gray-400">{crypto.symbol.toUpperCase()}</p>
      </div>
      <div className="ml-auto flex flex-col items-end">
        <p className="text-lg font-semibold">{formatMoney(crypto.current_price)}</p>
        <p
          className={`text-sm ${
            (crypto.price_change_percentage_24h || 0) >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {(crypto.price_change_percentage_24h || 0).toFixed(2)}%
        </p>
      </div>
    </div>
    
  </Link>
    
  );
}