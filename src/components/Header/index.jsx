import { Modal } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import {
  default as normalLogo,
  default as stickyLogo,
} from "../../assets/logo/churchlogo.png";
import { useAppSelector } from "../../services/hook";
import Auth from "../Auth";
import MenuItems from "./MenuItems";

export default function Header({ topBarEnable, bgColor = "bg-white" }) {
  const {
    auth: { user },
  } = useAppSelector((state) => state);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    setModal();
  }, [user, setModal]);

  useEffect(() => {
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
            <div className="container text-center  text-brand__font__size__xs md:text-brand__font__size__sm">
              50% off | was $100 – now $49 | Hurry, we’re nearly fully booked
            </div>
          </div>
        )}

        <div
          className={`${bgColor} duration-200 w-full ${
            isVisible
              ? "fixed top-0 animate-headerDrop shadow h-[90px]"
              : "h-[90px]"
          }`}
        >
          <div className="container h-full">
            <nav className="flex items-center justify-between h-full relative">
              <div className="flex justify-between flex-1 h-full items-center z-50">
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
                className={`${bgColor} absolute left-0 right-0 lg:relative lg:top-0 lg:left-0 lg:right-0 lg:block w-full duration-700 ease-in-out lg:px-2 shadow-2xl lg:shadow-none ${
                  menuOpen
                    ? "top-[90px] animate-navMenuOpInOut"
                    : "-top-[400px]"
                }`}
              >
                <ul className="flex flex-col lg:flex-row justify-end lg:items-center gap-x-6 text-brand__black__color font-brand__font__600 text-brand__font__size__sm md:text-brand__font__size__base">
                  <MenuItems onModalOpen={handleModalOpen} user={user} />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <Modal
        sx={{
          backdropFilter: "blur(5px)",
        }}
        open={isModalOpen}
        onClose={handleModalClose}
      >
        <>
          <Auth />
        </>
      </Modal>
    </>
  );
}
