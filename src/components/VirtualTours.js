import React from 'react';
import './VirtualTours.css';

const VirtualTours = () => {
  return (
    <div className="virtual-tours">
      <h1>Virtual Property Tours</h1>
      <div className="tours-container">
        <div className="tour-card">
          <div className="tour-image">
            <img src="/images/property1.jpg" alt="Property 1" />
            <button className="view-tour-btn">View 360° Tour</button>
          </div>
          <div className="tour-info">
            <h3>Luxury Villa</h3>
            <p>Experience this stunning 4BHK villa with modern amenities</p>
          </div>
        </div>
        <div className="tour-card">
          <div className="tour-image">
            <img src="/images/property2.jpg" alt="Property 2" />
            <button className="view-tour-btn">View 360° Tour</button>
          </div>
          <div className="tour-info">
            <h3>Modern Apartment</h3>
            <p>Explore this contemporary 3BHK apartment in prime location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTours;
