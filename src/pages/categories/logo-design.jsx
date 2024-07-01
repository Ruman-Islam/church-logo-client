import StarIcon from "@mui/icons-material/Star";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { FaBoxOpen, FaRegCreditCard, FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineMotionPhotosAuto } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import { categoryNavButtons } from "../../constants/category";
import { getImgUrl } from "../../utils/getImgUrl-utility";

export default function CategoryLogoDesignScreen() {
  const { pathname } = useLocation();

  return (
    <Layout title="Categories">
      <section id="logo-design" className="bg-white">
        <div className="bg-page_bg h-[150px] lg:h-[200px] xl:h-[300px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white text-center leading-tight py-2">
          <h3 className="text-brand__font__size__lg md:text-[32px] lg:text-[37px]">
            The Signature Collection
          </h3>
          <h4 className=" md:text-[20px] mt-1">
            A handcrafted, uniquely tailored signature logo to suit your unique
            personality.
          </h4>
        </div>

        <div className="container px-2 py-5 text-brand__black__color">
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
          <div className="p-5 mt-4">
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
                        <span className="border py-0.5 px-2 rounded">
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
                    <ul className="text-brand__font__size__xs leading-loose">
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Logo</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Business card</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Letterhead & Envelope</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
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
                  className="max-w-[550px] w-full h-[350px] object-cover p-5"
                  src="https://99designs-start-static.imgix.net/categories-page/parent-categories/logo-04.png?auto=format&ch=Width%2CDPR&q=50&h=660"
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

          <div className="flex flex-col xl:flex-row justify-center items-center gap-5">
            <div className="basis-full xl:basis-[60%] p-5">
              <div>
                <h2 className="text-[24px] md:text-[32px]">
                  So, why Church Logo for a brand identity design?
                </h2>
                <h3 className="leading-[60px]">
                  We live and breathe design, and folks think that’s pretty rad.
                </h3>
              </div>
              <div className="flex flex-wrap gap-5 py-5">
                <div className="basis-full md:basis-[48%] flex gap-2">
                  <div>
                    <StarIcon fontSize="large" />
                  </div>
                  <div>
                    <h2 className="font-brand__font__600 text-brand__font__size__md">
                      4.8/5 star rating
                    </h2>
                    <p className="mt-2 text-text__gray">
                      That’s our average rating from 37,533 customer reviews.
                      Happy designers make happy clients.
                    </p>
                  </div>
                </div>
                <div className="basis-full md:basis-[48%] flex gap-2">
                  <div>
                    <ThumbUpIcon fontSize="large" />
                  </div>
                  <div>
                    <h2 className="font-brand__font__600 text-brand__font__size__md">
                      100% money-back guarantee for contests
                    </h2>
                    <p className="mt-2 text-text__gray">
                      Great design, guaranteed. Love your final design or get
                      your money back. T&Cs apply
                    </p>
                  </div>
                </div>
                <div className="basis-full md:basis-[48%] flex gap-2">
                  <div>
                    <VerifiedUserIcon fontSize="large" />
                  </div>
                  <div>
                    <h2 className="font-brand__font__600 text-brand__font__size__md">
                      Verified freelance logo designers
                    </h2>
                    <p className="mt-2 text-text__gray">
                      Our logo designers are vetted, creative professionals with
                      verified industry experience who take the time to
                      understand your business.
                    </p>
                  </div>
                </div>
                <div className="basis-full md:basis-[48%] flex gap-2">
                  <div>
                    <SupportAgentIcon fontSize="large" />
                  </div>
                  <div>
                    <h2 className="font-brand__font__600 text-brand__font__size__md">
                      24/7 design support
                    </h2>
                    <p className="mt-2 text-text__gray">
                      Get help when you need it with our support team of real
                      bonafide humans. No question is too small or complex!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-full xl:basis-[40%] flex justify-center items-center">
              <img
                src={getImgUrl("image/hero-banner/churchlogo_slider_02.png")}
                alt="church_logo"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
