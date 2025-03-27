import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/imeetlogo.jpg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll to section if on home page
  const handleScroll = (section) => {
    if (location.pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-[#1a002c]/90 backdrop-blur-md fixed w-full top-0 z-50 border-b border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={logo} alt="iMeet Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" onClick={() => handleScroll('home')}>Home</NavLink>
            <NavLink to="/#about" onClick={() => handleScroll('about')}>About</NavLink>
            <NavLink to="/#events" onClick={() => handleScroll('events')}>Events</NavLink>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a002c] border-t border-purple-900/50">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <MobileNavLink to="/" onClick={() => handleScroll('home')}>Home</MobileNavLink>
            <MobileNavLink to="/#about" onClick={() => handleScroll('about')}>About</MobileNavLink>
            <MobileNavLink to="/#events" onClick={() => handleScroll('events')}>Events</MobileNavLink>
            
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink component
const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white hover:bg-purple-900/50 block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </Link>
);

export default Navbar;