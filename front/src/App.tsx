import React, { useState } from 'react';
import './App.css';

interface SimulationInput {
  capital_remaining: number;
  apr: number;
  monthly_payment: number;
}

function App() {
  const [capitalRemaining, setCapitalRemaining] = useState(23000);
  const [apr, setApr] = useState(0.13);
  const [monthlyPayment, setMonthlyPayment] = useState(-660);
  const [result, setResult] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    const simulationData: SimulationInput = {
      capital_remaining: capitalRemaining,
      apr,
      monthly_payment: monthlyPayment,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(simulationData),
      });

      if (!response.ok) {
        throw new Error('Server error: ' + response.statusText);
      }

      const data = await response.json();
      setResult(data.remaining_payments);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while calculating. Please check the console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Loan Payment Simulator</h1>
      <form onSubmit={handleSubmit} className="simulation-form">
        <div className="form-group">
          <label>Capital Remaining (£)</label>
          <input
            type="number"
            value={capitalRemaining}
            onChange={(e) => setCapitalRemaining(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>APR (Annual % Rate)</label>
          <input
            type="number"
            step="0.01"
            value={apr}
            onChange={(e) => setApr(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Monthly Payment (£)</label>
          <input
            type="number"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(Number(e.target.value))}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Calculating...' : 'Calculate'}
        </button>
      </form>

      {result !== null && (
        <div className="result">
          <h2>Results</h2>
          <p>Remaining Payments: <strong>{result.toFixed(2)}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;
