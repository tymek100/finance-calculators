import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Overpayment from "./pages/Overpayment";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overpayment" element={<Overpayment />} />
      </Routes>
    </div>
  );
}

export default App;
