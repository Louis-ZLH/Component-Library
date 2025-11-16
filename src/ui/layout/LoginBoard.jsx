import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import EyeOffIcon from "../base/Icon/EyeOffIcon.jsx";
import EyeIcon from "../base/Icon/EyeIcon.jsx";
import { useLogin } from "../../features/login/useLogin.js";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/login/userSlice.js";

const LoginBoard = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();
  const [showpassword, setShowpassword] = useState(false);
  const { isLogining, verifyLogin } = useLogin();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    verifyLogin(data);
  };

  return (
    <div className="relative flex h-72 w-4/5 justify-center rounded-xl bg-blue-100 shadow-2xl transition-all duration-300 lg:w-3/4 xl:w-1/2">
      <span className="story-script-regular absolute top-1 text-4xl font-bold text-indigo-400">
        Welcome!
      </span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-full w-full flex-col items-center justify-center"
      >
        <div className="flex w-1/2 flex-col space-x-2 md:w-3/4">
          <label
            className="merriweather-100 w-5 text-xl font-bold text-blue-400"
            htmlFor="username"
          >
            Account
          </label>
          <input
            id="username"
            className="h-6 w-full rounded-xl bg-blue-50 px-2 text-sm transition-all duration-300 placeholder:text-stone-400 hover:ring hover:ring-blue-300 hover:outline-none focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Username"
            type="text"
            {...register("username", {
              required: "This field is required",
              validate: (value) => {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return (
                  regex.test(value) || "Please enter a valid email address"
                );
              },
            })}
          ></input>
          {errors?.username?.message && (
            <div className="mt-0.5 ml-1 text-sm text-red-400">
              {errors.username?.message}
            </div>
          )}
        </div>

        <div className="flex w-1/2 flex-col space-x-2 md:w-3/4">
          <label
            className="merriweather-100 w-5 text-xl font-bold text-blue-400"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              className="h-6 w-full rounded-xl bg-blue-50 px-2 text-sm transition-all duration-300 placeholder:text-stone-400 hover:ring hover:ring-blue-300 hover:outline-none focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Password"
              type={showpassword ? "text" : "password"}
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            ></input>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowpassword(!showpassword);
              }}
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-stone-400 hover:text-stone-600"
            >
              {showpassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          {errors?.password?.message && (
            <div className="mt-0.5 ml-1 text-sm text-red-400">
              {errors.password?.message}
            </div>
          )}
        </div>

        <div className="mt-5 space-x-2 lg:space-x-5">
          <button
            className="inline-block w-24 cursor-pointer rounded-full bg-blue-400 py-1 font-semibold text-blue-50 shadow-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-xl focus:ring focus:ring-blue-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 lg:w-28"
            disabled={isLogining}
          >
            {isLogining ? "Logging in..." : "User Login"}
          </button>
          <button
            className="inline-block w-24 cursor-pointer rounded-full bg-purple-400 py-1 font-semibold text-purple-50 shadow-lg transition-all duration-300 hover:bg-purple-500 hover:shadow-xl focus:ring focus:ring-purple-300 focus:outline-none lg:w-28"
            onClick={(e) => {
              e.preventDefault();
              const user = {
                UserUID: "123456",
                username: "visitor",
                language: "en",
                theme: "light",
              };
              dispatch(setUser(user));
              navigate("/docs");
            }}
          >
            Guest Login
          </button>
        </div>
      </form>
      <Link
        className="absolute bottom-2 text-sm text-blue-400 hover:underline"
        to="/contact"
      >
        Contact Admin For An Account
      </Link>
    </div>
  );
};

export default LoginBoard;
