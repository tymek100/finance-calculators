import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between text-white">
        <h1 className="text-xl font-bold">Loan Simulator</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/overpayment" className="hover:underline">Overpayment</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
