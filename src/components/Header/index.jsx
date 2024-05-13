import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems.jsx";

import {
  default as normalLogo,
  default as stickyLogo,
} from "../../assets/logo/churchlogo.png";

export default function Header({ topBarEnable }) {
  const [menuOpen, setMenuOpen] = useState(false);
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

  console.log(isVisible);

  return (
    <>
      <header className="z-50">
        {topBarEnable && (
          <div className="topBar-area bg-[#031401] text-white py-2 font-semibold relative z-50">
            <div className="container text-center text-brand__font__size__xs md:text-brand__font__size__base">
              50% off | was $100 – now $49 | Hurry, we’re nearly fully booked
            </div>
          </div>
        )}

        <div
          className={
            isVisible ? "fixed w-full top-0 bg-white shadow" : "bg-white"
          }
        >
          <div className="container">
            <nav className="flex items-center justify-between h-[90px]  relative">
              <div className="flex justify-between flex-1 h-full items-center px-2 z-50 bg-white">
                <div className="logo w-[220px] md:w-[280px] xl:w-[350px]">
                  {isVisible ? (
                    <Link to="/" className="logo-text">
                      <img src={stickyLogo} alt="church logo" />
                    </Link>
                  ) : (
                    <Link to="/" className="logo-text">
                      <img src={normalLogo} alt="church logo" />
                    </Link>
                  )}
                </div>
                <button
                  type="button"
                  className={`${
                    menuOpen ? "mobile-menu-btn open" : "mobile-menu-btn"
                  } block lg:hidden bg-primary p-2 rounded`}
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  <span className="icon-bar block w-[25px] h-[2px] my-[6px] duration-200 bg-white"></span>
                  <span className="icon-bar block w-[16px] h-[2px] my-[6px] ml-auto duration-200 bg-white"></span>
                  <span className="icon-bar block w-[20px] h-[2px] my-[6px] ml-auto duration-200 bg-white"></span>
                </button>
              </div>
              <div
                className={`absolute left-0 right-0 lg:relative lg:top-0 lg:left-0 lg:right-0 lg:block w-full duration-500 ease-in-out lg:px-2 bg-white ${
                  menuOpen ? "top-[90px] animate-fadeInNavbar" : "-top-[270px] "
                }`}
              >
                <ul className="flex flex-col lg:flex-row justify-end lg:items-center gap-x-4 text-brand__black__color font-semibold text-brand__font__size__sm xl:text-brand__font__size__base">
                  <MenuItems />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
