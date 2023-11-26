"use client";
import { useRef, useEffect } from "react";

const useCloseOutside = (setState, clearValue) => {
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setState(clearValue);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setState]);
  return ref;
};

export default useCloseOutside;
