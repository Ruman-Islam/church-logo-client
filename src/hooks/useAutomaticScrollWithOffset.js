import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useAutomaticScrollWithOffset = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const yOffset = -130;
        const yPosition =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: yPosition, behavior: "auto" });
      }
    }
  }, [location]);
};

export default useAutomaticScrollWithOffset;
