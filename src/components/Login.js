import React, { useRef, useState } from "react";
import Header from "./Header";
import Background from "../../src/assets/Background.jpg";
import { checkValidation } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage]= useState(null)

  const email = useRef(null);
  const password = useRef(null);
  const name= useRef(null)
  

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick =() =>{
    //validate data
   const message= checkValidation(email.current.value, password.current.value, name.current.value)
   setErrorMessage(message)
 
  

  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Background} alt="background" />
      </div>

      <form onSubmit={(e) => e.preventDefault()}
        action=""
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto  right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            name=""
            id=""
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}
        <input
        ref={email}
          type="email"
          name=""
          id=""
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <input
          type="password"
          ref={password}
          name=""
          id=""
          placeholder={isSignInForm ? "Password" : "New Password"}
          className="p-4 my-4 w-full bg-gray-600"
        />
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button className="p-4 my-6  bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <span className="cursor-pointer" onClick={toggleSignInForm}>
                {" "}
                Sign Up Now
              </span>
            </>
          ) : (
            <>
              Already registered?{" "}
              <span className="cursor-pointer" onClick={toggleSignInForm}>
                {" "}
                Sign In Now
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
