import { Link } from "react-router-dom";

const navItem = [
  { name: "Home", path: "/" },
  { name: "All Products", path: "/all-products" },
];
function Navigation() {
  return (
    <nav className="flex">
      <ul className="flex gap-4">
        {navItem.map((item) => (
          <li
            key={item.name}
            className="hover:text-slate-600 cursor-pointer transition duration-100"
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
