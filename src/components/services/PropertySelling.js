import React from 'react';
import './Services.css';

const PropertySelling = () => {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Property Selling Services</h1>
        <p>Get the best value for your property with our expert selling services</p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <div className="feature-card">
            <i className="fas fa-chart-line"></i>
            <h3>Market Analysis</h3>
            <p>Detailed analysis of current market trends and property valuation</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-camera"></i>
            <h3>Professional Listing</h3>
            <p>High-quality photos and compelling property descriptions</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-bullhorn"></i>
            <h3>Marketing Strategy</h3>
            <p>Multi-channel marketing to reach potential buyers</p>
          </div>
        </div>

        <div className="service-steps">
          <h2>Our Selling Process</h2>
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Property Valuation</h3>
              <p>Expert assessment of your property's market value</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Property Preparation</h3>
              <p>Tips and assistance in preparing your property for sale</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Marketing Campaign</h3>
              <p>Launch of comprehensive marketing strategy</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Closing Deal</h3>
              <p>Negotiation and paperwork assistance until closing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySelling;
