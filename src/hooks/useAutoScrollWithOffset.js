import { useEffect } from "react";

const useAutoScrollWithOffset = (id) => {
  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);

      if (element) {
        const yOffset = -130;
        const yPosition =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }
  }, [id]);
};

export default useAutoScrollWithOffset;
