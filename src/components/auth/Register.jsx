import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../error/Error";
import FormInput from "./FormInput";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { userLogedIn } from "../../redux/features/loggedinuser/LoggedInUser";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [inputs, setInputs] = useState({ ...initialState });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();
  const data = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();

  const formValid = () => {
    const { name, email, password, confirmPassword } = inputs;
    if (!name.length && !email.length && !password.length && !confirmPassword.length) {
      return setError("Enter your all information");
    } else if (!name.length) {
      return setError("Enter your name");
    } else if (!email.length) {
      return setError("Enter your email");
    } else if (!password.length) {
      return setError("Enter your password");
    } else if (!confirmPassword.length) {
      return setError("Enter your confirm password");
    } else if (!confirmPassword.length) {
      return setError("Enter your confirm password");
    } else if (password.length < 6) {
      return setError("Password at least 6 latter");
    } else if (password !== confirmPassword) {
      return setError("Confirm password does not match");
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
    const { name, email, password } = inputs;
    e.preventDefault();
    if (formValid()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
              "https://e7.pngegg.com/pngimages/117/435/png-clipart-human-figure-icon-illustration-user-silhouette-my-account-icon-animals-black-thumbnail.png",
          }).then(() => {
            const uid = auth.currentUser.uid;
            set(ref(db, "users/" + uid), {
              username: name,
              email: email,
            });
            dispatch(userLogedIn({ name, email, uid }));
          });
          setInputs({ ...initialState });
          navigate("/inbox/home");
        })
        .catch((error) => {
          if (error?.code.includes("auth/email-already-in-use")) {
            setError("This Email already in use. Please use another one.");
          }
        });
    }
  };

  return (
    <div className="">
      <div className="w-[650px] bg-[#f1f1f1] px-10 py-5 rounded-xl mx-auto">
        <h2 className="font-pop font-bold text-[34px] text-textprimary">Get started with easily register</h2>
        <p className="text-[20px] font-normal text-textprimary">Free register and you can enjoy it</p>
        <div className="w-[480px]">
          <form onSubmit={handleSubmit}>
            <FormInput name="name" type="text" placeholder="Name" value={inputs.name} onChange={handleOnChange} />
            <FormInput name="email" type="email" placeholder="E-mail" value={inputs.email} onChange={handleOnChange} />
            <FormInput
              name="password"
              type="password"
              placeholder="Password"
              value={inputs.password}
              onChange={handleOnChange}
            />
            <FormInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={handleOnChange}
            />
            <button
              type="submit"
              className="text-center w-full py-[15px] bg-bgprimary text-white font-medium rounded-3xl"
            >
              SIGN UP
            </button>
          </form>
          <p className="text-textprimary mt-4 text-center font-pop text-[16px]">
            Already have an account ?{" "}
            <Link to="/" className="text-[#EA6C00] font-bold">
              Sign In
            </Link>
          </p>
          {error && <Error message={error} />}
        </div>
      </div>
    </div>
  );
};

export default Register;
