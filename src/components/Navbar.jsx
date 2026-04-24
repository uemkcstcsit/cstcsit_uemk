import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isMagazineOpen, setIsMagazineOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const eventYears = [2022, 2023, 2024, 2025];
  const magazineEditions = [1, 2, 3];

  const isActive = (path) => location.pathname === path;
  const isEventsActive = location.pathname.includes('/events');
  const isMagazineActive = location.pathname.includes('/magazine');

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
          <div className="hidden lg:flex items-center gap-4">

            {/* Home */}
            <Link
              to="/"
              className={`relative px-2 py-2 text-sm font-medium transition-all duration-300 ${
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

            {/* About */}
            <Link
              to="/about"
              className={`relative px-2 py-2 text-sm font-medium transition-all duration-300 ${
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

            {/* FDP */}
            <Link
              to="/faculty"
              className={`relative px-2 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/faculty')
                  ? 'text-accent'
                  : 'text-foreground/80 hover:text-accent'
              }`}
            >
              FDP
              {isActive('/faculty') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
              )}
            </Link>

            {/* Conference Organised */}
            <Link
              to="/conference-organised"
              className={`relative px-2 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/conference-organised')
                  ? 'text-accent'
                  : 'text-foreground/80 hover:text-accent'
              }`}
            >
              Conference Organised
              {isActive('/conference-organised') && (
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
                className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-all duration-300 ${
                  isEventsActive
                    ? 'text-accent'
                    : 'text-foreground/80 hover:text-accent'
                }`}
              >
                Events
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isEventsOpen ? 'rotate-180' : ''
                  }`}
                />
                {isEventsActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
                )}
              </button>

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
                    className={`block px-4 py-2 text-sm ${
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

            {/* Magazine Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsMagazineOpen(true)}
              onMouseLeave={() => setIsMagazineOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-all duration-300 ${
                  isMagazineActive
                    ? 'text-accent'
                    : 'text-foreground/80 hover:text-accent'
                }`}
              >
                Magazine
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isMagazineOpen ? 'rotate-180' : ''
                  }`}
                />
                {isMagazineActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
                )}
              </button>

              <div
                className={`absolute top-full left-0 mt-2 glass-card py-2 min-w-[140px] transition-all duration-300 ${
                  isMagazineOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                {magazineEditions.map((edition) => (
                  <Link
                    key={edition}
                    to={`/magazine/${edition}`}
                    className={`block px-4 py-2 text-sm ${
                      isActive(`/magazine/${edition}`)
                        ? 'text-accent bg-accent/10'
                        : 'text-foreground/80 hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    Edition {edition}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <Link
              to="/newsletter"
              className={`relative px-2 py-2 text-sm font-medium transition-all duration-300 ${
                isActive('/newsletter')
                  ? 'text-accent'
                  : 'text-foreground/80 hover:text-accent'
              }`}
            >
              Newsletter
              {isActive('/newsletter') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full" />
              )}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`relative px-2 py-2 text-sm font-medium transition-all duration-300 ${
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

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden glass-card mx-4 mb-4 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'max-h-[600px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-4 px-4 gap-2">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 rounded hover:bg-accent/10">Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 rounded hover:bg-accent/10">About</Link>
          <Link to="/faculty" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 rounded hover:bg-accent/10">FDP</Link>
          <Link to="/conference-organised" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 rounded hover:bg-accent/10">Conference Organised</Link>

          {/* Mobile Events Dropdown */}
          <div className="py-2 px-2">
            <button
              className="flex items-center w-full justify-between font-medium py-2 px-2 rounded hover:bg-accent/10 focus:outline-none"
              onClick={() => setIsEventsOpen((prev) => !prev)}
            >
              <span>Events</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isEventsOpen ? 'rotate-180' : ''}`} />
            </button>
            {isEventsOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-1">
                {eventYears.map((year) => (
                  <Link
                    key={year}
                    to={`/events/${year}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1.5 text-sm rounded hover:bg-accent/10"
                  >
                    {year}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Magazine Dropdown */}
          <div className="py-2 px-2">
            <button
              className="flex items-center w-full justify-between font-medium py-2 px-2 rounded hover:bg-accent/10 focus:outline-none"
              onClick={() => setIsMagazineOpen((prev) => !prev)}
            >
              <span>Magazine</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMagazineOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMagazineOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-1">
                {magazineEditions.map((edition) => (
                  <Link
                    key={edition}
                    to={`/magazine/${edition}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1.5 text-sm rounded hover:bg-accent/10"
                  >
                    Edition {edition}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/newsletter" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 rounded hover:bg-accent/10">Newsletter</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-2 rounded hover:bg-accent/10">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;