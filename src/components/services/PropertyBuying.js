import React from 'react';
import './Services.css';

const PropertyBuying = () => {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Property Buying Services</h1>
        <p>Your trusted partner in finding your dream home</p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <div className="feature-card">
            <i className="fas fa-search"></i>
            <h3>Property Search</h3>
            <p>Access to exclusive listings and off-market properties</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-file-contract"></i>
            <h3>Documentation</h3>
            <p>Complete assistance with legal documentation</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-money-bill-wave"></i>
            <h3>Price Negotiation</h3>
            <p>Expert negotiation to get the best deal</p>
          </div>
        </div>

        <div className="service-steps">
          <h2>How It Works</h2>
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Initial Consultation</h3>
              <p>Meet with our experts to discuss your requirements and budget</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Property Shortlisting</h3>
              <p>We'll create a curated list of properties matching your criteria</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Site Visits</h3>
              <p>Accompanied visits to shortlisted properties</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Deal Closure</h3>
              <p>Complete assistance till property registration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBuying;
