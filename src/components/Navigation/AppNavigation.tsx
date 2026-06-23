import React, { useState, useEffect } from 'react';
import LogoImg from '/PersonalLogo.png';

const AppNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-orange-200 shadow-[0_8px_32px_-12px_rgba(255,107,53,0.15)]' 
          : 'bg-white/90 backdrop-blur-sm border-b border-orange-100'
      }`}
    >
      <div className="max-w-7xl mx-auto pr-6 sm:pr-8 lg:pr-12">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer ml-4 sm:ml-6">
            <div className="relative w-30 h-30 transition-transform duration-300 group-hover:scale-105">
              <img 
                src={LogoImg} 
                alt="Souranova Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            {/* <span className={`text-xl lg:text-2xl font-semibold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              Souranova
            </span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50' 
                    : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className={`ml-6 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-400 hover:to-orange-500 shadow-md hover:shadow-lg' 
                : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-400 hover:to-orange-500 shadow-md hover:shadow-lg'
            }`}>
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-all duration-300 focus:outline-none ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-orange-50' 
                  : 'text-gray-700 hover:bg-orange-50'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        } ${
          isScrolled 
            ? 'bg-white/95 border-b border-orange-200 shadow-xl' 
            : 'bg-white/95 border-b border-orange-200 shadow-xl'
        }`}
      >
        <div className="px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 pb-2">
            <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 ${
              isScrolled 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-400 hover:to-orange-500 shadow-md' 
                : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-400 hover:to-orange-500 shadow-md'
            }`}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavigation;