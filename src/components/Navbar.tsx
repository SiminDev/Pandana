import { Link } from "react-router-dom";
import logo from '../assets/pandana-logo.svg'

function Navbar() {
  return (
    <div className="bg-slate-100 px-8 py-4 grid grid-cols-3 items-center">
      <div className="">
        <img src={logo} />
      </div>
      <nav className="flex">
        <ul className="flex gap-4">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/all-products">All Products</Link>
          </li>
          <li>
            <Link to="/clothing">Clothing</Link>
          </li>
          <li>
            <Link to="/jewelry">Jewelry</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
