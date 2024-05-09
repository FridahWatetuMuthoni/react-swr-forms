import { FaSun } from "react-icons/fa6";
import { MdNightlight } from "react-icons/md";
import useGlobalContext from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { mode, setMode } = useGlobalContext();

  const handleMode = () => {
    let new_mode = mode === "dark" ? "light" : "dark";
    setMode(new_mode);
  };

  return (
    <header className=" body-font">
      <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-3 sm:gap-0">
        <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <li className="mr-5 hover:text-hover cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5 hover:text-hover cursor-pointer">
            <Link to="/about"> About</Link>
          </li>
          <li className="mr-5 hover:text-hover cursor-pointer">
            <Link to="/services">Services</Link>
          </li>
          <li className="mr-5 hover:text-hover cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <section className="flex item-center gap-4 mt-4 sm:mt-0">
          <Link to="/logout/">
            <button
              className=" ring-1  rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200  hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
              type="button"
            >
              Logout
            </button>
          </Link>
          <span
            onClick={handleMode}
            className="cursor-pointer text-2xl flex items-center"
          >
            {mode === "light" ? <MdNightlight /> : <FaSun />}
          </span>
        </section>
      </nav>
    </header>
  );
}

export default Navbar;
