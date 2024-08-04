import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import packagesData from "../../data/packages.json";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import "../../styles/categories.css";
import { getImgUrl } from "../../utils/getImgUrl-utility";
import { packagePriceConversion } from "../../utils/packagePriceConversion";
import CategoryBtn from "./components/CategoryBtn";
import OurClientsLovesUs from "./components/OurClientsLovesUs";
import PackageIcon from "./components/PackageIcon";
import WhyChurchLogo from "./components/WhyChurchLogo";

export default function CategoryPersonalSignatureScreen() {
  const scrollWithOffset = useScrollWithOffset();
  const location = useLocation();
  const { pathname } = location;
  const [iconColors, setIconColors] = useState({});
  const category = pathname.split("categories/")[1];
  const filteredPackages = packagesData.filter(
    (item) => item.category === category
  );
  const pg = filteredPackages;

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
      <section id="personal-signature" className="bg-white">
        <SectionBanner
          heading="The Signature Collection"
          desc="A handcrafted, uniquely tailored signature logo to suit your unique
            personality."
        />

        <div className="container px-4 py-5">
          <CategoryBtn />
          <div className="p-5 md:mt-4">
            <div className="flex flex-wrap max-w-[1024px] w-full mx-auto">
              <HashLink
                to={`/package/${pg[0]?.id}#package`}
                className="block border-b px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack1")}
                onMouseLeave={() => handleMouseLeave("pack1")}
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                <div>
                  {pg[0]?.isPopular && (
                    <div className="mb-2 w-fit">
                      <span className="flex items-center justify-center gap-1 text-brand__font__size__xs px-3 py-1 bg-primary rounded-full text-white">
                        <FaStar />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}

                  <div className="flex gap-2 mb-2">
                    <div className="text-brand__font__size__xl group-hover:text-primary duration-300 pt-2">
                      <PackageIcon fill={iconColors["pack1"] || "#031401"} />
                    </div>
                    <div>
                      <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                        {pg[0]?.title}
                      </h1>
                      <div className="flex items-center gap-4 text-brand__font__size__sm">
                        <span>from US${packagePriceConversion(pg[0])}</span>
                        <span className="border border-primary py-0.5 px-4 rounded text-primary">
                          Save {pg[0]?.savings}%+
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-brand__font__size__sm leading-tight mb-1">
                      {pg[0]?.desc}
                    </h2>
                    <ul className="text-brand__font__size__xs leading-loose mt-2">
                      {pg[0]?.featuredItems.map((item) => (
                        <li key={item} className="flex items-center gap-1">
                          <FaCheck className="text-primary" />{" "}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </HashLink>
              <HashLink
                to={`/package/${pg[1]?.id}#package`}
                className="block md:border-l md:border-r border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack2")}
                onMouseLeave={() => handleMouseLeave("pack2")}
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <PackageIcon fill={iconColors["pack2"] || "#031401"} />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      {pg[1]?.title}
                    </h1>
                    <span className="text-brand__font__size__sm">
                      <span>from US${packagePriceConversion(pg[1])}</span>
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    {pg[1]?.desc}
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    {pg[1]?.featuredItems.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <FaCheck className="text-primary" /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </HashLink>
              <HashLink
                to={`/package/${pg[2]?.id}#package`}
                className="block border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack3")}
                onMouseLeave={() => handleMouseLeave("pack3")}
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <PackageIcon fill={iconColors["pack3"] || "#031401"} />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      {pg[2]?.title}
                    </h1>
                    <span className="text-brand__font__size__sm">
                      <span>from US${packagePriceConversion(pg[2])}</span>
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    {pg[2]?.desc}
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    {pg[2]?.featuredItems.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <FaCheck className="text-primary" /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </HashLink>
              <div className="basis-[100%] md:basis-[50%] w-full h-full">
                <img
                  className="max-w-[550px] w-full h-[500px] object-cover p-5"
                  src={getImgUrl(
                    "image/home/portfolio/churchlogo_flyer_design.png"
                  )}
                  alt=""
                />
              </div>
              <HashLink
                to={`/package/${pg[3]?.id}#package`}
                className="block md:border-l md:border-r border-b md:border-b-0 px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack4")}
                onMouseLeave={() => handleMouseLeave("pack4")}
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <PackageIcon fill={iconColors["pack4"] || "#031401"} />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      {pg[3]?.title}
                    </h1>
                    <span className="text-brand__font__size__sm">
                      <span>from US${packagePriceConversion(pg[3])}</span>
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    {pg[3]?.desc}
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    {pg[3]?.featuredItems.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <FaCheck className="text-primary" /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </HashLink>
              <HashLink
                to={`/package/${pg[4]?.id}#package`}
                className="block border-b md:border-b-0 px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack5")}
                onMouseLeave={() => handleMouseLeave("pack5")}
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <PackageIcon fill={iconColors["pack5"] || "#031401"} />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      {pg[4]?.title}
                    </h1>
                    <span className="text-brand__font__size__sm">
                      <span>from US${packagePriceConversion(pg[4])}</span>
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    {pg[4]?.desc}
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    {pg[4]?.featuredItems.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <FaCheck className="text-primary" /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </HashLink>
              <div className="block md:border-t px-5 py-10 basis-[100%] md:basis-[50%]"></div>
              <HashLink
                to={`/package/${pg[5]?.id}#package`}
                className="block md:border-t md:border-r border-b md:border-l px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack6")}
                onMouseLeave={() => handleMouseLeave("pack6")}
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <PackageIcon fill={iconColors["pack6"] || "#031401"} />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      {pg[5]?.title}
                    </h1>
                    <span className="text-brand__font__size__sm">
                      <span>from US${packagePriceConversion(pg[5])}</span>
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    {pg[5]?.desc}
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    {pg[5]?.featuredItems.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <FaCheck className="text-primary" /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </HashLink>
              <HashLink
                to={`/package/${pg[6]?.id}#package`}
                className="block md:border-t md:border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack7")}
                onMouseLeave={() => handleMouseLeave("pack7")}
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <PackageIcon fill={iconColors["pack7"] || "#031401"} />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      {pg[6]?.title}
                    </h1>
                    <span className="text-brand__font__size__sm">
                      <span>from US${packagePriceConversion(pg[6])}</span>
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    {pg[6]?.desc}
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    {pg[6]?.featuredItems.map((item) => (
                      <li key={item} className="flex items-center gap-1">
                        <FaCheck className="text-primary" /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </HashLink>
            </div>
          </div>
        </div>

        <div className="bg-section__bg_color">
          <WhyChurchLogo imgUrl="image/banner/churchlogo_print_use.png" />
        </div>

        <OurClientsLovesUs />
      </section>
    </Layout>
  );
}
