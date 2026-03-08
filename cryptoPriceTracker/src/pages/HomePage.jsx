import { Link } from 'react-router-dom';
import { HomePageCards } from '../components/HomePageCards';
export function HomePage() {
  return (
    <div className="bg-[url('/bg2.jpg')] bg-cover bg-no-repeat background text-white min-h-screen overflow-auto">
      <div className='flex flex-col min-h-screen items-center relative inset-0 bg-linear-to-b from-black to-black/80'>
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