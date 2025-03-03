import { Link } from "react-router-dom"

function LoginButton() {
  return (
    <Link to={"/login"}>
    <button className="border border-gray-300 px-5 py-1 text-sm rounded-2xl cursor-pointer hover:bg-slate-100 duration-200">
      Login
    </button>
  </Link>
  )
}

export default LoginButton