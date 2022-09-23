import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../error/Error";
import FormInput from "./FormInput";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [inputs, setInputs] = useState({ ...initialState });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

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

  return (
    <div className="mt-20">
      <div className="w-[565px] bg-[#f1f1f1] px-10 py-5 rounded-xl mx-auto">
        <h2 className="font-pop font-bold text-[34px] text-textprimary">Login to your account!</h2>
        <div className="w-[480px]">
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
