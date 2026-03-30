import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 1. Logo eka assets folder eke thiyena path eka check karanna
import logo from '../assets/logos/logo.jpg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-900/30">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 group">
          <div className="overflow-hidden rounded-full border border-yellow-600/20 group-hover:border-yellow-500 transition-all">
            <img 
              src={logo} 
              alt="Cinnaroma Logo" 
              className="h-16 w-16 object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent uppercase tracking-[0.2em]">
              Cinnaroma
            </span>
            <span className="text-[10px] text-yellow-600 tracking-[0.4em] uppercase font-light">
              Premium Ceylon Cinnamon
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 text-[11px] font-bold tracking-[0.3em] uppercase">
          <Link to="/" className="text-yellow-500 hover:text-yellow-400 transition-all border-b border-yellow-500 pb-1">
            Home
          </Link>
          <Link to="/shop" className="text-stone-400 hover:text-yellow-500 transition-all">
            Collection
          </Link>
          <Link to="/blog" className="text-stone-400 hover:text-yellow-500 transition-all">
            Articles
          </Link>
          
          {/* Cart Icon */}
          <button className="relative text-stone-400 hover:text-yellow-500 transition-all">
            <span className="absolute -top-3 -right-3 bg-yellow-600 text-black text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-lg shadow-yellow-600/20">
              0
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-yellow-900/20 px-6 py-8 flex flex-col gap-6 text-center animate-fadeIn">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-yellow-500 tracking-[0.2em] font-bold uppercase">Home</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)} className="text-stone-400 tracking-[0.2em] font-bold uppercase">Collection</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="text-stone-400 tracking-[0.2em] font-bold uppercase">Articles</Link>
          <button className="bg-yellow-600 text-black font-black py-3 rounded-full uppercase tracking-widest text-xs mt-4">
            Cart (0)
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;