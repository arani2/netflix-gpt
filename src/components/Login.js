import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/2eb47dbb-2f07-4f92-9207-4495603eb482/AU-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background_Logo"
        />
      </div>
      <form className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email or Phone number"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered ? Sign Up Now"}
        </p>
        <span className="text-xs my-6">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </span>
      </form>
    </div>
  );
};

export default Login;
