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

  return (
    <>
      <header>
        <div className={isVisible ? "header-area react-sticky" : "header-area"}>
          {topBarEnable ? (
            <div className="topBar-area bg-[#031401] text-white py-2 font-semibold relative z-30">
              <div className="container text-center text-brand__font__size__xs md:text-brand__font__size__base">
                50% off | was $100 – now $49 | Hurry, we’re nearly fully booked
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="menu-part">
            <div className="container">
              <div className="relative">
                <nav className="flex items-center justify-between h-[90px] bg-white">
                  <div className="flex justify-between w-full z-20 bg-white h-full items-center px-2">
                    <div className="logo w-[250px] md:w-[300px] xl:w-[350px]">
                      {isVisible ? (
                        <Link to="/" className="logo-text">
                          <img src={stickyLogo} alt="" />
                        </Link>
                      ) : (
                        <Link to="/" className="logo-text">
                          <img src={normalLogo} alt="" />
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
                    className={`absolute left-0 right-0 lg:relative lg:top-0 lg:left-0 lg:right-0 lg:block w-full bg-white duration-500 ease-in-out ${
                      menuOpen ? "top-[90px]" : "-top-56"
                    }`}
                  >
                    <ul className="flex flex-col lg:flex-row justify-end lg:items-center gap-x-4 text-brand__black__color font-semibold text-brand__font__size__sm xl:text-brand__font__size__base">
                      <MenuItems />
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
