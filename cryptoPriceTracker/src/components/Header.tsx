import { Link } from 'react-router-dom';
import React from 'react';

export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="flex flex-col sm:flex-row mx-auto items-center justify-between p-4 sm:w-[80%]">
      <Link to="/">
        <span className='text-3xl font-bold text-yellow-500 font-["Dancing_Script"] '>
          CryptoTracker
        </span>
      </Link>
      <nav className='text-xl flex gap-3 p-4 '>
        <Link to="/market">
          <span className='text-slate-200 hover:text-yellow-300'>Market</span>
        </Link>
        <Link to="/news">
          <span className='text-slate-200 hover:text-yellow-300'>News</span>
        </Link>
      </nav>
      {children}
    </header>
  );
}
