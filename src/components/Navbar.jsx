import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const eventYears = [2022, 2023, 2024, 2025];

  const isActive = (path) => location.pathname === path;
  const isEventsActive = location.pathname.includes('/events');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="CST & CSIT Logo"
              className="h-14 sm:h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            
            <Link
              to="/"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'text-accent' 
                  : 'text-foreground/80 hover:text-accent'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
              )}
            </Link>

            <Link
              to="/about"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-accent' 
                  : 'text-foreground/80 hover:text-accent'
              }`}
            >
              About the Department
              {isActive('/about') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
              )}
            </Link>

            {/* Faculty Link */}
            <Link
              to="/faculty"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/faculty') 
                  ? 'text-accent' 
                  : 'text-foreground/80 hover:text-accent'
              }`}
            >
              Faculty
              {isActive('/faculty') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
              )}
            </Link>

            {/* Events Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsEventsOpen(true)}
              onMouseLeave={() => setIsEventsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isEventsActive 
                    ? 'text-accent' 
                    : 'text-foreground/80 hover:text-accent'
                }`}
              >
                Events
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isEventsOpen ? 'rotate-180' : ''}`} />
                {isEventsActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
                )}
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 glass-card py-2 min-w-[120px] transition-all duration-300 ${
                  isEventsOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {eventYears.map((year) => (
                  <Link
                    key={year}
                    to={`/events/${year}`}
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      isActive(`/events/${year}`)
                        ? 'text-accent bg-accent/10'
                        : 'text-foreground/80 hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    {year}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-accent' 
                  : 'text-foreground/80 hover:text-accent'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
              )}
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden glass-card mx-4 mb-4 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-4 px-4 space-y-2">

          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-4 rounded-lg transition-colors ${
              isActive('/') ? 'text-accent bg-accent/10' : 'text-foreground/80 hover:text-accent'
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-4 rounded-lg transition-colors ${
              isActive('/about') ? 'text-accent bg-accent/10' : 'text-foreground/80 hover:text-accent'
            }`}
          >
            About the Department
          </Link>

          <Link
            to="/faculty"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-4 rounded-lg transition-colors ${
              isActive('/faculty') ? 'text-accent bg-accent/10' : 'text-foreground/80 hover:text-accent'
            }`}
          >
            Faculty
          </Link>

          {/* Mobile Events */}
          <div className="py-2 px-4">
            <span className="text-foreground/80 font-medium">Events</span>
            <div className="mt-2 ml-4 space-y-1">
              {eventYears.map((year) => (
                <Link
                  key={year}
                  to={`/events/${year}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-1.5 text-sm transition-colors ${
                    isActive(`/events/${year}`)
                      ? 'text-accent'
                      : 'text-foreground/60 hover:text-accent'
                  }`}
                >
                  {year}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-4 rounded-lg transition-colors ${
              isActive('/contact') ? 'text-accent bg-accent/10' : 'text-foreground/80 hover:text-accent'
            }`}
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
