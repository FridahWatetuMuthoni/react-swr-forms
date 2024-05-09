import { useNavigate, Link } from "react-router-dom";
import useGlobalContext from "../hooks/useGlobalContext";

function Login() {
  const { setToken } = useGlobalContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const new_token = `${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getFullYear()}${date.getUTCDate()}`;
    console.log(new_token);
    localStorage.setItem("token", new_token);
    setToken(new_token);
    navigate("/");
  };
  return (
    <section className=" w-full pt-20">
      <form
        onSubmit={handleSubmit}
        className="shadow-xl w-1/2 mx-auto p-20 flex flex-col gap-5 ring-1"
      >
        <h1 className=" text-center text-4xl uppercase">Login Form</h1>

        <section className="">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="w-full rounded p-2 focus:outline-none text-indigo-950 mt-3"
          />
        </section>
        <section className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full rounded p-2 focus:outline-none text-indigo-950 mt-3"
          />
        </section>
        <button
          type="submit"
          className="bg-button text-white w-full rounded p-2 mt-2"
        >
          Login
        </button>
        <section className="mt-2">
          <span className=" mr-2">Dont have an account?</span>
          <Link className=" text-indigo-700" to="/register/">
            Go to Registration
          </Link>
        </section>
      </form>
    </section>
  );
}

export default Login;
