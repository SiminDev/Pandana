import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="px-10 py-4 grid grid-cols-3 items-center border-b border-b-slate-200">
      <div className="">
        <img src='/assets/logo-black.svg' />
      </div>
      <nav className="flex">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-products">All Products</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
