import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../error/Error";
import FormInput from "./FormInput";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [inputs, setInputs] = useState({ ...initialState });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const formValid = () => {
    const { email, password } = inputs;
    if (!email.length && !password.length) {
      return setError("Enter your all information");
    } else if (!email.length) {
      return setError("Enter your email");
    } else if (!password.length) {
      return setError("Enter your password");
    } else {
      setError("");
      return true;
    }
  };

  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { email, password } = inputs;
    e.preventDefault();
    if (formValid()) {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user);
          setInputs({ ...initialState });
        })
        .catch((error) => {
          if (error.code.includes("user-not-found")) {
            setError("User not found. please again");
          }
          if (error.code.includes("wrong-password")) {
            setError("Wrong password. Enter your correct password");
          }
        });
    }
  };

  const handleGoggleSubmit = () => {
    console.log("loading");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(result);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="mt-20">
      <div className="w-[565px] bg-[#f1f1f1] px-10 py-5 rounded-xl mx-auto">
        <h2 className="font-pop font-bold text-[34px] text-textprimary">Login to your account!</h2>
        <div className="w-[480px]">
          <button
            onClick={handleGoggleSubmit}
            className="border-2 mt-4 border-solid border-[#B8B9CE]
     rounded-lg text-[20px] font-pop outline-0 inline-block text-textprimary py-[10px] px-[15px] cursor-pointer"
          >
            <FcGoogle className="inline-block text-[26px] mr-2" />
            Login with Google
          </button>
          <form onSubmit={handleSubmit}>
            <FormInput name="email" type="email" placeholder="E-mail" value={inputs.email} onChange={handleOnChange} />
            <FormInput
              name="password"
              type="password"
              placeholder="Password"
              value={inputs.password}
              onChange={handleOnChange}
            />
            <button className="text-center w-full py-[15px] bg-bgprimary text-white font-medium rounded-3xl">
              Log In
            </button>
          </form>
          <p className="text-textprimary mt-4 text-center font-pop text-[16px]">
            Don’t have an account ?{" "}
            <Link to="/register" className="text-[#EA6C00] font-bold">
              Sign In
            </Link>
          </p>
          {error && <Error message={error} />}
        </div>
      </div>
    </div>
  );
};

export default Login;
