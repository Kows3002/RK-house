import React, { useState, useEffect } from 'react';
import './Features.css';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = loanTerm * 12;
    
    const emiAmount = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
    const totalAmount = emiAmount * time;
    const interestAmount = totalAmount - principal;

    setEmi(emiAmount);
    setTotalPayment(totalAmount);
    setTotalInterest(interestAmount);
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="emi-calculator">
      <div className="feature-header">
        <h1>EMI Calculator</h1>
        <p>Plan your home loan with our easy EMI calculator</p>
      </div>

      <div className="calculator-container">
        <div className="input-section">
          <div className="input-group">
            <label>Loan Amount (₹)</label>
            <input
              type="range"
              min="1000000"
              max="10000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
            <div className="input-value">₹ {loanAmount.toLocaleString()}</div>
          </div>

          <div className="input-group">
            <label>Interest Rate (%)</label>
            <input
              type="range"
              min="5"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
            <div className="input-value">{interestRate}%</div>
          </div>

          <div className="input-group">
            <label>Loan Term (Years)</label>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
            />
            <div className="input-value">{loanTerm} Years</div>
          </div>
        </div>

        <div className="result-section">
          <div className="result-card">
            <h3>Monthly EMI</h3>
            <div className="amount">₹ {Math.round(emi).toLocaleString()}</div>
          </div>

          <div className="result-card">
            <h3>Total Interest</h3>
            <div className="amount">₹ {Math.round(totalInterest).toLocaleString()}</div>
          </div>

          <div className="result-card">
            <h3>Total Payment</h3>
            <div className="amount">₹ {Math.round(totalPayment).toLocaleString()}</div>
          </div>
        </div>

        <div className="calculator-actions">
          <button className="action-btn">
            <i className="fas fa-download"></i> Download Schedule
          </button>
          <button className="action-btn">
            <i className="fas fa-envelope"></i> Contact Loan Advisor
          </button>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
