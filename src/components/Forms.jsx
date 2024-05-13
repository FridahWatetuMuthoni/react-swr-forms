import Google from "./Google";
import Facebook from "./Facebook";
import { useState } from "react";

const Forms = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="h-full">
      {/* <!-------------------------------------------------------------------------------> */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8 shadow-2xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          {/* text-gray-900 */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              {/* text-gray-900 */}
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                Email address
              </label>
              {/* text-gray-900 */}
              {/* placeholder:text-gray-400 */}
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block text-gray-900 w-full rounded-md border-0 py-1.5 px-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className=" block w-full rounded-md border-0 py-1.5 px-1.5 focus:outline-none  shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-gray-900 "
                />
              </div>
            </div>
            <section className="flex items-center justify-between">
              <div className="text-sm flex items-center">
                <input
                  type="checkbox"
                  name="show_password"
                  id="show_password"
                  onClick={handleShowPassword}
                />
                <span className="ml-2">show password</span>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </section>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          {/* text-gray-500 */}
          <section className="flex items-center justify-center text-content gap-2 w-full my-5">
            <hr className=" w-28" />
            <p className=" text-sm">Or continue with </p>
            <hr className=" w-28" />
          </section>
          <section className="flex items-center gap-4 w-full">
            <Google />
            <Facebook />
          </section>
        </div>
      </div>
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
      {/* <!-------------------------------------------------------------------------------> */}
    </section>
  );
};

export default Forms;

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
*/
