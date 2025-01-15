import React from 'react';
import './Projects.css';

const ResidentialProjects = () => {
  const projects = [
    {
      id: 1,
      name: "RK Green Valley",
      location: "Electronic City, Bangalore",
      type: "Luxury Apartments",
      price: "Starting from ₹85L",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format",
      features: ["2 & 3 BHK", "Swimming Pool", "Club House", "24/7 Security"]
    },
    {
      id: 2,
      name: "RK Lake View",
      location: "Whitefield, Bangalore",
      type: "Premium Villas",
      price: "Starting from ₹1.5Cr",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format",
      features: ["3 & 4 BHK", "Private Garden", "Smart Home", "Gym"]
    },
    {
      id: 3,
      name: "RK Horizon",
      location: "Sarjapur Road, Bangalore",
      type: "High-Rise Apartments",
      price: "Starting from ₹95L",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format",
      features: ["2, 3 & 4 BHK", "Sky Lounge", "Tennis Court", "Kids Play Area"]
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <h1>Residential Projects</h1>
        <p>Discover your dream home in our premium residential projects</p>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.name} />
              <div className="project-price">{project.price}</div>
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p className="project-location">
                <i className="fas fa-map-marker-alt"></i> {project.location}
              </p>
              <p className="project-type">{project.type}</p>
              <div className="project-features">
                {project.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
              <button className="view-details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>

      <div className="project-filters">
        <h2>Find Your Perfect Home</h2>
        <div className="filter-options">
          <select className="filter-select">
            <option value="">Select Location</option>
            <option value="electronic-city">Electronic City</option>
            <option value="whitefield">Whitefield</option>
            <option value="sarjapur">Sarjapur Road</option>
          </select>
          <select className="filter-select">
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="plot">Plot</option>
          </select>
          <select className="filter-select">
            <option value="">Budget Range</option>
            <option value="50-80">50L - 80L</option>
            <option value="80-100">80L - 1Cr</option>
            <option value="100+">1Cr+</option>
          </select>
          <button className="search-btn">Search Projects</button>
        </div>
      </div>
    </div>
  );
};

export default ResidentialProjects;
