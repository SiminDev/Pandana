import { Link } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";

function UserMenu() {
  const { handleLogout } = useLoginContext();

  return (
    <div
      className={`absolute w-26 z-5 bg-white border border-gray-200 shadow-xl rounded-lg -right-10 top-7 overflow-hidden animate-fadeIn`}
    >
      <ul>
        <Link to={"/profile"}>
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
