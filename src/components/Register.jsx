import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  first_name: z.string().min(3),
  last_name: z.string().min(3),
  username: z.string().min(3),
  email: z.string().email(),
  password1: z.string().min(8),
  password2: z.string(6).min(8),
});

function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("/", data);
      console.log(response);
    } catch (error) {
      setError("root");
    }
  };

  return (
    <section className=" w-full pt-2" onSubmit={handleSubmit(onSubmit)}>
      <form className="shadow-xl w-1/2 mx-auto px-16 pt-10 py-6 flex flex-col gap-5 ring-1">
        <h1 className=" text-center text-4xl uppercase mb-4">
          Registration Form
        </h1>

        {errors.root && (
          <p className=" text-red-600 mt-2">{errors.root.message}</p>
        )}

        <section className="">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            {...register("first_name", {
              required: "The first_name field can not be empty",
            })}
            id="first_name"
            className="w-full rounded p-2 focus:outline-none text-indigo-950 mt-3"
          />
          {errors.first_name && (
            <p className=" text-red-600 mt-2">{errors.first_name.message}</p>
          )}
        </section>

        <section className="">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            {...register("last_name", {
              required: "The last name field can not be empty",
            })}
            id="last_name"
            className="w-full rounded p-2 focus:outline-none text-indigo-950 mt-3"
          />
          {errors.last_name && (
            <p className=" text-red-600 mt-2">{errors.last_name.message}</p>
          )}
        </section>

        <section className="">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            {...register("username", {
              required: "The username field can not be empty",
            })}
            id="username"
            className="w-full rounded p-2 focus:outline-none text-indigo-950 mt-3"
          />
          {errors.username && (
            <p className=" text-red-600 mt-2">{errors.username.message}</p>
          )}
        </section>

        <section className="">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "The email field is required",
              // validate:(value)=>{
              //   if(!value.includes("@")){
              //     return 'Email must include a @'
              //   }
              //   return true
              // },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "The email should be a valid email",
              },
            })}
            id="email"
            className="w-full rounded p-2 focus:outline-none text-indigo-950 mt-3"
          />
          {errors.email && (
            <p className=" text-red-600 mt-2">{errors.email.message}</p>
          )}
        </section>
        <section className="">
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            name="password1"
            {...register("password1", {
              required: "The password field should not be empty",
              minLength: {
                value: 8,
                message: "The password should be at least 8 charaters",
              },
            })}
            id="password1"
            className="w-full rounded p-2 focus:outline-none text-indigo-950 mt-3"
          />
          {errors.password1 && (
            <p className=" text-red-600 mt-2">{errors.password1.message}</p>
          )}
        </section>
        <section className="">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password2"
            name="password2"
            {...register("password2", {
              required: "The password confirmation field should not be empty",
              minLength: {
                value: 8,
                message:
                  "The password confirmation  should be at least 8 charaters",
              },
            })}
            id="password2"
            className="w-full rounded p-2 focus:outline-none text-indigo-950 mt-3"
          />
          {errors.password2 && (
            <p className=" text-red-600 mt-2">{errors.password2.message}</p>
          )}
        </section>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-button text-white w-full rounded p-2 mt-2"
        >
          {isSubmitting ? "submiting data ..." : "Register"}
        </button>
        <section className="mt-2">
          <span className=" mr-2">Already has an account?</span>
          <Link className=" text-indigo-700" to="/login/">
            Go to Login
          </Link>
        </section>
      </form>
    </section>
  );
}

export default Register;
