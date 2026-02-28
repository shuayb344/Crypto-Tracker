import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCryptoDetails } from "../api/fetchData";
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
        ) : data && data.id ? (
          <div className="p-6 bg-neutral-900 rounded-lg mt-4">
            <h2 className="text-2xl font-bold mb-2">{data.name} ({data.symbol?.toUpperCase()})</h2>
            <p>Rank: {data.market_cap_rank}</p>
            <p>Current Price: ${data.market_data?.current_price?.usd}</p>
            
          </div>
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