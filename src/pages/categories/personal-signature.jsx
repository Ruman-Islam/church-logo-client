import { FaBoxOpen, FaRegCreditCard, FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineMotionPhotosAuto } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import { categoryNavButtons } from "../../constants/category";

export default function CategoryPersonalSignatureScreen() {
  const { pathname } = useLocation();

  return (
    <Layout title="Categories">
      <section id="personal-signature" className="bg-white">
        <div className="bg-[url(https://photologo.co/wp-content/uploads/2022/08/hero-bg-min-scaled-1.jpg)] md:h-[200px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white text-center leading-tight py-2">
          <h3 className="text-brand__font__size__lg md:text-[37px]">
            The Signature Collection
          </h3>
          <h4 className=" md:text-[20px] mt-1">
            A handcrafted, uniquely tailored signature logo to suit your unique
            personality.
          </h4>
        </div>

        <div className="container px-2 py-5">
          <div className="flex flex-wrap lg:justify-center items-center gap-2">
            {categoryNavButtons.map((d) => (
              <HashLink
                key={d.id}
                to={d.route}
                className={`border text-text__gray hover:text-white hover:bg-primary hover:border-primary duration-300 rounded-full font-brand__font__600 px-4 lg:px-6 py-1 lg:py-1.5 text-brand__font__size__xs lg:text-brand__font__size__sm ${
                  pathname && pathname.includes(d.match)
                    ? "bg-primary border-primary text-white"
                    : "border-text__gray"
                }`}
              >
                {d?.title}
              </HashLink>
            ))}
          </div>
          <div className="p-5 mt-4">
            <div className="flex flex-wrap max-w-[900px] w-full mx-auto">
              <HashLink
                to="/"
                className="block border-r-0 md:border-r border-b px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
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
                className="block border-r-0 md:border-r border-b px-5 py-10 basis-[100%] md:basis-[25%] hover:shadow-lg duration-300 group"
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
              <HashLink
                to="/"
                className="block border-r-0 md:border-r border-b px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="flex gap-2 mb-2">
                    <div className="text-brand__font__size__xl group-hover:text-primary duration-300">
                      <FaBoxOpen />
                    </div>
                    <div>
                      <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                        Logo & brand guide
                      </h1>
                      <div className="flex items-center gap-4 text-brand__font__size__sm">
                        <span>from US$429</span>
                        <span className="border py-0.5 px-2 rounded">
                          Save 70%+
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-brand__font__size__sm leading-tight mb-1">
                      Extend your logo design into a real brand with matching
                      fonts, colors and style
                    </h2>
                    <ul className="text-brand__font__size__xs leading-loose">
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Logo</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Brand guide document</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-b px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="flex gap-2 mb-2">
                    <div className="text-brand__font__size__xl group-hover:text-primary duration-300">
                      <FaBoxOpen />
                    </div>
                    <div>
                      <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                        Logo & business card
                      </h1>
                      <div className="flex items-center gap-4 text-brand__font__size__sm">
                        <span>from US$449</span>
                        <span className="border py-0.5 px-2 rounded">
                          Save 49%+
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-brand__font__size__sm leading-tight mb-1">
                      A logo and business card design that pair perfectly
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
                    </ul>
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-b px-5 py-10 basis-[100%] md:basis-[50%] mb-4 hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="flex gap-2 mb-2">
                    <div className="text-brand__font__size__xl group-hover:text-primary duration-300">
                      <FaBoxOpen />
                    </div>
                    <div>
                      <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                        Logo & website
                      </h1>
                      <div className="flex items-center gap-4 text-brand__font__size__sm">
                        <span>from US$1,399</span>
                        <span className="border py-0.5 px-2 rounded">
                          Save up to 300%+
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-brand__font__size__sm leading-tight mb-1">
                      A custom logo and Square space website that matches your
                      brand
                    </h2>
                    <ul className="text-brand__font__size__xs leading-loose">
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Logo</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>
                          Fully functioning, custom-design Square space website
                        </span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Content uploaded for you</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </HashLink>
              <div className="basis-[100%] md:basis-[50%] py-10 w-full h-full relative">
                <img
                  className="relative lg:absolute px-5 py-0 lg:py-10 w-full"
                  src="https://99designs-start-static.imgix.net/categories-page/parent-categories/logo-04.png?auto=format&ch=Width%2CDPR&q=50&h=660"
                  alt=""
                />
              </div>
              <HashLink
                to="/"
                className="block border- border-b px-5 py-10 basis-[100%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="flex gap-2 mb-2">
                    <div className="text-brand__font__size__xl group-hover:text-primary duration-300">
                      <FaBoxOpen />
                    </div>
                    <div>
                      <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                        Logo & social media pack
                      </h1>
                      <div className="flex items-center gap-4 text-brand__font__size__sm">
                        <span>from US$399</span>
                        <span className="border py-0.5 px-2 rounded">
                          Save up to 137%+
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-brand__font__size__sm leading-tight mb-1">
                      Logo and social media cover images to make an impression
                      online
                    </h2>
                    <ul className="text-brand__font__size__xs leading-loose">
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Logo</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Facebook cover</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>Twitter header</span>
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCheck className="text-brand__black__color" />{" "}
                        <span>YouTube background</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-r-0 md:border-r border-b px-5 py-10 basis-[100%] md:basis-[50%] lg:basis-[25%] hover:shadow-lg duration-300 group"
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
                className="block border-r-0 lg:border-r border-b px-5 py-10 basis-[100%] md:basis-[50%] lg:basis-[25%] hover:shadow-lg duration-300 group"
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
                className="block border- border-b px-5 py-10 basis-[100%] lg:basis-[50%] hover:shadow-lg duration-300 group"
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
      </section>
    </Layout>
  );
}
