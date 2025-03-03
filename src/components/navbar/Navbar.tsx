import Navigation from "./Navigation";
import CartButton from "./CartButton";
import UserStatus from "./UserStatus";

function Navbar() {
  return (
    <div className="px-15 py-5 grid grid-cols-3 items-center border-b border-b-slate-200">
      <img src="/assets/logo-black.svg" />
      <Navigation />
      <div className="flex items-center gap-3.5 justify-end relative">
        <UserStatus />
        <CartButton />
      </div>
    </div>
  );
}

export default Navbar;
