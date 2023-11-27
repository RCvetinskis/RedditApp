"use client";
import React from "react";
import { useRouter } from "next/navigation";

import CountDown from "../countDown";
const PageNotFound = () => {
  const router = useRouter();

  const onCountDownEnd = () => {
    router.replace("/");
  };

  return (
    <div className="grid place-items-center  w-screen h-screen">
      <h1 className="text-2xl font-bold light-purpole-color">
        <CountDown
          startFrom={2}
          onCountDownEnd={onCountDownEnd}
          text="PAGE NOT FOUND Redirecting in "
        />
      </h1>
    </div>
  );
};

export default PageNotFound;
