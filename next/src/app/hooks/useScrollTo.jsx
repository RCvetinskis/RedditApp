"use client";
import { useEffect, useRef } from "react";

const useScrollTo = (data) => {
  const ref = useRef();

  const scrollTo = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  useEffect(() => {
    scrollTo();
  }, [data]);

  return ref;
};

export default useScrollTo;
