import { Modal } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useGetSystemConfigQuery } from "../../services/features/system/systemApi";
import { useAppSelector } from "../../services/hook";
import Auth from "../Auth";
import MenuItems from "./MenuItems";

export default function Header({ topBarEnable, bgColor = "white" }) {
  const {
    auth: { user },
    system: { logo },
    chat: { unreadMessages, orderUnreadMessages },
  } = useAppSelector((state) => state);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useGetSystemConfigQuery();

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
        {topBarEnable && data?.data?.homeSettings?.offerText && (
          <div className="topBar-area bg-[#031401] text-white py-2 font-medium relative z-50">
            <div className="container text-center  text-brand__font__size__xs md:text-brand__font__size__sm">
              {data?.data?.homeSettings?.offerText}
            </div>
          </div>
        )}

        <div
          style={{ backgroundColor: bgColor }}
          className={`duration-200 w-full shadow-sm ${
            isVisible ? "fixed top-0 animate-headerDrop h-[90px]" : "h-[90px]"
          }`}
        >
          <div className="container h-full">
            <nav className="flex items-center justify-between h-full relative">
              <div className="flex justify-between flex-1 h-full items-center z-50">
                <div className="max-w-[200px] md:max-w-[350px] lg:max-w-[450px]">
                  {isVisible ? (
                    <HashLink to="/#">
                      <img src={logo} alt="church_logo" />
                    </HashLink>
                  ) : (
                    <HashLink to="/#">
                      <img src={logo} alt="church_logo" />
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
                style={{ backgroundColor: bgColor }}
                className={`absolute left-0 right-0 lg:relative lg:top-0 lg:left-0 lg:right-0 lg:block  duration-700 ease-in-out lg:px-2 shadow-2xl lg:shadow-none ${
                  menuOpen
                    ? "top-[90px] animate-navMenuOpInOut"
                    : "-top-[400px]"
                }`}
              >
                <ul className="flex flex-col lg:flex-row justify-end lg:items-center gap-x-6 text-brand__black__color font-brand__font__600 text-brand__font__size__sm md:text-brand__font__size__base">
                  <MenuItems
                    onModalOpen={handleModalOpen}
                    user={user}
                    unreadMessages={unreadMessages}
                    orderUnreadMessages={orderUnreadMessages}
                  />
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
