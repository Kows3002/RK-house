import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import VirtualTours from './components/features/VirtualTours';
import EMICalculator from './components/features/EMICalculator';
import CompareProperties from './components/features/CompareProperties';
import PropertyBuying from './components/services/PropertyBuying';
import PropertySelling from './components/services/PropertySelling';
import RentalServices from './components/services/RentalServices';
import PropertyConsultation from './components/services/PropertyConsultation';
import InvestmentAdvisory from './components/services/InvestmentAdvisory';
import MarketInsights from './components/features/MarketInsights';
import LegalSupport from './components/features/LegalSupport';
import ResidentialProjects from './components/projects/ResidentialProjects';
import UpcomingProjects from './components/projects/UpcomingProjects';
import CompletedProjects from './components/projects/CompletedProjects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/completed-projects" element={<CompletedProjects />} />
          <Route path="/upcoming-projects" element={<UpcomingProjects />} />
          <Route path="/virtual-tours" element={<VirtualTours />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/compare-properties" element={<CompareProperties />} />
          <Route path="/services/buying" element={<PropertyBuying />} />
          <Route path="/services/selling" element={<PropertySelling />} />
          <Route path="/services/rental" element={<RentalServices />} />
          <Route path="/services/consultation" element={<PropertyConsultation />} />
          <Route path="/services/investment" element={<InvestmentAdvisory />} />
          <Route path="/features/market-insights" element={<MarketInsights />} />
          <Route path="/features/legal-support" element={<LegalSupport />} />
          <Route path="/projects/residential" element={<ResidentialProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
