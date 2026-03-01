import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCryptoDetails } from "../api/fetchData";
import { formatMoney } from "../utils/FormatMoney";
import { formatMarketCap } from "../utils/FormatMoney";
export function CryptoDetailsPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
    useEffect(() => {
      fetchCryptoDetails(id)
        .then((res) => {
          setData(res || []);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setIsLoading(false);
        });
    }, [id]);
  return (
    <div className=" bg-black min-h-screen text-white overflow-auto">
      <div className="sm:w-[80%] mx-auto">
        <header className="flex items-center flex-wrap  justify-between  p-4 ">
        <Link to="/"><span className='text-3xl font-bold text-yellow-500 font-["Dancing_Script"] '>CryptoTracker</span></Link>
        <div className='text-xl flex gap-3 p-4 '>
          <Link  to="/market"><span className='text-slate-200 hover:text-yellow-300'>Market</span></Link>
          <Link to="/news"><span className='text-slate-200 hover:text-yellow-300'>News</span></Link>
        </div>  
      </header>
      {isLoading ? (
          <div className="mt-10 flex flex-col gap-3 justify-center items-center h-32">
            <div className="w-12 h-12  border-4 border-gray-500 border-t-transparent rounded-full animate-spin "></div>
            <p>Loading...</p>
          </div>
        ) : data && data.id ? (<>
          <div className="p-6 bg-neutral-950 rounded-lg mt-4">
            <div className="flex flex-col sm:flex-row gap-6 flex-wrap justify-between items-center">
                <img src={data.image?.large } alt={data.name} />
                <div>
                  <p className="text-lg mb-2">Rank: #{data.market_cap_rank}</p>
                  <h2 className="sm:text-3xl text-2xl font-bold mb-2">{data.name} ({data.symbol?.toUpperCase()})</h2>
                  <p className="text-3xl mt-3"> {formatMoney(data.market_data?.current_price?.usd)}</p>
                   <p
              className={`text-lg p-2 ${
                data.market_data?.price_change_percentage_24h >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {data.market_data?.price_change_percentage_24h?.toFixed(2)}%
            </p>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 mt-6 sm:mt-0">
                  <div>
                  <h3 className="sm:text-3xl text-2xl  font-bold mb-2">Market Cap </h3>
                  <p className="text-center sm:text-xl" >{formatMarketCap(data.market_data?.market_cap?.usd)}</p>
                </div>
                <div>
                  <h3 className="sm:text-3xl text-2xl font-bold mb-2">24h Volume </h3>
                  <p className="text-center sm:text-xl">{formatMarketCap(data.market_data?.total_volume?.usd)}</p>
                </div>
                </div>
                
                
            </div>
            
            
          </div>
          <div className="p-6 bg-neutral-950 rounded-lg mt-4">

          </div>
          </>
        ) : (<>
            <p className="text-center text-3xl ">Unable to load details for {id}</p>
            <button className="mt-4 mx-auto block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded" onClick={() => navigate("/market")}>
                Go Back
            </button>
        </>
          
        )}
      </div>
    </div>
  );
}