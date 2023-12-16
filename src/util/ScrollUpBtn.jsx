// ScrollUpButton.js
import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;

      setIsVisible(scrollY > screenHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        className={`scroll-up-button btn animate-bounce btn-circle text-indigo border-[3px] border-indigo bg-white hover:bg-indigo hover:text-white hover:border-white ${
          isVisible ? "visible " : ""
        }`}
        onClick={scrollToTop}
      >
        <KeyboardArrowUpIcon fontSize="large" />
      </button>
    </>
  );
};

export { ScrollUpBtn };
