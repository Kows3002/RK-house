import React from 'react';
import './Projects.css';

const UpcomingProjects = () => {
  const upcomingProjects = [
    {
      id: 1,
      name: "Injambakkaa ECR",
      location: "Sai baba Colony",
      details: "4 Units",
      price: "24K Sq.ft",
      status: "Under Construction",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format"
    },
    {
      id: 2,
      name: "Maran Garden Main",
      location: "Premium Location",
      details: "9 Villas",
      price: "18K Sq.ft",
      status: "Coming Soon",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format"
    },
    {
      id: 3,
      name: "Maran Garden",
      location: "Prime Area",
      details: "20 Villas",
      price: "35K Sq.ft",
      status: "Coming Soon",
      image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format"
    },
    {
      id: 4,
      name: "Kottapakkam",
      location: "Strategic Location",
      details: "22 Villas",
      status: "Planning Stage",
      image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=500&auto=format"
    },
    {
      id: 5,
      name: "Velappanchavadi",
      location: "Premium Location",
      details: "10 acres (26 houses)",
      status: "Land Development",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format"
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-hero upcoming-hero">
        <h1>Upcoming Projects</h1>
        <p>Discover our newest residential developments coming soon</p>
      </div>

      <div className="upcoming-projects-container">
        {upcomingProjects.map(project => (
          <div key={project.id} className="upcoming-project-card">
            <div className="project-image">
              <img src={project.image} alt={project.name} />
              <div className="project-status">{project.status}</div>
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p className="project-location">
                <i className="fas fa-map-marker-alt"></i> {project.location}
              </p>
              <div className="project-details">
                <div className="detail-item">
                  <i className="fas fa-home"></i>
                  <span>{project.details}</span>
                </div>
                {project.price && (
                  <div className="detail-item">
                    <i className="fas fa-tag"></i>
                    <span>{project.price}</span>
                  </div>
                )}
              </div>
              <div className="project-actions">
                <button className="brochure-btn">
                  <i className="fas fa-download"></i> Download Brochure
                </button>
                <button className="enquiry-btn">
                  <i className="fas fa-envelope"></i> Enquire Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="project-features">
        <h2>Why Choose Our Projects?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-leaf"></i>
            <h3>Eco-Friendly</h3>
            <p>Sustainable design and green spaces</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-shield-alt"></i>
            <h3>Security</h3>
            <p>24/7 security with modern surveillance</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-map-marked-alt"></i>
            <h3>Prime Location</h3>
            <p>Strategic locations with excellent connectivity</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-home"></i>
            <h3>Quality Construction</h3>
            <p>Premium materials and expert craftsmanship</p>
          </div>
        </div>
      </div>

      <div className="project-enquiry">
        <h2>Register Your Interest</h2>
        <form className="enquiry-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <select required>
              <option value="">Select Project</option>
              {upcomingProjects.map(project => (
                <option key={project.id} value={project.name}>{project.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="4"></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default UpcomingProjects;
