import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import MenuItems from "./MenuItems";

import Modal from "@mui/material/Modal";
import {
  default as normalLogo,
  default as stickyLogo,
} from "../../assets/logo/churchlogo.png";
import Auth from "../Auth";

export default function Header({ topBarEnable }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Sticky is displayed after scrolling for 100 pixels
    function toggleVisibility() {
      if (window.pageYOffset > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <header className="z-[999]">
        {topBarEnable && (
          <div className="topBar-area bg-[#031401] text-white py-2 font-medium relative z-50">
            <div className="container px-0.5 text-center  text-brand__font__size__xs md:text-brand__font__size__sm">
              50% off | was $100 – now $49 | Hurry, we’re nearly fully booked
            </div>
          </div>
        )}

        <div
          className={`bg-white duration-200 w-full ${
            isVisible
              ? "fixed top-0 animate-headerDrop shadow h-[80px]"
              : "h-[90px]"
          }`}
        >
          <div className="container h-full">
            <nav className="flex items-center justify-between h-full relative">
              <div className="flex justify-between flex-1 h-full items-center px-2 z-50 bg-white">
                <div className="logo w-[220px] md:w-[280px] xl:w-[350px]">
                  {isVisible ? (
                    <HashLink to="/#" className="logo-text">
                      <img
                        className="w-[280px]"
                        src={stickyLogo}
                        alt="church logo"
                      />
                    </HashLink>
                  ) : (
                    <HashLink to="/#" className="logo-text">
                      <img src={normalLogo} alt="church logo" />
                    </HashLink>
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
                className={`absolute left-0 right-0 lg:relative lg:top-0 lg:left-0 lg:right-0 lg:block w-full duration-700 ease-in-out lg:px-2 bg-white ${
                  menuOpen
                    ? "top-[80px] animate-navMenuOpInOut"
                    : "-top-[325px]"
                }`}
              >
                <ul className="flex flex-col lg:flex-row justify-end lg:items-center gap-x-4 text-brand__black__color font-semibold text-brand__font__size__sm xl:text-brand__font__size__base">
                  <MenuItems onModalOpen={handleModalOpen} />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <Modal
        sx={{
          backdropFilter: "blur(5px)",
          //other styles here
        }}
        open={isModalOpen}
        onClose={handleModalClose}
      >
        <div>
          <Auth />
        </div>
      </Modal>
    </>
  );
}
