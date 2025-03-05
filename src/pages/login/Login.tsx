import { useState } from "react";
import { useLoginContext } from "../../context/LoginContext";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const { handleLogin } = useLoginContext();

  return (
    <div className="flex justify-center p-10 lg:py-20 min-h-120 lg:min-h-0">
      <div className="bg-slate-100 rounded-2xl w-full md:w-2/3 lg:w-2/5 flex flex-col justify-center items-center gap-3.5 p-5 lg:p-10">
        <input
          className="bg-white px-4 py-2 w-full lg:w-3/4 rounded-lg"
          type="text"
          name="username"
          value={user.username}
          placeholder="username"
          onChange={handleChange}
        ></input>
        <input
          className="bg-white px-4 py-2 w-full lg:w-3/4 rounded-lg"
          type="password"
          name="password"
          value={user.password}
          placeholder="password"
          onChange={handleChange}
        ></input>

        <button
          className="w-full lg:w-3/4 rounded-lg bg-green-700 text-white py-2 cursor-pointer mt-5"
          onClick={() => handleLogin(user.username, user.password)}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
