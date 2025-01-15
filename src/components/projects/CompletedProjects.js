import React, { useState } from 'react';
import './Projects.css';

const CompletedProjects = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const completedProjects = [
    {
      id: 1,
      year: 2008,
      name: "Perambur SIP Colony",
      location: "Tokel Road",
      projectName: "Sri Brace",
      specs: "23 Flats",
      area: "28k Sq.ft"
    },
    {
      id: 2,
      year: 2009,
      name: "Kolathur",
      location: "Perambur Nagar",
      specs: "48 Units",
      area: "48k Sq.ft"
    },
    {
      id: 3,
      year: 2009,
      name: "Then Palani Nagar",
      location: "Kolathur",
      specs: "16 Units",
      area: "16k Sq.ft"
    },
    {
      id: 4,
      year: 2010,
      name: "Anna Nagar East",
      location: "G Block No.54",
      specs: "24 Units",
      area: "24k Sq.ft"
    },
    {
      id: 5,
      year: 2010,
      name: "Anna Nagar West",
      location: "Near SBOA School",
      specs: "4 Flats",
      area: "14k Sq.ft"
    },
    {
      id: 6,
      year: 2011,
      name: "Mogappair East",
      location: "Pari Salai",
      specs: "38 Flats",
      area: "38k Sq.ft"
    },
    {
      id: 7,
      year: 2012,
      name: "Mogappair West",
      location: "Near DAV School",
      specs: "48 Units",
      area: "48k Sq.ft"
    },
    {
      id: 8,
      year: 2012,
      name: "Mogappair TVS Colony",
      specs: "14 Flats",
      area: "14k Sq.ft"
    },
    {
      id: 9,
      year: 2011,
      name: "Rathiappet Pandian St",
      location: "Golden Nagar, Mogappair East",
      pincode: "Chennai - 600050",
      specs: "54 Flats",
      area: "54k Sq.ft"
    },
    {
      id: 10,
      year: 2012,
      name: "Valasarvakkam",
      location: "Mettu Kuppam",
      pincode: "Chennai - 600087",
      specs: "24 Units",
      area: "24k Sq.ft"
    },
    {
      id: 11,
      year: 2013,
      name: "Ambattur Road Hills",
      location: "Near Rocky Theater",
      pincode: "Ch - 600053",
      specs: "25 Units",
      area: "25k Sq.ft"
    },
    {
      id: 12,
      year: 2015,
      name: "Kolambakkam Sipcot",
      pincode: "Ch - 603102",
      specs: "58 Villas",
      area: "2 acres"
    },
    {
      id: 13,
      year: 2015,
      name: "Ranga Rocky Garden",
      location: "ECR",
      specs: "8 Villas",
      area: "40k Sq.ft"
    },
    {
      id: 14,
      year: 2018,
      name: "Alyappanthangal",
      specs: "156 Villas",
      area: "30 acres"
    },
    {
      id: 15,
      year: 2018,
      name: "Madhavaram Bank Colony",
      location: "Tiruvallur",
      pincode: "600051",
      specs: "56 Villas",
      area: "1 acres"
    },
    {
      id: 16,
      year: 2012,
      name: "Kattankulathur",
      location: "Near SRM College",
      specs: "48 Units",
      area: "48k Sq.ft"
    },
    {
      id: 17,
      year: 2021,
      name: "Thirumullaivoyel",
      specs: "120 Flats",
      area: "1 acres"
    },
    {
      id: 18,
      year: 2024,
      name: "Injambakkam",
      location: "ECR, Sai Baba Colony",
      specs: "4 Units",
      area: "24k Sq.ft"
    }
  ];

  const filteredProjects = completedProjects
    .filter(project => selectedYear === 'all' || project.year === parseInt(selectedYear))
    .filter(project => selectedLocation === 'all' || project.location?.toLowerCase().includes(selectedLocation.toLowerCase()));

  return (
    <div className="projects-page">
      <div className="projects-hero completed-hero">
        <h1>Completed Projects</h1>
        <p>Our legacy of successful residential developments</p>
      </div>

      <div className="filters-section">
        <div className="filters-container">
          <select 
            className="filter-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="all">Filter by Year</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2015">2015</option>
            <option value="2018">2018</option>
            <option value="2021">2021</option>
            <option value="2024">2024</option>
          </select>
          <select 
            className="filter-select"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="all">Filter by Location</option>
            <option value="mogappair">Mogappair</option>
            <option value="valasarvakkam">Valasarvakkam</option>
            <option value="ambattur">Ambattur</option>
            <option value="kolambakkam">Kolambakkam</option>
            <option value="kolathur">Kolathur</option>
            <option value="anna nagar">Anna Nagar</option>
            <option value="kattankulathur">Kattankulathur</option>
            <option value="madhavaram">Madhavaram</option>
            <option value="thirumullaivoyel">Thirumullaivoyel</option>
            <option value="injambakkam">Injambakkam</option>
          </select>
        </div>
      </div>

      <div className="completed-projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="completed-project-card">
            <div className="project-image">
              <img src={`https://source.unsplash.com/800x600/?building,apartment&sig=${project.id}`} alt={project.name} />
              <div className="completion-year">{project.year}</div>
            </div>
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              {project.location && (
                <p className="project-location">
                  <i className="fas fa-map-marker-alt"></i> {project.location}
                </p>
              )}
              {project.pincode && (
                <p className="project-address">{project.pincode}</p>
              )}
              <div className="project-specs">
                <div className="spec-item">
                  <i className="fas fa-building"></i>
                  <span>{project.specs}</span>
                </div>
                <div className="spec-item">
                  <i className="fas fa-chart-area"></i>
                  <span>{project.area}</span>
                </div>
              </div>
              <div className="project-actions">
                <button className="view-details-btn">
                  <i className="fas fa-eye"></i> View Details
                </button>
                <button className="enquire-btn">
                  <i className="fas fa-envelope"></i> Enquire
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="track-record">
        <h2>Our Track Record</h2>
        <div className="record-stats">
          <div className="stat-item">
            <div className="stat-number">18</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">747</div>
            <div className="stat-label">Total Units</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">34</div>
            <div className="stat-label">Acres Developed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">16</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">442k</div>
            <div className="stat-label">Sq.ft Built-up Area</div>
          </div>
        </div>
        <div className="record-highlights">
          <div className="highlight">
            <i className="fas fa-home"></i>
            <h3>Residential Excellence</h3>
            <p>From luxury villas to premium apartments</p>
          </div>
          <div className="highlight">
            <i className="fas fa-map-marked-alt"></i>
            <h3>Prime Locations</h3>
            <p>Strategic projects across Chennai</p>
          </div>
          <div className="highlight">
            <i className="fas fa-chart-line"></i>
            <h3>Consistent Growth</h3>
            <p>From 23 units in 2008 to 156-villa projects</p>
          </div>
        </div>
      </div>

      <div className="project-timeline">
        <h2>Our Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2008</div>
            <div className="timeline-content">
              <h3>First Residential Project</h3>
              <p>Perambur SIP Colony - 23 Flats</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2009</div>
            <div className="timeline-content">
              <h3>Kolathur Project</h3>
              <p>48 Units</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2010</div>
            <div className="timeline-content">
              <h3>Anna Nagar East Project</h3>
              <p>24 Units</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2011</div>
            <div className="timeline-content">
              <h3>Mogappair East Project</h3>
              <p>38 Flats</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2012</div>
            <div className="timeline-content">
              <h3>Mogappair West Project</h3>
              <p>48 Units</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2013</div>
            <div className="timeline-content">
              <h3>Ambattur Road Hills</h3>
              <p>25 Units</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2015</div>
            <div className="timeline-content">
              <h3>Kolambakkam Sipcot</h3>
              <p>58 Villas on 2 acres</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2018</div>
            <div className="timeline-content">
              <h3>Alyappanthangal</h3>
              <p>156 Villas on 30 acres</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2021</div>
            <div className="timeline-content">
              <h3>Thirumullaivoyel</h3>
              <p>120 Flats on 1 acre</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <h3>Injambakkam ECR Project</h3>
              <p>4 Units at 24k Sq.ft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
