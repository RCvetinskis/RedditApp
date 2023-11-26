"use client";

import { useState } from "react";
import axios from "axios";
import useFormValidation from "../../hooks/useFormValidation";
const Register = ({ setSwitchModals }) => {
  const [inputValues, setInputValues] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { errorMsg, setErrorMsg } = useFormValidation(inputValues, "register");

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
        const { data } = await axios.post(
          "http://localhost:3000/api/register",
          {
            email: inputValues.email,
            username: inputValues.username,
            password: inputValues.password,
          }
        );
        if (data.error) {
          setErrorMsg(data.message);
        } else {
          setSwitchModals(true);
        }
      } catch (error) {
        throw new Error(error);
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
          type="email"
          name="email"
          autoComplete="off"
        />
        <label>Email</label>
      </div>
      <div className="input-container  w-full">
        <input
          onChange={handleChange}
          className="input-login border bg-transparent rounded p-3 outline-none  w-full text-white "
          type="text"
          name="username"
          autoComplete="off"
        />
        <label>Username</label>
      </div>

      <div className="input-container  w-full">
        <input
          onChange={handleChange}
          className="input-login border bg-transparent  rounded p-3 outline-none w-full text-white "
          type="password"
          name="password"
          autoComplete="off"
        />
        <label>Password</label>
      </div>
      <div className="input-container  w-full">
        <input
          onChange={handleChange}
          className="input-login border bg-transparent  rounded p-3 outline-none w-full text-white "
          type="password"
          name="confirmPassword"
          autoComplete="off"
        />
        <label>Confirm Password</label>
      </div>

      <button
        className="p-3 rounded self-start w-1/2 border hover-btn  transition-all 200 ease-in-out"
        type="submit"
      >
        Register
      </button>
      <div className="error self-start text-red-500 text-xs ">{errorMsg}</div>
    </form>
  );
};

export default Register;
