import { Ref, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface UserMenuProps {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  menuRef: Ref;
}

function UserMenu({ openMenu, setOpenMenu, menuRef }: UserMenuProps) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu, setOpenMenu]);

  return (
    <div className="absolute w-26 z-5 bg-white border border-gray-200 shadow-xl rounded-lg -right-10 top-7 overflow-hidden">
      <ul>
        <Link to={"/cart"}>
          <li className="border-b text-gray-600 px-3 py-2 border-gray-200 text-sm hover:bg-slate-100 duration-150 transition-all">
            Profile
          </li>
        </Link>
        <Link to={"/"}>
          <li className="px-3 py-2 text-gray-600 text-sm hover:bg-slate-100 duration-150 transition-all">
            Log out
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default UserMenu;
