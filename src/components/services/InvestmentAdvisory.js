import React from 'react';
import './Services.css';

const InvestmentAdvisory = () => {
  return (
    <div className="service-page">
      <div className="service-hero">
        <h1>Investment Advisory</h1>
        <p>Strategic real estate investment solutions for maximum returns</p>
      </div>

      <div className="service-content">
        <div className="service-features">
          <div className="feature-card">
            <i className="fas fa-chart-pie"></i>
            <h3>Portfolio Management</h3>
            <p>Diversified real estate investment strategies</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-analytics"></i>
            <h3>Market Research</h3>
            <p>In-depth analysis of market trends</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-percentage"></i>
            <h3>ROI Analysis</h3>
            <p>Detailed return on investment projections</p>
          </div>
        </div>

        <div className="investment-options">
          <h2>Investment Opportunities</h2>
          <div className="options-grid">
            <div className="investment-card">
              <div className="investment-header">
                <h3>Residential Properties</h3>
                <span className="returns">Expected Returns: 8-12% p.a.</span>
              </div>
              <ul>
                <li>Apartments in prime locations</li>
                <li>Premium villas</li>
                <li>Township projects</li>
              </ul>
            </div>
            <div className="investment-card">
              <div className="investment-header">
                <h3>Commercial Properties</h3>
                <span className="returns">Expected Returns: 10-15% p.a.</span>
              </div>
              <ul>
                <li>Office spaces</li>
                <li>Retail outlets</li>
                <li>Warehouses</li>
              </ul>
            </div>
            <div className="investment-card">
              <div className="investment-header">
                <h3>Land Investment</h3>
                <span className="returns">Expected Returns: 15-20% p.a.</span>
              </div>
              <ul>
                <li>Residential plots</li>
                <li>Commercial plots</li>
                <li>Agricultural land</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="investment-analysis">
          <h2>Our Analysis Process</h2>
          <div className="analysis-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Market Research</h3>
                <p>Comprehensive analysis of market trends and growth potential</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Risk Assessment</h3>
                <p>Evaluation of potential risks and mitigation strategies</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>ROI Calculation</h3>
                <p>Detailed analysis of expected returns and growth projections</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Investment Strategy</h3>
                <p>Customized investment plan based on your goals</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Start Your Investment Journey</h2>
          <p>Schedule a consultation with our investment experts</p>
          <button className="cta-button">Book Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAdvisory;
