import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'services', label: 'services' },
    { id: 'portfolio', label: 'portfolio' },
    { id: 'contact', label: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-800/60 py-4 px-8 md:px-16 shadow-lg shadow-black/50'
          : 'bg-transparent py-6 px-8 md:px-16'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="text-2xl font-black tracking-widest text-white group flex items-center gap-1.5"
        >
          <span className="font-mono text-xs text-[#e05236] border border-[#e05236]/40 px-1.5 py-0.5 rounded tracking-normal">
            01
          </span>
          <span className="group-hover:text-[#e05236] transition-colors duration-200">
            VELO
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-colors duration-200 capitalize ${
                    isActive
                      ? 'text-[#e05236] font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e05236] rounded-full animate-pulse" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-300 hover:text-white p-2 rounded-lg focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-neutral-800 px-8 py-6 shadow-2xl transition-all">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-lg font-medium capitalize w-full text-left py-2 border-b border-neutral-900/80 flex justify-between items-center ${
                      isActive ? 'text-[#e05236] font-bold' : 'text-neutral-300'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#e05236]" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
