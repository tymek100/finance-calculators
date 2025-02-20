import { useState } from "react";
import InputField from "../components/InputField";
import Result from "../components/Result";
import axios from "axios";

const Home = () => {
  const [capital, setCapital] = useState("");
  const [apr, setApr] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [remainingPayments, setRemainingPayments] = useState<number | null>(null);

  const calculatePayments = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/remaining-payments", {
        params: {
          capital_remaining: parseFloat(capital),
          apr: parseFloat(apr),
          monthly_payment: parseFloat(monthlyPayment),
        },
      });
      setRemainingPayments(response.data.remaining_payments);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl mb-4">Loan Simulator</h2>
        <InputField label="Capital Remaining (€)" type="number" value={capital} onChange={(e) => setCapital(e.target.value)} />
        <InputField label="APR (%)" type="number" value={apr} onChange={(e) => setApr(e.target.value)} />
        <InputField label="Monthly Payment (€)" type="number" value={monthlyPayment} onChange={(e) => setMonthlyPayment(e.target.value)} />
        <button onClick={calculatePayments} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Calculate
        </button>
        <Result remainingPayments={remainingPayments} />
      </div>
    </div>
  );
};

export default Home;
