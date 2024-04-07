import React, { useState } from "react";
import Header from "./Header";
import Background from "../../src/assets/Background.jpg";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Background} alt="background" />
      </div>

      <form
        action=""
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto  right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input type="text" name="" id="" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600"/>

        )}
        <input
          type="email"
          name=""
          id=""
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder={isSignInForm?"Password":"New Password"}
          className="p-4 my-4 w-full bg-gray-600"
        />
        <button className="p-4 my-6  bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" >
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <span className="cursor-pointer" onClick={toggleSignInForm}> Sign Up Now</span>
            </>
          ) : (
            <>
            Already registered? <span className="cursor-pointer" onClick={toggleSignInForm}> Sign In Now</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
