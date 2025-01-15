import React from 'react';
import './Features.css';

const MarketInsights = () => {
  const marketTrends = [
    {
      area: "Electronic City",
      priceChange: "+8.5%",
      avgPrice: "₹5,500/sqft",
      demand: "High",
      trend: "upward"
    },
    {
      area: "Whitefield",
      priceChange: "+12%",
      avgPrice: "₹6,800/sqft",
      demand: "Very High",
      trend: "upward"
    },
    {
      area: "Sarjapur Road",
      priceChange: "+10%",
      avgPrice: "₹6,200/sqft",
      demand: "High",
      trend: "upward"
    }
  ];

  return (
    <div className="feature-page">
      <div className="feature-hero market-insights-hero">
        <h1>Market Insights</h1>
        <p>Stay informed with the latest real estate market trends and analysis</p>
      </div>

      <div className="feature-content">
        {/* Market Overview Section */}
        <section className="market-overview">
          <h2>Market Overview</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <i className="fas fa-chart-line"></i>
              <h3>Price Trend</h3>
              <p className="stat">+15%</p>
              <p>Annual Growth</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-home"></i>
              <h3>Property Listings</h3>
              <p className="stat">2,500+</p>
              <p>Active Properties</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-handshake"></i>
              <h3>Transactions</h3>
              <p className="stat">500+</p>
              <p>Monthly Deals</p>
            </div>
          </div>
        </section>

        {/* Area-wise Trends */}
        <section className="area-trends">
          <h2>Area-wise Market Trends</h2>
          <div className="trends-table">
            <table>
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Price Change</th>
                  <th>Avg. Price</th>
                  <th>Demand</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                {marketTrends.map((trend, index) => (
                  <tr key={index}>
                    <td>{trend.area}</td>
                    <td className="price-change positive">{trend.priceChange}</td>
                    <td>{trend.avgPrice}</td>
                    <td>{trend.demand}</td>
                    <td>
                      <i className={`fas fa-arrow-${trend.trend}`}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="market-analysis">
          <h2>Market Analysis</h2>
          <div className="analysis-grid">
            <div className="analysis-card">
              <h3>Residential Market</h3>
              <div className="chart-placeholder">
                {/* Add actual chart component here */}
                <div className="placeholder-text">Residential Price Trends</div>
              </div>
              <ul className="analysis-points">
                <li>15% increase in residential property prices</li>
                <li>Growing demand in suburban areas</li>
                <li>Rise in luxury apartment sales</li>
              </ul>
            </div>
            <div className="analysis-card">
              <h3>Commercial Market</h3>
              <div className="chart-placeholder">
                {/* Add actual chart component here */}
                <div className="placeholder-text">Commercial Price Trends</div>
              </div>
              <ul className="analysis-points">
                <li>20% growth in office space demand</li>
                <li>Retail sector showing strong recovery</li>
                <li>Increased interest in tech parks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Investment Hotspots */}
        <section className="investment-hotspots">
          <h2>Investment Hotspots</h2>
          <div className="hotspots-grid">
            <div className="hotspot-card">
              <div className="hotspot-image">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format" alt="Electronic City" />
              </div>
              <div className="hotspot-content">
                <h3>Electronic City</h3>
                <p>Tech hub with growing residential demand</p>
                <ul>
                  <li>Major IT companies presence</li>
                  <li>Excellent connectivity</li>
                  <li>Modern infrastructure</li>
                </ul>
              </div>
            </div>
            <div className="hotspot-card">
              <div className="hotspot-image">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format" alt="Whitefield" />
              </div>
              <div className="hotspot-content">
                <h3>Whitefield</h3>
                <p>Premium residential and commercial hub</p>
                <ul>
                  <li>High-end residential projects</li>
                  <li>Shopping districts</li>
                  <li>Educational institutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Market Reports */}
        <section className="market-reports">
          <h2>Latest Market Reports</h2>
          <div className="reports-grid">
            <div className="report-card">
              <i className="fas fa-file-pdf"></i>
              <h3>Q4 2024 Market Analysis</h3>
              <p>Comprehensive analysis of the real estate market</p>
              <button className="download-btn">Download Report</button>
            </div>
            <div className="report-card">
              <i className="fas fa-file-pdf"></i>
              <h3>Investment Outlook 2025</h3>
              <p>Future predictions and investment opportunities</p>
              <button className="download-btn">Download Report</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MarketInsights;
