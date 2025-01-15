import React, { useState } from 'react';
import './Features.css';

const VirtualTours = () => {
  const [selectedProject, setSelectedProject] = useState('injambakkam');

  const projects = [
    {
      id: 'injambakkam',
      name: 'Injambakkam ECR',
      description: '4 Luxury Units | 24k Sq.ft',
      tourUrl: 'https://example.com/virtual-tour/injambakkam',
      features: ['360° View', '4K Quality', 'Interactive Hotspots'],
      thumbnail: 'https://source.unsplash.com/800x600/?luxury,apartment'
    },
    {
      id: 'thirumullaivoyel',
      name: 'Thirumullaivoyel',
      description: '120 Premium Flats | 1 Acre',
      tourUrl: 'https://example.com/virtual-tour/thirumullaivoyel',
      features: ['Drone View', 'Interior Tour', 'Amenities Tour'],
      thumbnail: 'https://source.unsplash.com/800x600/?modern,building'
    }
  ];

  const selectedTour = projects.find(p => p.id === selectedProject);

  return (
    <div className="virtual-tours">
      <div className="feature-header">
        <h1>Virtual Tours</h1>
        <p>Experience our properties from the comfort of your home</p>
      </div>

      <div className="tour-selector">
        <div className="project-list">
          {projects.map(project => (
            <div
              key={project.id}
              className={`project-item ${selectedProject === project.id ? 'active' : ''}`}
              onClick={() => setSelectedProject(project.id)}
            >
              <img src={project.thumbnail} alt={project.name} />
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="tour-viewer">
          <div className="tour-container">
            {/* Placeholder for actual 360° viewer */}
            <img src={selectedTour.thumbnail} alt={selectedTour.name} />
            <div className="tour-overlay">
              <h2>{selectedTour.name}</h2>
              <button className="start-tour-btn">
                <i className="fas fa-play-circle"></i> Start Tour
              </button>
            </div>
          </div>

          <div className="tour-features">
            <h3>Tour Features</h3>
            <div className="features-list">
              {selectedTour.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tour-actions">
            <button className="action-btn">
              <i className="fas fa-download"></i> Download Tour
            </button>
            <button className="action-btn">
              <i className="fas fa-share"></i> Share Tour
            </button>
            <button className="action-btn">
              <i className="fas fa-envelope"></i> Schedule Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTours;
