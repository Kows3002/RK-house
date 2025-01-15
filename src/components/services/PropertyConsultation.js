import React from 'react';
import './Services.css';

const PropertyConsultation = () => {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Property Consultation</h1>
        <p>Expert guidance for all your real estate decisions</p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <div className="feature-card">
            <i className="fas fa-comments"></i>
            <h3>Expert Advice</h3>
            <p>Personalized consultation from industry experts</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-map-marked-alt"></i>
            <h3>Location Analysis</h3>
            <p>Detailed insights on property locations</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-hand-holding-usd"></i>
            <h3>Investment Planning</h3>
            <p>Strategic advice for property investments</p>
          </div>
        </div>

        <div className="consultation-services">
          <h2>Our Consultation Services</h2>
          <div className="service-grid">
            <div className="consultation-card">
              <h3>Property Valuation</h3>
              <ul>
                <li>Market value assessment</li>
                <li>Price trend analysis</li>
                <li>ROI calculation</li>
              </ul>
            </div>
            <div className="consultation-card">
              <h3>Legal Advisory</h3>
              <ul>
                <li>Document verification</li>
                <li>Legal compliance check</li>
                <li>Title clearance</li>
              </ul>
            </div>
            <div className="consultation-card">
              <h3>Investment Strategy</h3>
              <ul>
                <li>Portfolio planning</li>
                <li>Risk assessment</li>
                <li>Growth potential analysis</li>
              </ul>
            </div>
            <div className="consultation-card">
              <h3>Property Management</h3>
              <ul>
                <li>Maintenance planning</li>
                <li>Tenant management</li>
                <li>Revenue optimization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="book-consultation">
          <h2>Book a Consultation</h2>
          <form className="consultation-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <select>
                <option value="">Select Consultation Type</option>
                <option value="valuation">Property Valuation</option>
                <option value="legal">Legal Advisory</option>
                <option value="investment">Investment Strategy</option>
                <option value="management">Property Management</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Additional Details"></textarea>
            </div>
            <button type="submit" className="submit-btn">Schedule Consultation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyConsultation;
