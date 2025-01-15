import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to RK Housing</h1>
          <p>Building Dreams Into Reality Since 2008</p>
          <div className="hero-buttons">
            <Link to="/projects" className="cta-button">View Projects</Link>
            <button className="contact-button">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="https://source.unsplash.com/800x600/?luxury,apartment" alt="Luxury Apartment" />
              <div className="project-badge">Featured</div>
            </div>
            <div className="project-info">
              <h3>Thirumullaivoyel</h3>
              <p>120 Premium Flats | 1 Acre</p>
              <Link to="/projects" className="view-project">Learn More →</Link>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src="https://source.unsplash.com/800x600/?modern,villa" alt="Modern Villa" />
              <div className="project-badge">New Launch</div>
            </div>
            <div className="project-info">
              <h3>Injambakkam ECR</h3>
              <p>4 Luxury Units | 24k Sq.ft</p>
              <Link to="/projects" className="view-project">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose RK Housing</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-medal"></i>
            <h3>15+ Years of Excellence</h3>
            <p>Trusted by hundreds of families since 2008</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-home"></i>
            <h3>747+ Happy Families</h3>
            <p>Successfully delivered homes across Chennai</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-chart-line"></i>
            <h3>34+ Acres Developed</h3>
            <p>Large-scale developments in prime locations</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-star"></i>
            <h3>Premium Quality</h3>
            <p>Best-in-class materials and finishes</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-building"></i>
            <h3>Residential Projects</h3>
            <p>Premium apartments and villas in prime locations</p>
          </div>
          <div className="service-card">
            <i className="fas fa-handshake"></i>
            <h3>Property Management</h3>
            <p>Complete property maintenance solutions</p>
          </div>
          <div className="service-card">
            <i className="fas fa-chart-pie"></i>
            <h3>Investment Advisory</h3>
            <p>Expert guidance for property investments</p>
          </div>
          <div className="service-card">
            <i className="fas fa-home"></i>
            <h3>Rental Services</h3>
            <p>Hassle-free rental property management</p>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="latest-updates">
        <h2>Latest Updates</h2>
        <div className="updates-grid">
          <div className="update-card">
            <div className="update-image">
              <img src="https://source.unsplash.com/800x600/?construction" alt="New Project" />
            </div>
            <div className="update-content">
              <span className="update-tag">New Launch</span>
              <h3>Injambakkam ECR Project</h3>
              <p>Luxury 4-unit development in prime ECR location</p>
              <Link to="/projects" className="read-more">Read More →</Link>
            </div>
          </div>
          <div className="update-card">
            <div className="update-image">
              <img src="https://source.unsplash.com/800x600/?modern,building" alt="Completed Project" />
            </div>
            <div className="update-content">
              <span className="update-tag">Completed</span>
              <h3>Thirumullaivoyel Project</h3>
              <p>Successfully delivered 120 premium flats</p>
              <Link to="/projects" className="read-more">Read More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>"Excellent quality and timely delivery. RK Housing made our dream home a reality."</p>
              <div className="testimonial-author">
                <h4>Rajesh Kumar</h4>
                <p>Mogappair Project</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <i className="fas fa-quote-left"></i>
              <p>"Professional team and great attention to detail. Highly recommended!"</p>
              <div className="testimonial-author">
                <h4>Priya Sharma</h4>
                <p>Anna Nagar Project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Ready to Find Your Dream Home?</h2>
          <p>Get in touch with us today</p>
          <div className="contact-buttons">
            <button className="primary-button">Schedule a Visit</button>
            <button className="secondary-button">Download Brochure</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
