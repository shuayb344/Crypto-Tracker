import { useMemo, useState } from "react";
import { useCryptoMarket } from "../hooks/useCryptoQueries";
import { CryptoCard } from "../components/CryptoCard"; 
import { Pagination } from "../components/Pagination";
import { Link } from "react-router-dom";
import usePagination from "../hooks/usePagination";
export function MarketPage() {
  const {
    data: cryptoData = [],
    isLoading,
    isError,
  } = useCryptoMarket();

  const [sortBy,setSortBy] = useState("market_cap_rank");
  const [searchTerm,setSearchTerm] = useState("");
  const itemsPerPage = 20; 

  const sortedAndFilteredData = useMemo(() => {
    const filtered = (cryptoData || []).filter((crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "market_cap_rank":
          return a.market_cap_rank - b.market_cap_rank;
        case "current_price":
          return b.current_price - a.current_price;
        case "price_change_percentage_24h":
          return (
            b.price_change_percentage_24h - a.price_change_percentage_24h
          );
        case "market_cap":
          return b.market_cap - a.market_cap;
        case "total_volume":
          return b.total_volume - a.total_volume;
        default:
          return a.market_cap_rank - b.market_cap_rank;
      }
    });
    return filtered;
  }, [cryptoData, searchTerm, sortBy]);

  const { currentPage, setCurrentPage, totalPages, currentPageItems } =
    usePagination(sortedAndFilteredData, itemsPerPage);

  return (
    <div className="p-4 bg-black min-h-screen text-white overflow-auto">
      <div className="w-[80%] mx-auto">
        <header className="flex flex-col sm:flex-row mx-auto items-center justify-between  p-4">
         <Link to="/"><span className='text-3xl font-bold text-yellow-500 font-["Dancing_Script"] '>CryptoTracker</span></Link>
        <div className="flex gap-2 items-center justify-center sm:w-1/2 border border-stone-700 bg-neutral-950 rounded-xl mt-3 align-middle">
          <input className="sm:p-3 p-2 rounded-xl   bg-neutral-950 w-[90%] focus:outline-0 text-white"  type="text" placeholder="Search Crypto..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}/>
          <img src="../search.png" alt="Search Icon" className="w-5 h-5 mr-2" />
         
        </div>
         
      </header>
        <h3 className="text-4xl text-slate-300 font-bold mt-2 text-center">Market Overview</h3>
        <p className="text-lg text-slate-300 text-center mb-3">Top crypto tokens trending today</p>
        <div className="ml-10 mb-3 bg-neutral-950 w-50 p-2 rounded-lg flex items-center gap-2">
          <label htmlFor="">Sort By :</label>
          <select className="bg-neutral-950 text-slate-200"   value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}>
            <option value="market_cap_rank">Rank</option>
            <option value="current_price">Price</option>
            <option value="price_change_percentage_24h">24h Change</option>
            <option value="market_cap">Market Cap</option>
            <option value="total_volume">Volume</option>
          </select>
        </div>
      </div>
      
      {isLoading ? (
        <div className="mt-10 flex flex-col gap-3 justify-center items-center h-32">
          <div className="w-12 h-12  border-4 border-gray-500 border-t-transparent rounded-full animate-spin "></div>
          <p>Loading Crypto ... </p>
        </div>
      ) : isError ? (
        <p className="mt-10 text-center text-red-400">
          Failed to load market data. Please try again later.
        </p>
      ) : (
        <div>
      
      {
        currentPageItems.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))
      }
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      </div>
      )}
    </div>    
  );
}