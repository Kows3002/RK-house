import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          RK Housing
        </Link>

        {/* Main Navigation */}
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Menu Icon for Additional Features */}
        <div className="menu-icon-container">
          <button className="menu-icon" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          {isMenuOpen && (
            <div className="dropdown-menu">
              {/* Services Section */}
              <div className="dropdown-section">
                <h3>Services</h3>
                <ul>
                  <li><Link to="/services/property-buying">Property Buying</Link></li>
                  <li><Link to="/services/property-selling">Property Selling</Link></li>
                  <li><Link to="/services/rental-services">Rental Services</Link></li>
                  <li><Link to="/services/property-consultation">Property Consultation</Link></li>
                  <li><Link to="/services/investment-advisory">Investment Advisory</Link></li>
                </ul>
              </div>

              {/* Features Section */}
              <div className="dropdown-section">
                <h3>Features</h3>
                <ul>
                  <li><Link to="/virtual-tours">Virtual Tours</Link></li>
                  <li><Link to="/emi-calculator">EMI Calculator</Link></li>
                  <li><Link to="/compare-properties">Compare Properties</Link></li>
                  <li><Link to="/features/market-insights">Market Insights</Link></li>
                  <li><Link to="/features/legal-support">Legal Support</Link></li>
                </ul>
              </div>

              {/* Projects Section */}
              <div className="dropdown-section">
                <h3>Projects</h3>
                <ul>
                  <li><Link to="/completed-projects">Completed Projects</Link></li>
                  <li><Link to="/upcoming-projects">Upcoming Projects</Link></li>
                  <li><Link to="/projects/residential">Residential Projects</Link></li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/projects" onClick={toggleMobileMenu}>Projects</Link>
          <Link to="/about" onClick={toggleMobileMenu}>About Us</Link>
          <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
