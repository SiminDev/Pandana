import { Ref, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";

interface UserMenuProps {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  menuRef: Ref;
}

function UserMenu({ openMenu, setOpenMenu, menuRef }: UserMenuProps) {
  const { handleLogout } = useLoginContext();

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

        <li
          className="px-3 py-2 text-gray-600 text-sm hover:bg-slate-100 duration-150 transition-all"
          onClick={handleLogout}
        >
          Log out
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;
