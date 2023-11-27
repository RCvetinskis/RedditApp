"use client";
import React, { useState, useEffect } from "react";
import "../style/animations.css";

const CountDown = ({ startFrom, onCountDownEnd, text }) => {
  const [counter, setCounter] = useState(startFrom);
  useEffect(() => {
    let timer;
    if (counter === 0) {
      onCountDownEnd();
    } else {
      timer = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [counter, onCountDownEnd]);
  return (
    <div className="countdown">
      {" "}
      {text}
      {counter}
    </div>
  );
};

export default CountDown;
