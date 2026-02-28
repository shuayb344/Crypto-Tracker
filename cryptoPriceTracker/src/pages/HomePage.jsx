import { Link } from 'react-router-dom';
export function HomePage() {
  return (
    <div className="bg-[url('/bg2.jpg')] bg-cover   bg-no-repeat background text-white min-h-screen  overflow-auto">
      <div className='flex flex-col items-center absolute inset-0 bg-linear-to-b from-black/70 to-black/30'>
        <header className="flex items-center flex-wrap justify-between w-[80%] p-4 ">
        <span className='text-3xl font-bold text-yellow-500 font-["Dancing_Script"] '>CryptoTracker</span>
        <div className='text-xl flex gap-3 p-4 '>
          <Link  to="/market"><span className='text-yellow-500 hover:text-yellow-300'>Market</span></Link>
          <Link to="/news"><span className='text-yellow-500 hover:text-yellow-300'>News</span></Link>
        </div>
        
      </header>
      <div className='flex flex-col items-center justify-center   gap-4 '>
        <h1 className='text-5xl font-bold text-center mt-20'>Track Your Favorite Cryptocurrencies in Real-Time</h1>
        <p className='text-xl text-center mt-4'>Stay updated with the latest market trends and news in the crypto world.</p>
        <Link to="/market"><button className='bg-yellow-500 text-black px-6 py-3 rounded-md font-bold mt-6 cursor-pointer hover:scale-105 '>Explore Now</button></Link>
        
       
      </div>
       <div className='mt-20'>
          <h3 className='text-center font-bold text-3xl mb-4'>Trending Cryptocurrencies</h3>
          <div className='flex gap-3'>
            <div className='bg-white w-80'>r</div>
            <div className='bg-white w-80'>e</div>
            <div className='bg-white w-80'>w</div>
            <div className='bg-white w-80'>r</div>
          </div>
      </div>

      </div>
      
    </div>
  );
}