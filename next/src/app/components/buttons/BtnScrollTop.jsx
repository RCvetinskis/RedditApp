"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BtnScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.5;
      setShowScrollTop(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="btn btn-xs fixed bottom-10 right-20"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default BtnScrollTop;
