import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import "../../styles/categories.css";
import CategoryBtn from "./components/CategoryBtn";
import OurClientsLovesUs from "./components/OurClientsLovesUs";
import PackageIcon from "./components/PackageIcon";
import WhyChurchLogo from "./components/WhyChurchLogo";

export default function CategoryPersonalSignatureScreen() {
  const scrollWithOffset = useScrollWithOffset();
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
                to="/package/personal-signature/signature-logo-design-source-pack#signature-logo-design-source-pack"
                className="block border-b px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack1")}
                onMouseLeave={() => handleMouseLeave("pack1")}
                scroll={(el) => scrollWithOffset(el, 135)}
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
                        Signature logo design & source pack
                      </h1>
                      <div className="flex items-center gap-4 text-brand__font__size__sm">
                        <span>from US$74.99</span>
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
                        <FaCheck className="text-primary" />{" "}
                        <span>Logo transparency</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>Source file</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>Vector file</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/package/personal-signature/signature-logo-design#signature-logo-design"
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
                      Signature logo design
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$24.99
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    An unforgettable logo crafted for your brand
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Logo transparency</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
              <HashLink
                to="/package/personal-signature/full-service-signature-logo-design#full-service-signature-logo-design"
                className="block md:border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
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
                      Full-Service Signature Logo design pack
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$149.99
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    An unique card designed to build connections
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Logo transparency</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Source file</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Vector file</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>3D mockup</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Social media kit</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
            </div>
          </div>
        </div>

        <div className="bg-section__bg_color">
          <WhyChurchLogo imgUrl="image/banner/churchlogo_signature.png"/>
        </div>

        <OurClientsLovesUs />
      </section>
    </Layout>
  );
}
