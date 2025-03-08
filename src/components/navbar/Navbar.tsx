import Navigation from "./Navigation";
import CartButton from "./CartButton";
import UserStatus from "./UserStatus";
import MobileMenu from "./MobileMenu";
import logo from "../../../public/assets/logo-black.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="px-5 py-3 md:py-5 lg:px-15 grid grid-cols-3 items-center border-b border-b-slate-200">
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <Link to={"/"}>
        <img src={logo} className="w-24 lg:w-36" />
      </Link>
      <div className="hidden md:flex">
        <Navigation />
      </div>
      <div className="flex items-center gap-3.5 justify-end relative">
        <div className="hidden md:flex">
          <UserStatus />
        </div>
        <CartButton />
      </div>
    </div>
  );
}

export default Navbar;
