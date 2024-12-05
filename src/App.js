import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoanCalculator from './components/LoanCalculator';
import SavingsCalculator from './components/SavingsCalculator';
import InvestmentCalculator from './components/InvestmentCalculator';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/loan-calculator" element={<LoanCalculator />} />
        <Route path="/savings-calculator" element={<SavingsCalculator />} />
        <Route path="/investment-calculator" element={<InvestmentCalculator />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
