"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

import useFormValidation from "../../hooks/useFormValidation";

const Login = ({ setOpenLoginModal }) => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const { errorMsg, setErrorMsg } = useFormValidation(inputValues, "login");

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errorMsg) {
      try {
        const res = await signIn("credentials", {
          email: inputValues.email,
          password: inputValues.password,
          redirect: false,
        });
        if (res.error) {
          setErrorMsg("Invalid credentials");
        } else {
          setOpenLoginModal(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <form
      className="form-login flex flex-col gap-5 items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="input-container  w-full">
        <input
          onChange={handleChange}
          className="input-login border bg-transparent rounded p-3 outline-none  w-full text-white "
          type="text"
          name="email"
        />
        <label>Email</label>
      </div>

      <div className="input-container  w-full">
        <input
          onChange={handleChange}
          className="input-login border bg-transparent  rounded p-3 outline-none w-full text-white "
          type="password"
          name="password"
        />
        <label>Password</label>
      </div>

      <button
        className="p-3 rounded self-start w-1/2 border hover-btn  transition-all 200 ease-in-out"
        type="submit"
      >
        Log In
      </button>
      <div className="error self-start text-red-500 text-xs ">{errorMsg}</div>
    </form>
  );
};

export default Login;
