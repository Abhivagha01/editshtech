import React, { useState, useEffect } from "react";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 50);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`back-top ${isVisible ? "show" : "hide"}`}
      onClick={handleClick}
    >
      <div className={`rocket ${isVisible ? "showrocket" : ""}`}></div>
    </div>
  );
};

export default ScrollToTopBtn;
