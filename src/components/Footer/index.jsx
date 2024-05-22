import Modal from "@mui/material/Modal";
import { useState } from "react";
import { AiFillInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import footerData from "../../data/footer.json";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import Auth from "../Auth";

export default function Footer() {
  const scrollWithOffset = useScrollWithOffset();
  const year = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <section className="relative bg-brand__black__color py-5 px-2 text-white">
        <div className="container px-2.5 py-5 md:py-10">
          <div className="flex gap-16">
            <div className="hidden md:block basis-[25%]">
              <div className="">
                <p className="lg:text-lg lg:font-semibold">
                  Prepare yourself to be a part of exploration of
                </p>
                <p className="text-4xl font-bold">With the Church Logo</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row flex-1 gap-5">
              <div className="flex-1">
                <p className="text-2xl font-brand__font__500 text-center md:text-left">
                  Navigation
                </p>
                {footerData?.navigation.map((item, index) =>
                  !item?.route.includes("/sign-in") ? (
                    <HashLink
                      key={index}
                      className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0 font-brand__font__light"
                      to={item.route}
                      scroll={(el) => scrollWithOffset(el, 135)}
                    >
                      {item.title}
                    </HashLink>
                  ) : (
                    <button
                      key={index}
                      className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0 font-brand__font__light"
                      onClick={handleModalOpen}
                    >
                      {item?.title}
                    </button>
                  )
                )}
              </div>

              <div className="flex-1">
                <p className="text-2xl font-brand__font__500 text-center md:text-left">
                  Product
                </p>
                {footerData?.product.map((item, index) => (
                  <HashLink
                    key={index}
                    className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0 font-brand__font__light"
                    to={item.route}
                    scroll={(el) => scrollWithOffset(el, 135)}
                  >
                    {item.title}
                  </HashLink>
                ))}
              </div>

              <div className="flex-1">
                <p className="text-2xl font-brand__font__500 text-center md:text-left">
                  Help
                </p>
                {footerData?.help.map((item, index) => (
                  <HashLink
                    key={index}
                    className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0 font-brand__font__light"
                    to={item.route}
                    scroll={(el) => scrollWithOffset(el, 135)}
                  >
                    {item.title}
                  </HashLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-b w-full mx-auto my-5"></div>
        <div className="flex flex-col gap-3 items-center xl:items-start md:flex-row justify-between container px-2.5">
          <p className="flex items-center gap-x-2">
            <AiOutlineCopyrightCircle />
            All rights reserved Churchlogo {year}
          </p>
          <div className="flex items-center gap-5">
            <HashLink to="/" className="hover:text-primary duration-300">
              <FaFacebook size={20} />
            </HashLink>
            <HashLink to="/" className="hover:text-primary duration-300">
              <AiFillInstagram size={23} />
            </HashLink>
            <HashLink to="/" className="hover:text-primary duration-300">
              <FaTiktok size={20} />
            </HashLink>
          </div>
        </div>
      </section>

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
