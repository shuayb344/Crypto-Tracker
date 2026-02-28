import { Link } from 'react-router-dom';
import { HomePageCards } from '../components/HomePageCards';
export function HomePage() {
  return (
    <div className="bg-[url('/bg2.jpg')] bg-cover bg-no-repeat background text-white min-h-screen overflow-auto">
      <div className='flex flex-col min-h-screen items-center relative inset-0 bg-linear-to-b from-black to-black/50'>
        <header className="flex items-center flex-wrap justify-between sm:w-[80%] p-4 ">
        <span className='text-3xl font-bold text-yellow-500 font-["Dancing_Script"] '>CryptoTracker</span>
        <div className='text-xl flex gap-3 p-4 '>
          <Link  to="/market"><span className='text-slate-200 hover:text-yellow-300'>Market</span></Link>
          <Link to="/news"><span className='text-slate-200 hover:text-yellow-300'>News</span></Link>
        </div>
        
      </header>
      <div className='flex flex-col items-center justify-center   gap-4 '>
        <h1 className='sm:text-5xl text-2xl font-bold text-center mt-20'>Track Your Favorite Cryptocurrencies in Real-Time</h1>
        <p className='sm:text-xl  text-center mt-4'>Stay updated with the latest market trends and news in the crypto world.</p>
        <Link to="/market"><button className='bg-yellow-500 text-black sm:px-6 sm:py-3 px-3 py-3 rounded-md font-bold mt-6 cursor-pointer hover:scale-105 '>Explore Now</button></Link>
        
       
      </div>
       <div className='mt-20'>
          <h3 className='text-center font-bold text-lg sm:text-3xl mb-4'>Trending Cryptocurrencies</h3>
          <div className='flex  flex-col sm:flex-row justify-center'>
            <HomePageCards />
          </div>
          
      </div>

      </div>
    </div>
  );
}