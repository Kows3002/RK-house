import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          RK Housing
        </Link>

        <div className="menu-features">
          {/* Services Dropdown */}
          <div className="feature-dropdown">
            <span className="feature-link">Services</span>
            <div className="feature-dropdown-content">
              <Link to="/services/buying" className="dropdown-item">
                <i className="fas fa-home"></i>
                Property Buying
              </Link>
              <Link to="/services/selling" className="dropdown-item">
                <i className="fas fa-handshake"></i>
                Property Selling
              </Link>
              <Link to="/services/rental" className="dropdown-item">
                <i className="fas fa-key"></i>
                Rental Services
              </Link>
              <Link to="/services/consultation" className="dropdown-item">
                <i className="fas fa-comments"></i>
                Property Consultation
              </Link>
              <Link to="/services/investment" className="dropdown-item">
                <i className="fas fa-chart-line"></i>
                Investment Advisory
              </Link>
            </div>
          </div>

          {/* Features Dropdown */}
          <div className="feature-dropdown">
            <span className="feature-link">Features</span>
            <div className="feature-dropdown-content">
              <Link to="/features/virtual-tour" className="dropdown-item">
                <i className="fas fa-vr-cardboard"></i>
                Virtual Tours
              </Link>
              <Link to="/features/calculator" className="dropdown-item">
                <i className="fas fa-calculator"></i>
                EMI Calculator
              </Link>
              <Link to="/features/compare" className="dropdown-item">
                <i className="fas fa-balance-scale"></i>
                Compare Properties
              </Link>
              <Link to="/features/market-insights" className="dropdown-item">
                <i className="fas fa-chart-bar"></i>
                Market Insights
              </Link>
              <Link to="/features/legal-support" className="dropdown-item">
                <i className="fas fa-gavel"></i>
                Legal Support
              </Link>
            </div>
          </div>

          {/* Projects Dropdown */}
          <div className="feature-dropdown">
            <span className="feature-link">Projects</span>
            <div className="feature-dropdown-content">
              <Link to="/projects/residential" className="dropdown-item">
                <i className="fas fa-building"></i>
                Residential Projects
              </Link>
              <Link to="/projects/commercial" className="dropdown-item">
                <i className="fas fa-store"></i>
                Commercial Projects
              </Link>
              <Link to="/projects/upcoming-projects" className="dropdown-item">
                <i className="fas fa-clock"></i>
                Upcoming Projects
              </Link>
              <Link to="/projects/completed-projects" className="dropdown-item">
                <i className="fas fa-check-circle"></i>
                Completed Projects
              </Link>
            </div>
          </div>

          <Link to="/contact" className="feature-link">Contact</Link>
        </div>

        {/* Search and Menu Icons */}
        <div className="header-actions">
          <button className="search-icon">
            <i className="fas fa-search"></i>
          </button>
          <button 
            className="menu-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
