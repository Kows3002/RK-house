import React from 'react';
import './Features.css';

const LegalSupport = () => {
  return (
    <div className="feature-page">
      <div className="feature-hero legal-support-hero">
        <h1>Legal Support</h1>
        <p>Expert legal assistance for all your real estate transactions</p>
      </div>

      <div className="feature-content">
        {/* Services Section */}
        <section className="legal-services">
          <h2>Our Legal Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-file-contract"></i>
              <h3>Document Verification</h3>
              <ul>
                <li>Title deed verification</li>
                <li>Property documents review</li>
                <li>Legal history check</li>
                <li>Encumbrance certificate verification</li>
              </ul>
            </div>
            <div className="service-card">
              <i className="fas fa-handshake"></i>
              <h3>Agreement Preparation</h3>
              <ul>
                <li>Sale deed preparation</li>
                <li>Rental agreement drafting</li>
                <li>MoU preparation</li>
                <li>Legal notice drafting</li>
              </ul>
            </div>
            <div className="service-card">
              <i className="fas fa-gavel"></i>
              <h3>Legal Consultation</h3>
              <ul>
                <li>Property dispute resolution</li>
                <li>Legal opinion</li>
                <li>Court representation</li>
                <li>Mediation services</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="legal-process">
          <h2>Legal Process</h2>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Initial Consultation</h3>
                <p>Discuss your legal requirements with our experts</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Document Review</h3>
                <p>Thorough analysis of all property documents</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Legal Assessment</h3>
                <p>Detailed evaluation and risk assessment</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Solution Implementation</h3>
                <p>Execute the required legal procedures</p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Resources */}
        <section className="legal-resources">
          <h2>Legal Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <i className="fas fa-book"></i>
              <h3>Legal Guidelines</h3>
              <p>Essential legal guidelines for property transactions</p>
              <button className="download-btn">Download Guidelines</button>
            </div>
            <div className="resource-card">
              <i className="fas fa-file-alt"></i>
              <h3>Document Checklist</h3>
              <p>Comprehensive checklist of required documents</p>
              <button className="download-btn">Download Checklist</button>
            </div>
            <div className="resource-card">
              <i className="fas fa-question-circle"></i>
              <h3>FAQs</h3>
              <p>Common legal questions and answers</p>
              <button className="view-btn">View FAQs</button>
            </div>
          </div>
        </section>

        {/* Legal Team */}
        <section className="legal-team">
          <h2>Our Legal Experts</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format" alt="Legal Expert" />
              </div>
              <div className="team-info">
                <h3>Adv. Rahul Kumar</h3>
                <p className="designation">Senior Property Lawyer</p>
                <p>15+ years of experience in real estate law</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format" alt="Legal Expert" />
              </div>
              <div className="team-info">
                <h3>Adv. Priya Sharma</h3>
                <p className="designation">Legal Documentation Expert</p>
                <p>10+ years of experience in property documentation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="legal-contact">
          <h2>Get Legal Assistance</h2>
          <div className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <select>
                <option value="">Select Service Type</option>
                <option value="verification">Document Verification</option>
                <option value="agreement">Agreement Preparation</option>
                <option value="consultation">Legal Consultation</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Describe your legal requirement"></textarea>
            </div>
            <button type="submit" className="submit-btn">Request Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LegalSupport;
