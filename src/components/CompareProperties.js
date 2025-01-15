import React, { useState } from 'react';
import './CompareProperties.css';

const CompareProperties = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: 'Property 1',
      price: '',
      size: '',
      bedrooms: '',
      bathrooms: '',
      location: '',
    },
    {
      id: 2,
      name: 'Property 2',
      price: '',
      size: '',
      bedrooms: '',
      bathrooms: '',
      location: '',
    },
  ]);

  const handleInputChange = (propertyId, field, value) => {
    setProperties(properties.map(property => 
      property.id === propertyId 
        ? { ...property, [field]: value }
        : property
    ));
  };

  return (
    <div className="compare-properties">
      <h1>Compare Properties</h1>
      <div className="comparison-container">
        {properties.map(property => (
          <div key={property.id} className="property-column">
            <h2>{property.name}</h2>
            <div className="property-inputs">
              <div className="input-group">
                <label>Price (₹)</label>
                <input
                  type="number"
                  value={property.price}
                  onChange={(e) => handleInputChange(property.id, 'price', e.target.value)}
                  placeholder="Enter price"
                />
              </div>
              
              <div className="input-group">
                <label>Size (sq ft)</label>
                <input
                  type="number"
                  value={property.size}
                  onChange={(e) => handleInputChange(property.id, 'size', e.target.value)}
                  placeholder="Enter size"
                />
              </div>
              
              <div className="input-group">
                <label>Bedrooms</label>
                <input
                  type="number"
                  value={property.bedrooms}
                  onChange={(e) => handleInputChange(property.id, 'bedrooms', e.target.value)}
                  placeholder="Enter bedrooms"
                />
              </div>
              
              <div className="input-group">
                <label>Bathrooms</label>
                <input
                  type="number"
                  value={property.bathrooms}
                  onChange={(e) => handleInputChange(property.id, 'bathrooms', e.target.value)}
                  placeholder="Enter bathrooms"
                />
              </div>
              
              <div className="input-group">
                <label>Location</label>
                <input
                  type="text"
                  value={property.location}
                  onChange={(e) => handleInputChange(property.id, 'location', e.target.value)}
                  placeholder="Enter location"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareProperties;
