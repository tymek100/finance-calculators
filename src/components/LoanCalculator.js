import React, { useState } from 'react';
import apiService from '../services/apiService';

const LoanCalculator = () => {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [term, setTerm] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    const data = await apiService.calculateLoan({ amount, interest, term });
    setResult(data);
  };

  return (
    <div>
      <h2>Loan Calculator</h2>
      <input
        type="number"
        placeholder="Loan Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />
      <input
        type="number"
        placeholder="Term (years)"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result && <p>Monthly Payment: {result.monthlyPayment}</p>}
    </div>
  );
};

export default LoanCalculator;
