import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('completed');

  const completedProjects = [
    {
      id: 1,
      name: "Injambakkam ECR",
      location: "ECR, Chennai",
      year: "2024",
      type: "Luxury Apartments",
      units: "4 Units",
      area: "24k Sq.ft",
      image: "https://source.unsplash.com/800x600/?luxury,apartment"
    },
    {
      id: 2,
      name: "Thirumullaivoyel",
      location: "Thirumullaivoyel, Chennai",
      year: "2023",
      type: "Premium Flats",
      units: "120 Units",
      area: "1 Acre",
      image: "https://source.unsplash.com/800x600/?modern,building"
    },
    {
      id: 3,
      name: "Kolambakkam Sipcot",
      location: "Kolambakkam",
      year: "2022",
      type: "Luxury Villas",
      units: "6 Units",
      area: "2 acres",
      image: "https://source.unsplash.com/800x600/?luxury,villa"
    }
  ];

  const upcomingProjects = [
    {
      id: 4,
      name: "Marina Bay Residences",
      location: "Marina Beach Road",
      expectedCompletion: "2025",
      type: "Premium Apartments",
      units: "80 Units",
      area: "1.5 Acres",
      status: "Under Construction",
      image: "https://source.unsplash.com/800x600/?construction,modern"
    },
    {
      id: 5,
      name: "Green Valley Villas",
      location: "ECR, Chennai",
      expectedCompletion: "2026",
      type: "Luxury Villas",
      units: "12 Units",
      area: "3 Acres",
      status: "Planning Stage",
      image: "https://source.unsplash.com/800x600/?villa,modern"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Our Projects</h1>
        <div className="project-tabs">
          <button 
            className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed Projects
          </button>
          <button 
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Projects
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {activeTab === 'completed' ? (
          completedProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-year">{project.year}</div>
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p className="location"><i className="fas fa-map-marker-alt"></i> {project.location}</p>
                <div className="project-details">
                  <div className="detail">
                    <i className="fas fa-building"></i>
                    <span>{project.type}</span>
                  </div>
                  <div className="detail">
                    <i className="fas fa-home"></i>
                    <span>{project.units}</span>
                  </div>
                  <div className="detail">
                    <i className="fas fa-ruler-combined"></i>
                    <span>{project.area}</span>
                  </div>
                </div>
                <Link to={`/projects/${project.id}`} className="view-details">
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          upcomingProjects.map(project => (
            <div key={project.id} className="project-card upcoming">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-status">{project.status}</div>
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p className="location"><i className="fas fa-map-marker-alt"></i> {project.location}</p>
                <div className="project-details">
                  <div className="detail">
                    <i className="fas fa-building"></i>
                    <span>{project.type}</span>
                  </div>
                  <div className="detail">
                    <i className="fas fa-home"></i>
                    <span>{project.units}</span>
                  </div>
                  <div className="detail">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Expected: {project.expectedCompletion}</span>
                  </div>
                </div>
                <Link to={`/projects/${project.id}`} className="view-details">
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
