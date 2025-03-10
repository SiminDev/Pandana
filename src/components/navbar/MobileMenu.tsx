import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";

const navItem = [
  { name: "Home", path: "/" },
  { name: "All Products", path: "/all-products" },
  { name: "Cart", path: "/cart" },
  { name: "About Us", path: "" },
];

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  let menuRef = useClickOutside(() => setIsOpen(false));

  return (
    <div ref={menuRef}>
      <Bars3Icon
        className="size-5"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <nav
          className={`fixed bg-white left-0 top-13 w-48 shadow-xl z-10 ${
            isOpen ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          <ul className="flex flex-col">
            {navItem.map((item) => (
              <li
                key={item.name}
                className="px-6 py-4 border-b border-gray-100 text-sm hover:text-slate-600 cursor-pointer transition duration-100"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
            
          </ul>
        </nav>
      )}
    </div>
  );
}

export default MobileMenu;
