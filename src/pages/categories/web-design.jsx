import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import "../../styles/categories.css";
import { getImgUrl } from "../../utils/getImgUrl-utility";
import CategoryBtn from "./components/CategoryBtn";
import OurClientsLovesUs from "./components/OurClientsLovesUs";
import PackageIcon from "./components/PackageIcon";
import WhyChurchLogo from "./components/WhyChurchLogo";

export default function CategoryWebDesignScreen() {
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
      <section id="web-design" className="bg-white">
        <SectionBanner
          heading="The Signature Collection"
          desc="A handcrafted, uniquely tailored signature logo to suit your unique
            personality."
        />

        <div className="container px-4 py-5 text-brand__black__color">
          <CategoryBtn />
          <div className="p-5 md:mt-4">
            <div className="flex flex-wrap max-w-[1024px] w-full mx-auto">
              <HashLink
                to="/package/web-design/website-builders#website-builders"
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
                        Website builders
                      </h1>
                      <div className="flex items-center gap-4 text-brand__font__size__sm">
                        <span>from US$249.99</span>
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
                        <span>Wordpress</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>Functional website</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>6 pages</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>Responsive design</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>Content upload</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>7 plugins/extensions</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>E-commerce functionality</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>5 products</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>Payment processing</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>Speed optimization</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>Hosting setup</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>Social media icons</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/package/web-design/website-design#website-design"
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
                      Website Design
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$99.99
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    An unique card designed to build connections
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Wordpress</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Functional website</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" /> <span>3 page</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Responsive design</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>4 plugins/extensions 3D</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Hosting setup</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Social media icons</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
              <HashLink
                to="/package/web-design/website-development#website-development"
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
                      Website development
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$349.99
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    An unique card designed to build connections
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Wordpress</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Functional website</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" /> <span>10 pages</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Responsive design</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Content upload</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>10 plugins/extensions 3D</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>E-commerce functionality</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>20 products</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Payment processing</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Opt-in form</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Auto responder integration</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Speed optimization</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Hosting setup</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Social media icons</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
              <div className="basis-[100%] md:basis-[50%] w-full h-full">
                <img
                  className="max-w-[550px] w-full h-[450px] object-cover p-5"
                  src={getImgUrl(
                    "image/package/churchlogo_website_design_2.png"
                  )}
                  alt=""
                />
              </div>
              <HashLink
                to="/package/web-design/website-redesign#website-redesign"
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
                      Website redesign
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$149.99
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    Letterhead and envelopes that send your brand&rsquo;s
                    message
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Functional website</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>10 plugins/extensions</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>E-commerce functionality</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Payment processing</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Speed optimization</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
              <HashLink
                to="/package/web-design/custom-website-development#custom-website-development"
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
                      Custom website development
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$649.99
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    Letterhead and envelopes that send your brand&rsquo;s
                    message
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Functional website</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Responsive design</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>10 plugins/extensions</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>E-commerce functionality</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Payment processing</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Speed optimization</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
              <HashLink
                to="/package/web-design/existing-bug-fix#existing-bug-fix"
                className="block md:border-t md:border-r border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
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
                      Existing bug fix
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$74.99
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    A comprehensive guide of your brand&rsquo;s fonts, colors
                    and style
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/package/web-design/landing-page-design#landing-page-design"
                className="block md:border-t border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
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
                      Landing page design
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$99.99
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    Letterhead and envelopes that send your brand&rsquo;s
                    message
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Functional website</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Responsive design</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>10 plugins/extensions</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>E-commerce functionality</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Payment processing</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Speed optimization</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
              <HashLink
                to="/package/web-design/blog#blog"
                className="block md:border-t md:border-l md:border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack8")}
                onMouseLeave={() => handleMouseLeave("pack8")}
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                <div>
                  <div className="flex gap-2 mb-2">
                    <div className="text-brand__font__size__xl group-hover:text-primary duration-300">
                      <PackageIcon fill={iconColors["pack8"] || "#031401"} />
                    </div>
                    <div>
                      <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                        Blog
                      </h1>
                      <div className="flex items-center gap-4 text-brand__font__size__sm">
                        <span>from US$249.99</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-brand__font__size__sm leading-tight mb-1">
                      A strategically crafted brand
                    </h2>
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Functional website</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Responsive design</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>10 plugins/extensions</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>E-commerce functionality</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Payment processing</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Speed optimization</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
              <HashLink
                to="/package/web-design/full-service#full-service"
                className="block border-t md:border-l md:border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
                onMouseEnter={() => handleMouseEnter("pack9")}
                onMouseLeave={() => handleMouseLeave("pack9")}
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                <div>
                  <div className="flex gap-2 mb-2">
                    <div className="text-brand__font__size__xl group-hover:text-primary duration-300">
                      <PackageIcon fill={iconColors["pack9"] || "#031401"} />
                    </div>
                    <div>
                      <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                        Full-Service website development
                      </h1>
                      <div className="flex items-center gap-4 text-brand__font__size__sm">
                        <span>from US$999.99</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-brand__font__size__sm leading-tight mb-1">
                      A strategically crafted brand
                    </h2>
                  </div>
                  <ul className="text-brand__font__size__xs leading-loose mt-2">
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Functional website</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Responsive design</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>10 plugins/extensions</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>E-commerce functionality</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Payment processing</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <FaCheck className="text-primary" />{" "}
                      <span>Speed optimization</span>
                    </li>
                  </ul>
                </div>
              </HashLink>
            </div>
          </div>
        </div>

        <div className="bg-section__bg_color">
          <WhyChurchLogo imgUrl="image/package/churchlogo_website_design-2.png" />
        </div>

        <OurClientsLovesUs />
      </section>
    </Layout>
  );
}
