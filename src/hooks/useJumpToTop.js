import { useEffect, useState } from "react";

const useJumpToTop = () => {
  const [distance, setDistance] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDistance(window.scrollY);
    });
  });

  return { distance };
};

export default useJumpToTop;
