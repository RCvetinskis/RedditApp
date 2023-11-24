"use client";

import React, { useEffect, useState } from "react";

const formValidation = (values, type) => {
  const [errorMsg, setErrorMsg] = useState("");

  const emailValidRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const errorMessages = {
    email: "Email adress is not valid",
    username: "Username min length 4",
    password: "Password min length 5",
    confirmPassword: "Password should match",
  };

  useEffect(() => {
    if (type === "login") {
      if (!values.email.match(emailValidRegex)) {
        setErrorMsg(errorMessages.email);
      } else if (values.password.length <= 4) {
        setErrorMsg(errorMessages.password);
      } else {
        setErrorMsg("");
      }
    } else if (type === "register") {
      if (!values.email.match(emailValidRegex)) {
        setErrorMsg(errorMessages.email);
      } else if (values.username.length <= 3) {
        setErrorMsg(errorMessages.username);
      } else if (values.password.length <= 4) {
        setErrorMsg(errorMessages.password);
      } else if (values.password !== values.confirmPassword) {
        setErrorMsg(errorMessages.confirmPassword);
      } else {
        setErrorMsg("");
      }
    }
  }, [values]);

  return { errorMsg, setErrorMsg };
};

export default formValidation;
