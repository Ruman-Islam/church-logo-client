import { AiFillInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import footerData from "../../data/footer.json";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import { useAppSelector } from "../../services/hook";
import { getImgUrl } from "../../utils/getImgUrl-utility";

export default function Footer() {
  const {
    auth: { user },
  } = useAppSelector((state) => state);
  const scrollWithOffset = useScrollWithOffset();
  const year = new Date().getFullYear();

  return (
    <>
      <section className="relative bg-brand__black__color py-5 px-4 text-white">
        <div className="container px-4.5 py-5 md:py-10">
          <div className="flex gap-16">
            <div className="hidden md:block basis-[25%]">
              <div>
                <HashLink to="/#home" className="block mb-5">
                  <img
                    src={getImgUrl("logo/churchlogo_color.png")}
                    alt="churchlogo"
                  />
                </HashLink>
                <p className="text-brand__font__size__xs xl:text-brand__font__size__sm lg:font-semibold text-gray-300">
                  Check out all the church branding services at Church Logo.
                  From logo design to all branding work and everything between.
                  Without compromising the quality we are doing some amazing
                  jobs.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row flex-1 gap-5 text-brand__font__size__sm justify-end xl:pl-20">
              <div className="flex-1">
                <p className="text-2xl font-brand__font__500 text-center md:text-left text-gray-300">
                  Navigation
                </p>
                {footerData?.navigation.map((item, index) =>
                  item?.route.includes("/sign-in") ? (
                    user ? (
                      <HashLink
                        key={index}
                        className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0 font-brand__font__light text-text__gray"
                        to="/profile"
                        scroll={(el) => scrollWithOffset(el, 135)}
                      >
                        Profile
                      </HashLink>
                    ) : (
                      <HashLink
                        key={index}
                        className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0 font-brand__font__light text-text__gray"
                        to={item.route}
                        scroll={(el) => scrollWithOffset(el, 135)}
                      >
                        {item.title}
                      </HashLink>
                    )
                  ) : (
                    <HashLink
                      key={index}
                      className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0 font-brand__font__light text-text__gray"
                      to={item.route}
                      scroll={(el) => scrollWithOffset(el, 135)}
                    >
                      {item.title}
                    </HashLink>
                  )
                )}
              </div>

              <div className="flex-1">
                <p className="text-2xl font-brand__font__500 text-center md:text-left text-gray-300">
                  Product
                </p>
                {footerData?.product.map((item, index) => (
                  <HashLink
                    key={index}
                    className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0 font-brand__font__light text-text__gray"
                    to={item.route}
                    scroll={(el) => scrollWithOffset(el, 135)}
                  >
                    {item.title}
                  </HashLink>
                ))}
              </div>

              <div className="flex-1">
                <p className="text-2xl font-brand__font__500 text-center md:text-left text-gray-300">
                  Help
                </p>
                {footerData?.help.map((item, index) => (
                  <HashLink
                    key={index}
                    className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0 font-brand__font__light text-text__gray"
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
        <div className="flex flex-col gap-3 items-center xl:items-start md:flex-row justify-between container px-4.5">
          <div className="flex items-center gap-5 text-gray-300">
            <a
              href="https://www.facebook.com/churchlogo"
              target="_blank"
              className="hover:text-primary duration-300"
              title="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/churchlogo.co"
              target="_blank"
              className="hover:text-primary duration-300"
              title="Instagram"
            >
              <AiFillInstagram size={23} />
            </a>
            <a
              href="https://www.youtube.com/@ChurchLogo"
              target="_blank"
              className="hover:text-primary duration-300"
              title="Youtube"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@churchlogo.co"
              target="_blank"
              className="hover:text-primary duration-300"
              title="Tiktok"
            >
              <FaTiktok size={20} />
            </a>
          </div>
          <div>
            <p className="flex items-center gap-x-2 text-gray-300">
              <AiOutlineCopyrightCircle />
              All rights reserved Church Logo {year}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="text-brand__font__size__sm">by</span>
            <a href="https://zeroplace.co/" target="_blank">
              <img
                className="w-[80px]"
                src={getImgUrl("logo/zeroplace_logo_web.png")}
                alt="church_logo"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
