import React from "react";

const SignUp = () => {
  return (
    <div className="block justify-items-center align-items-center p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <form>
        <div className="form-group mb-6">
          <label
            for="email"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-[#9333EA] focus:outline-none"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
        </div>
        <div className="form-group mb-4">
          <label
            for="exampleInputPassword2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-[#9333EA] focus:outline-none"
            id="exampleInputPassword2"
            placeholder="Password"
          ></input>
        </div>
        <div className="flex justify-center items-center mb-4">
          <a
            href="#!"
            className="text-[#9333EA] hover:text-[#9333EA] focus:text-[#9333EA] transition duration-200 ease-in-out"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="
      w-full
      px-6
      py-2.5
      bg-[#9333EA]
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-[#9333EA] hover:shadow-lg
      focus:bg-[#9333EA] focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-[#9333EA] active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Sign in
        </button>
        <p className="text-gray-800 mt-6 text-center">
          Dont have an account?{" "}
          <a
            href="#!"
            className="text-[#9333EA] hover:text-[#9333EA] focus:text-[#9333EA] transition duration-200 ease-in-out"
          >
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
