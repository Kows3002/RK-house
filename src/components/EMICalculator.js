import React, { useState } from 'react';
import './EMICalculator.css';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = (e) => {
    e.preventDefault();
    
    const principal = parseFloat(loanAmount);
    const ratePerMonth = parseFloat(interestRate) / (12 * 100);
    const months = parseFloat(loanTerm) * 12;
    
    const emi = principal * ratePerMonth * Math.pow(1 + ratePerMonth, months) / (Math.pow(1 + ratePerMonth, months) - 1);
    
    setEmi(emi.toFixed(2));
  };

  return (
    <div className="emi-calculator">
      <h1>EMI Calculator</h1>
      <div className="calculator-container">
        <form onSubmit={calculateEMI}>
          <div className="input-group">
            <label>Loan Amount (₹)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Enter loan amount"
              required
            />
          </div>
          
          <div className="input-group">
            <label>Interest Rate (%)</label>
            <input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Enter interest rate"
              required
            />
          </div>
          
          <div className="input-group">
            <label>Loan Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="Enter loan term"
              required
            />
          </div>
          
          <button type="submit" className="calculate-btn">Calculate EMI</button>
        </form>

        {emi && (
          <div className="result">
            <h2>Your Monthly EMI</h2>
            <div className="emi-amount">₹ {emi}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EMICalculator;
