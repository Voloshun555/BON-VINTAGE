import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import s from "./ScrollToTop.module.scss";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className={s.scrollBtn}>
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};
