import { useNavigate, Link } from "react-router-dom";
import Google from "./Google";
import Facebook from "./Facebook";

function Registration() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login/");
  };
  return (
    <section className="h-full">
      {/* <!-------------------------------------------------------------------------------> */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  py-6 lg:px-8">
        <div className="w-full sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          {/* text-gray-900 */}
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight ">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-sm md:max-w-lg">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <section className="flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium leading-6 "
                >
                  First Name
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  autoComplete="first_name"
                  required
                  className="block text-gray-900 w-full rounded-md border-0 py-1.5 px-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-6 "
                >
                  Last Name
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  autoComplete="last_name"
                  required
                  className="block text-gray-900 w-full rounded-md border-0 py-1.5 px-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </section>

            <section className="flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 "
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block text-gray-900 w-full rounded-md border-0 py-1.5 px-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 "
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block text-gray-900 w-full rounded-md border-0 py-1.5 px-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </section>

            <section className="flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <label
                  htmlFor="password1"
                  className="block text-sm font-medium leading-6 "
                >
                  Password
                </label>
                <input
                  id="password1"
                  name="password1"
                  type="password"
                  autoComplete="password1"
                  required
                  className="block text-gray-900 w-full rounded-md border-0 py-1.5 px-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="password2"
                  className="block text-sm font-medium leading-6 "
                >
                  Confirm Password
                </label>
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  autoComplete="password2"
                  required
                  className="block text-gray-900 w-full rounded-md border-0 py-1.5 px-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </section>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          {/* text-gray-500 */}
          <section className="flex items-center justify-center text-content gap-2 w-full my-5">
            <hr className="w-26 md:w-32" />
            <p className=" text-sm">Or continue with </p>
            <hr className="w:26 md:w-32" />
          </section>
          <section className="flex flex-col md:flex-row items-center gap-2 w-full md:justify-around">
            <Google />
            <Facebook />
          </section>
          <section className="flex flex-col md:flex-row items-center text-sm mt-10 justify-between gap-2 md:gap-2">
            <section className="flex items-center">
              <span>Already have an account? </span>
              <Link
                to="/login/"
                className="font-semibold text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Login
              </Link>
            </section>

            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Registration;
