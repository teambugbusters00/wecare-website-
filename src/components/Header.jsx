import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="navbar" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 group">
            <h1 className="text-2xl font-black text-slate-800 tracking-tighter transition-transform group-hover:scale-105">
              WeCare<span className="text-teal-600">Lives</span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">Official Health Partner</span>
              </div>
            </h1>
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium text-slate-600 hover:text-teal-600 transition-colors">Home</a>
            <a href="#about" className="font-medium text-slate-600 hover:text-teal-600 transition-colors">About</a>
            <a href="#services" className="font-medium text-slate-600 hover:text-teal-600 transition-colors">Services</a>
            <a href="#solutions" className="font-medium text-slate-600 hover:text-teal-600 transition-colors">Solutions</a>
            <a href="#faq" className="font-medium text-slate-600 hover:text-teal-600 transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center">
            <a href="#abha" className="hidden sm:inline-block bg-teal-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/20">Link ABHA ID</a>
            {/* Mobile Menu Button */}
            <div className="md:hidden ml-4">
              <button id="mobile-menu-button" onClick={toggleMobileMenu} className="text-slate-600 hover:text-teal-600">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div id="mobile-menu" className={`hidden md:hidden bg-white shadow-lg ${isMobileMenuOpen ? 'block' : ''}`}>
        <nav className="flex flex-col items-center space-y-4 py-4">
          <a href="#home" onClick={closeMobileMenu} className="font-medium text-slate-600 hover:text-teal-600 transition-colors">Home</a>
          <a href="#about" onClick={closeMobileMenu} className="font-medium text-slate-600 hover:text-teal-600 transition-colors">About</a>
          <a href="#services" onClick={closeMobileMenu} className="font-medium text-slate-600 hover:text-teal-600 transition-colors">Services</a>
          <a href="#solutions" onClick={closeMobileMenu} className="font-medium text-slate-600 hover:text-teal-600 transition-colors">Solutions</a>
          <a href="#faq" onClick={closeMobileMenu} className="font-medium text-slate-600 hover:text-teal-600 transition-colors">FAQ</a>
          <a href="#abha" onClick={closeMobileMenu} className="bg-teal-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-700 transition-all duration-300">Link ABHA ID</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;