import React, { useState } from 'react';
import './Features.css';

const CompareProperties = () => {
  const [selectedProperties, setSelectedProperties] = useState([]);

  const properties = [
    {
      id: 1,
      name: "Injambakkam ECR",
      type: "Luxury Apartments",
      price: "₹1.2 Cr",
      size: "24k Sq.ft",
      bedrooms: 3,
      bathrooms: 3,
      amenities: ["Swimming Pool", "Gym", "Garden", "Security"],
      location: "ECR, Sai Baba Colony",
      image: "https://source.unsplash.com/800x600/?luxury,apartment"
    },
    {
      id: 2,
      name: "Thirumullaivoyel",
      type: "Premium Flats",
      price: "₹85L",
      size: "1200 Sq.ft",
      bedrooms: 2,
      bathrooms: 2,
      amenities: ["Park", "Security", "Community Hall"],
      location: "Thirumullaivoyel",
      image: "https://source.unsplash.com/800x600/?modern,flat"
    },
    {
      id: 3,
      name: "Kolambakkam Sipcot",
      type: "Luxury Villas",
      price: "₹1.5 Cr",
      size: "2 acres",
      bedrooms: 4,
      bathrooms: 4,
      amenities: ["Private Garden", "Pool", "Gym", "Security"],
      location: "Kolambakkam",
      image: "https://source.unsplash.com/800x600/?luxury,villa"
    }
  ];

  const handlePropertySelect = (property) => {
    if (selectedProperties.find(p => p.id === property.id)) {
      setSelectedProperties(selectedProperties.filter(p => p.id !== property.id));
    } else if (selectedProperties.length < 3) {
      setSelectedProperties([...selectedProperties, property]);
    }
  };

  return (
    <div className="compare-properties">
      <div className="feature-header">
        <h1>Compare Properties</h1>
        <p>Compare up to 3 properties side by side</p>
      </div>

      <div className="property-selector">
        <h3>Select Properties to Compare</h3>
        <div className="property-grid">
          {properties.map(property => (
            <div
              key={property.id}
              className={`property-card ${selectedProperties.find(p => p.id === property.id) ? 'selected' : ''}`}
              onClick={() => handlePropertySelect(property)}
            >
              <div className="property-image">
                <img src={property.image} alt={property.name} />
              </div>
              <div className="property-info">
                <h4>{property.name}</h4>
                <p>{property.type}</p>
                <p>{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProperties.length > 0 && (
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Features</th>
                {selectedProperties.map(property => (
                  <th key={property.id}>{property.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Type</td>
                {selectedProperties.map(property => (
                  <td key={property.id}>{property.type}</td>
                ))}
              </tr>
              <tr>
                <td>Price</td>
                {selectedProperties.map(property => (
                  <td key={property.id}>{property.price}</td>
                ))}
              </tr>
              <tr>
                <td>Size</td>
                {selectedProperties.map(property => (
                  <td key={property.id}>{property.size}</td>
                ))}
              </tr>
              <tr>
                <td>Bedrooms</td>
                {selectedProperties.map(property => (
                  <td key={property.id}>{property.bedrooms}</td>
                ))}
              </tr>
              <tr>
                <td>Bathrooms</td>
                {selectedProperties.map(property => (
                  <td key={property.id}>{property.bathrooms}</td>
                ))}
              </tr>
              <tr>
                <td>Location</td>
                {selectedProperties.map(property => (
                  <td key={property.id}>{property.location}</td>
                ))}
              </tr>
              <tr>
                <td>Amenities</td>
                {selectedProperties.map(property => (
                  <td key={property.id}>
                    <ul className="amenities-list">
                      {property.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="comparison-actions">
        <button className="action-btn">
          <i className="fas fa-download"></i> Download Comparison
        </button>
        <button className="action-btn">
          <i className="fas fa-share"></i> Share Comparison
        </button>
        <button className="action-btn">
          <i className="fas fa-envelope"></i> Contact Agent
        </button>
      </div>
    </div>
  );
};

export default CompareProperties;
