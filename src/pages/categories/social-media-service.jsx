import { FaBoxOpen, FaRegCreditCard, FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineMotionPhotosAuto } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import "../../styles/categories.css";
import { getImgUrl } from "../../utils/getImgUrl-utility";
import CategoryBtn from "./components/CategoryBtn";
import OurClientsLovesUs from "./components/OurClientsLovesUs";
import WhyChurchLogo from "./components/WhyChurchLogo";

export default function CategorySocialMediaServiceScreen() {
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
                to="/"
                className="block border-b px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="mb-2 w-fit">
                    <span className="flex items-center justify-center gap-1 text-brand__font__size__xs px-3 py-1 bg-primary rounded-full text-white">
                      <FaStar />
                      <span>Most Popular</span>
                    </span>
                  </div>

                  <div className="flex gap-2 mb-2">
                    <div className="text-brand__font__size__xl group-hover:text-primary duration-300">
                      <FaBoxOpen />
                    </div>
                    <div>
                      <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                        Logo & brand identity pack
                      </h1>
                      <div className="flex items-center gap-4 text-brand__font__size__sm">
                        <span>from US$599</span>
                        <span className="border border-primary py-0.5 px-4 rounded text-primary">
                          Save 39%+
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
                        <FaCheck className="text-primary" /> <span>Logo</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>Business card</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>Letterhead & Envelope</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-primary" />{" "}
                        <span>Facebook cover</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block md:border-l md:border-r border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Logo design
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$299
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    An unforgettable logo crafted for your brand
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <FaRegCreditCard />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Business card
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$169
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    An unique card designed to build connections
                  </div>
                </div>
              </HashLink>
              <div className="basis-[100%] md:basis-[50%] w-full h-full">
                <img
                  className="max-w-[550px] w-full h-[500px] object-cover p-5"
                  src={getImgUrl(
                    "image/package/churchlogo_video_contact.png"
                  )}
                  alt=""
                />
              </div>
              <HashLink
                to="/"
                className="block md:border-l md:border-r border-b md:border-b-0 px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Stationery
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$199
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    Letterhead and envelopes that send your brand&rsquo;s
                    message
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-b md:border-b-0 px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Stationery
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$199
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    Letterhead and envelopes that send your brand&rsquo;s
                    message
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block md:border-t md:border-r border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Brand guide
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$299
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    A comprehensive guide of your brand&rsquo;s fonts, colors
                    and style
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block md:border-t border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Stationery
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$199
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    Letterhead and envelopes that send your brand&rsquo;s
                    message
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block md:border-t md:border-l md:border-b px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="flex gap-2 mb-2">
                    <div className="text-brand__font__size__xl group-hover:text-primary duration-300">
                      <FaBoxOpen />
                    </div>
                    <div>
                      <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                        Full-Service Brand Pack
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
                </div>
              </HashLink>
            </div>
          </div>
        </div>

        <div className="bg-section__bg_color">
          <WhyChurchLogo imgUrl="image/package/churchlogo_video_contact_2.png"/>
        </div>

        <OurClientsLovesUs />
      </section>
    </Layout>
  );
}
