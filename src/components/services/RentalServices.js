import React from 'react';
import './Services.css';

const RentalServices = () => {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Rental Services</h1>
        <p>Find your perfect rental property or trusted tenants</p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <div className="feature-card">
            <i className="fas fa-home"></i>
            <h3>Property Listing</h3>
            <p>Wide range of rental properties for all budgets</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-user-check"></i>
            <h3>Tenant Screening</h3>
            <p>Thorough background checks for quality tenants</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-file-contract"></i>
            <h3>Rental Agreements</h3>
            <p>Legal assistance with rental documentation</p>
          </div>
        </div>

        <div className="service-steps">
          <h2>Rental Process</h2>
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Property Search/Listing</h3>
              <p>Find the right property or list yours for rent</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Property Inspection</h3>
              <p>Schedule visits and inspect properties</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Documentation</h3>
              <p>Complete rental agreement and verification</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Move In/Out</h3>
              <p>Smooth transition with property inspection</p>
            </div>
          </div>
        </div>

        <div className="rental-types">
          <h2>Types of Rental Properties</h2>
          <div className="rental-grid">
            <div className="rental-type">
              <i className="fas fa-building"></i>
              <h3>Apartments</h3>
              <p>1BHK to 4BHK options available</p>
            </div>
            <div className="rental-type">
              <i className="fas fa-home"></i>
              <h3>Independent Houses</h3>
              <p>Spacious homes with privacy</p>
            </div>
            <div className="rental-type">
              <i className="fas fa-store"></i>
              <h3>Commercial Spaces</h3>
              <p>Offices and retail spaces</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalServices;
