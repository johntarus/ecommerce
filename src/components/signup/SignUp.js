import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError("Failled to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto">
      <h2 className="text-xl font-semibold mb-6 text-center">Sign Up</h2>
      {currentUser && currentUser.email}
      {error && alert(error)}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-6">
          <label
            htmlFor="email"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            className="
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
            placeholder="Enter email"
            required
            ref={emailRef}
          ></input>
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="Password"
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
            placeholder="Password"
            required
            ref={passwordRef}
          ></input>
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="Password"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Confirm Password
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
            placeholder="Password"
            required
            ref={confirmPasswordRef}
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
          disabled={loading}
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
          Sign Up
        </button>
        <p className="text-gray-800 mt-6 text-center">
          Already have an account?{" "}
          <a
            href="#!"
            className="text-[#9333EA] hover:text-[#9333EA] focus:text-[#9333EA] transition duration-200 ease-in-out"
          >
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
