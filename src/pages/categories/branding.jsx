import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import { categoryNavButtons } from "../../constants/category";
import "../../styles/categories.css";
import { getImgUrl } from "../../utils/getImgUrl-utility";
import OurClientsLovesUs from "./components/OurClientsLovesUs";
import PackageIcon from "./components/PackageIcon";
import WhyChurchLogo from "./components/WhyChurchLogo";

export default function CategoryBrandingScreen() {
  const { pathname } = useLocation();
  const [iconColors, setIconColors] = useState({});

  const handleMouseEnter = (id) => {
    setIconColors((prevColors) => ({
      ...prevColors,
      [id]: "#13a800",
    }));
  };

  const handleMouseLeave = (id) => {
    setIconColors((prevColors) => ({
      ...prevColors,
      [id]: "#031401",
    }));
  };

  return (
    <Layout title="Categories">
      <section id="branding" className="bg-white">
        <div className="bg-page_bg h-[150px] lg:h-[200px] xl:h-[300px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white text-center leading-tight py-2">
          <h3 className="text-brand__font__size__lg md:text-[37px]">
            The Signature Collection
          </h3>
          <h4 className=" md:text-[20px] mt-1">
            A handcrafted, uniquely tailored signature logo to suit your unique
            personality.
          </h4>
        </div>

        <div className="container px-4 py-5">
          <div className="flex flex-wrap xl:justify-center items-center gap-3 py-5">
            {categoryNavButtons.map((d) => (
              <HashLink
                key={d.id}
                to={d.route}
                className={`border hover:text-white hover:bg-brand__black__color hover:border-brand__black__color duration-300 rounded-md font-brand__font__600 px-4 lg:px-8 py-2 lg:py-3 text-brand__font__size__sm lg:text-[19px] ${
                  pathname && pathname.includes(d.match)
                    ? "bg-brand__black__color border-brand__black__color text-white"
                    : "border-text__gray text-text__gray"
                }`}
              >
                {d?.title}
              </HashLink>
            ))}
          </div>
          <div className="p-5 md:mt-4">
            <div className="flex flex-wrap max-w-[1024px] w-full mx-auto">
              <HashLink
                to="/logo-design/logo-design-pack"
                className="block border-b px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack1")}
                onMouseLeave={() => handleMouseLeave("pack1")}
              >
                <div>
                  <div className="mb-2 w-fit">
                    <span className="flex items-center justify-center gap-1 text-brand__font__size__xs px-3 py-1 bg-primary rounded-full text-white">
                      <FaStar />
                      <span>Most Popular</span>
                    </span>
                  </div>

                  <div className="flex gap-2 mb-2">
                    <div className="text-brand__font__size__xl group-hover:text-primary duration-300 pt-2">
                      <PackageIcon fill={iconColors["pack1"] || "#031401"} />
                    </div>
                    <div>
                      <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                        Logo & brand design pack
                      </h1>
                      <div className="flex items-center gap-4 text-brand__font__size__sm">
                        <span>from US$00</span>
                        <span className="border border-primary py-0.5 px-4 rounded text-primary">
                          Save 40%+
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-brand__font__size__sm leading-tight mb-1">
                      A logo plus digital and print essentials to kick-start
                      your brand
                    </h2>
                    <ul className="text-brand__font__size__xs leading-loose mt-2">
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Includes logo design</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Includes all logo file </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Typography guidelines</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block md:border-l md:border-r border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack2")}
                onMouseLeave={() => handleMouseLeave("pack2")}
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <PackageIcon fill={iconColors["pack2"] || "#031401"} />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Logo & brand guide design pack
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$374.99
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    An unforgettable logo crafted for your brand
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Includes logo design</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Includes all logo file </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Typography guidelines</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Color palette</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack3")}
                onMouseLeave={() => handleMouseLeave("pack3")}
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <PackageIcon fill={iconColors["pack3"] || "#031401"} />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Logo & brand identity pack
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$00
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    An unique card designed to build connections
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Includes logo design</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Includes all logo file </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Typography guidelines</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Color palette</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Do`&apos;`s and don`&apos;`ts</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
              <div className="basis-[100%] md:basis-[50%] w-full h-full">
                <img
                  className="max-w-[550px] w-full h-[500px] object-cover p-5"
                  src={getImgUrl(
                    "image/home/portfolio/churchlogo_branding.png"
                  )}
                  alt=""
                />
              </div>
              <HashLink
                to="/"
                className="block md:border-l md:border-r border-b md:border-b-0 px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack4")}
                onMouseLeave={() => handleMouseLeave("pack4")}
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <PackageIcon fill={iconColors["pack4"] || "#031401"} />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Brand identity & stationery design pack
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$534.99
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    Letterhead and envelopes that send your brand&rsquo;s
                    message
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Includes logo design</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Includes all logo file</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Logo usage guidelines</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Typography guidelines</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Color palette</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Do`&apos;`s and don`&apos;`ts</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Stationery design</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-b md:border-b-0 px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack5")}
                onMouseLeave={() => handleMouseLeave("pack5")}
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <PackageIcon fill={iconColors["pack5"] || "#031401"} />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Brand identity & website design pack
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$824.99
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    Letterhead and envelopes that send your brand&rsquo;s
                    message
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Includes logo design</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Includes all logo file </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Logo usage guidelines</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Website design</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Brand book design</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
              <div className="block md:border-t px-5 py-10 basis-[100%] md:basis-[50%]"></div>
              <HashLink
                to="/"
                className="block md:border-t md:border-l md:border-b px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack6")}
                onMouseLeave={() => handleMouseLeave("pack6")}
              >
                <div>
                  <div className="flex gap-2 mb-2">
                    <div className="text-brand__font__size__xl group-hover:text-primary duration-300">
                      <PackageIcon fill={iconColors["pack6"] || "#031401"} />
                    </div>
                    <div>
                      <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                        Full-Service logo design package
                      </h1>
                      <div className="flex items-center gap-4 text-brand__font__size__sm">
                        <span>from US$3,999</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-brand__font__size__sm leading-tight mb-1">
                      A strategically crafted brand identity guided by your
                      personal Creative Director from Church Logo Studio
                    </h2>
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>All source file</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>All printable file</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Stationary design</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>Social media kit</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-brand__black__color" />{" "}
                      <span>3D mockup</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
            </div>
          </div>
        </div>

        <div className="bg-section__bg_color">
          <WhyChurchLogo />
        </div>

        <OurClientsLovesUs />
      </section>
    </Layout>
  );
}
