import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { projects, locations } from '../data/projects';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

const Home = () => {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    propertyType: ''
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false
  };

  const slides = [
    {
      image: 'https://img.freepik.com/free-photo/traditional-house-interior-design_23-2151050917.jpg?t=st=1736928758~exp=1736932358~hmac=b986cf0f8729c580058095a894058ee2a7f6ac0ddbb2b0052ab3283e3ab35007&w=996',
      title: 'Luxury Living Redefined',
      subtitle: 'Discover Your Dream Home'
    },
    {
      image: 'https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?t=st=1736928814~exp=1736932414~hmac=51b19b8ef505ebd4c85d3fc2b2045c3047986f9fb9cda4689b4919804f1e4152&w=1060',
      title: 'Premium Properties',
      subtitle: 'In Prime Locations'
    },
    {
      image: 'https://img.freepik.com/free-photo/medium-shot-people-working-as-real-estate-agents_23-2151065011.jpg?t=st=1736929036~exp=1736932636~hmac=5167bfee69a3865fad4e1226fe1900ab2bb9332650fcbafbddb010e6b3aa42ae&w=1380',
      title: '15+ Years of Excellence',
      subtitle: 'Your Trusted Real Estate Partner'
    }
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const featuredProjects = projects.slice(0, 6);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home">
      {/* Hero Section with Slider */}
      <div className="hero-slider">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div 
                className="slide-bg" 
                style={{
                  backgroundImage: `url(${slide.image})`,
                  animation: 'zoomEffect 20s infinite'
                }}
              />
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <Link to="/projects" className="cta-button">View Projects</Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-item">
          <span className="filter-label">Location</span>
          <select 
            name="location" 
            value={filters.location}
            onChange={handleFilterChange}
          >
            <option value="">Select Location</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <span className="filter-label">Price Range</span>
          <select 
            name="priceRange" 
            value={filters.priceRange}
            onChange={handleFilterChange}
          >
            <option value="">Select Price Range</option>
            <option value="0-50">Under ₹50 Lakhs</option>
            <option value="50-100">₹50L - ₹1 Cr</option>
            <option value="100-200">₹1 Cr - ₹2 Cr</option>
            <option value="200+">Above ₹2 Cr</option>
          </select>
        </div>

        <div className="filter-item">
          <span className="filter-label">Property Type</span>
          <select 
            name="propertyType" 
            value={filters.propertyType}
            onChange={handleFilterChange}
          >
            <option value="">Select Type</option>
            <option value="villa">Luxury Villas</option>
            <option value="apartment">Premium Apartments</option>
            <option value="plot">Premium Plots</option>
          </select>
        </div>

        <button className="search-btn">
          Search Properties
        </button>
      </div>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>Discover our handpicked selection of premium properties</p>
        </div>
        
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay"></div>
                <div className="project-price">₹{project.price}</div>
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <div className="project-meta">
                  <div className="meta-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{project.location}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-home"></i>
                    <span>{project.type}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-ruler-combined"></i>
                    <span>{project.size}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-bed"></i>
                    <span>{project.bedrooms} Beds</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/projects" className="view-all-btn">View All Projects</Link>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="experience-title">
          <h2>Why Choose RK Housing</h2>
          <p>Building dreams into reality with excellence and trust</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <span className="stat-number">15+</span>
            <p className="stat-text">Years of Experience</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-home"></i>
            </div>
            <span className="stat-number">500+</span>
            <p className="stat-text">Projects Completed</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-smile"></i>
            </div>
            <span className="stat-number">1000+</span>
            <p className="stat-text">Happy Clients</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-award"></i>
            </div>
            <span className="stat-number">25+</span>
            <p className="stat-text">Awards Won</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <h2>Get in Touch</h2>
            <p>Ready to find your dream home? Our expert team is here to help you every step of the way. Contact us today for a personalized consultation.</p>
            
            <div className="contact-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <span className="feature-text">24/7 Support Available</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <span className="feature-text">Expert Consultation</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-home"></i>
                </div>
                <span className="feature-text">Property Tours</span>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-file-signature"></i>
                </div>
                <span className="feature-text">Easy Documentation</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter your name"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Enter your phone number"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message" 
                  placeholder="Tell us about your requirements"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
