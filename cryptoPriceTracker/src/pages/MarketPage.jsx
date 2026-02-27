import { useEffect, useState } from "react";
import { fetchCryptoData } from "../api/fetchData";
import { CryptoCard } from "../components/CryptoCard"; 
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
    <div className="p-4 bg-black min-h-screen text-white overflow-auto">
      <div className="w-[80%] mx-auto">
        <header className="flex flex-col sm:flex-row mx-auto items-center justify-between  p-4">
         <span className='text-3xl font-bold text-yellow-500 font-["Dancing_Script"] '>CryptoTracker</span>
        <div className="flex gap-2 items-center justify-center sm:w-1/2 border border-stone-700 bg-neutral-950 rounded-xl mt-3 align-middle">
          <input className="sm:p-3 p-2 rounded-xl  bg-neutral-950 w-[90%] focus:outline-0 text-white" type="text" placeholder="Search Crypto..."/>
          <img src="./src/assets/search.png" alt="Search Icon" className="w-5 h-5 mr-2" />
         
        </div>
         
      </header>
      
      </div>
      
      {loading? (<div className="mt-10 flex flex-col gap-3 justify-center items-center h-32">
      <div className="w-12 h-12  border-4 border-gray-500 border-t-transparent rounded-full animate-spin "></div>
      <p>Loading Crypto ... </p>
    </div>):(<div>
      <h3 className="text-4xl text-slate-300 font-bold mt-2 text-center">Market Overview</h3>
      <p className="text-lg text-slate-300 text-center mb-3">Top crypto tokens trending today</p>
      {cryptoData.map((crypto) => (
        <CryptoCard key={crypto.id} crypto={crypto} />
      ))}
      </div>)}
    </div>    
  );
}