import { useEffect, useState } from "react";

export default function Header({ topBarEnable }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sticky is displayed after scrolling for 100 pixels
    function toggleVisibility() {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <header>
        <div className={isVisible ? "header-area react-sticky" : "header-area"}>
          {topBarEnable ? (
            <div className="topBar-area bg-primary text-white py-1.5 text-brand__font__size__md font-semibold">
              <div className="container text-center">
                50% off | was $100 – now $49 | Hurry, we’re nearly fully booked
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
}
