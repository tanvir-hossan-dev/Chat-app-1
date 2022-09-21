import React from "react";
import { Link } from "react-router-dom";
import Error from "../error/Error";
import FormInput from "./FormInput";

const Login = () => {
  return (
    <div className="mt-20">
      <div className="w-[565px] bg-[#f1f1f1] px-10 py-5 rounded-xl mx-auto">
        <h2 className="font-pop font-bold text-[34px] text-textprimary">Login to your account!</h2>
        {/* <p className="text-[20px] font-normal text-textprimary">Free register and you can enjoy it</p> */}
        <div className="w-[480px]">
          <form>
            <FormInput name="email" type="email" placeholder="E-mail" />
            <FormInput name="password" type="password" placeholder="Password" />
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
          <Error message="this is a erro" />
        </div>
      </div>
    </div>
  );
};

export default Login;
