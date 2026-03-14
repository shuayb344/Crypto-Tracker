import {  useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  cryptoDetailsQueryOptions,
  cryptoPriceHistoryQueryOptions,
} from "../hooks/useCryptoQueries";
import { formatMoney } from "../utils/FormatMoney";
import { formatMarketCap } from "../utils/FormatMoney";
import {CartesianGrid, LineChart, ResponsiveContainer,XAxis,YAxis,Line, Tooltip} from "recharts"
export function CryptoDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data,
    isLoading,
    isError,
  } = useQuery(cryptoDetailsQueryOptions(id as string));

  const {
    data: priceHistory,
    isLoading: isPriceHistoryLoading,
    isError: isPriceHistoryError,
  } = useQuery(cryptoPriceHistoryQueryOptions(id as string));

  const chartData =
    priceHistory && Array.isArray(priceHistory.prices)
      ? priceHistory.prices.map(([timestamp, price]: [number, number]) => ({
          time: new Date(timestamp).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          price: Number(price.toFixed(2)),
        }))
      : [];

  return (
    <div className=" bg-black min-h-screen text-white overflow-hidden">
      <div className="sm:w-[80%] mx-auto">
      {isLoading || isPriceHistoryLoading ? (
          <div className="mt-10 flex flex-col gap-3 justify-center items-center h-32">
            <div className="w-12 h-12  border-4 border-gray-500 border-t-transparent rounded-full animate-spin "></div>
            <p>Loading...</p>
          </div>
        ) : isError || isPriceHistoryError ? (
          <>
            <p className="text-center text-3xl ">
              Unable to load details for {id}
            </p>
            <button
              className="mt-4 mx-auto block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
              onClick={() => navigate("/market")}
            >
              Go Back
            </button>
          </>
        ) : data && data.id ? (<>
          <div className="p-6 bg-neutral-950 rounded-lg mt-4">
            <div className="flex flex-col sm:flex-row gap-6 flex-wrap justify-between items-center">
              <div className="flex sm:flex-row flex-col gap-6 items-center">
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
              <h3 className="text-2xl font-bold mb-4">Price History (7 days)</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart  data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="time" stroke="#888" style={{fontSize:'12px'}} />
                    <YAxis stroke="#888" domain={["auto","auto"]} style={{fontSize:'12px'}}  />
                   <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} dot={false} /> 
                   <Tooltip contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "5px" }}                    labelStyle={{ color: "#fff", fontSize: "12px" }}
                    itemStyle={{ color: "#fff", fontSize: "12px" }}
                   />
                </LineChart>
              </ResponsiveContainer>

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