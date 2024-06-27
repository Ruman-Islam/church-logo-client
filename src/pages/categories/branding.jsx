import { MdOutlineMotionPhotosAuto } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import { categoryNavButtons } from "../../constants/category";

export default function CategoryBrandingScreen() {
  const { pathname } = useLocation();

  return (
    <Layout title="Categories">
      <section id="branding" className="bg-white">
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
                className={`border text-text__gray hover:text-white hover:bg-primary hover:border-primary duration-200 rounded-full font-brand__font__600 px-4 lg:px-6 py-1 lg:py-1.5 text-brand__font__size__xs lg:text-brand__font__size__sm ${
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
              <div className="flex flex-wrap">
                <div className="basis-[100%] md:basis-[50%]">
                  <img
                    className="px-5 py-10 w-full"
                    src="https://99designs-start-static.imgix.net/categories-page/parent-categories/business-01.png?auto=format&ch=Width%2CDPR&q=50&h=660"
                    alt=""
                  />
                </div>
                <div className="basis-[100%] md:basis-[50%] w-full flex flex-wrap">
                  <HashLink
                    to="/"
                    className="block border-r-0 md:border-r border-b px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
                  >
                    <div>
                      <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                        <MdOutlineMotionPhotosAuto />
                      </div>
                      <div className="mb-1">
                        <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                          Postcard, flyer or print
                        </h1>
                        <span className="text-brand__font__size__sm">
                          from US$169
                        </span>
                      </div>
                      <div className="text-brand__font__size__sm leading-tight">
                        fliers and postcards that reach clients
                      </div>
                    </div>
                  </HashLink>
                  <HashLink
                    to="/"
                    className="block border-b px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
                  >
                    <div>
                      <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                        <MdOutlineMotionPhotosAuto />
                      </div>
                      <div className="mb-1">
                        <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                          Leaflet
                        </h1>
                        <span className="text-brand__font__size__sm">
                          from US$299
                        </span>
                      </div>
                      <div className="text-brand__font__size__sm leading-tight">
                        Leaflet designs that illustrate your story
                      </div>
                    </div>
                  </HashLink>
                  <HashLink
                    to="/"
                    className="block border-r-0 md:border-r border-b md:border-b-0 px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
                  >
                    <div>
                      <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                        <MdOutlineMotionPhotosAuto />
                      </div>
                      <div className="mb-1">
                        <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                          Direct Mail
                        </h1>
                        <span className="text-brand__font__size__sm">
                          from US$299
                        </span>
                      </div>
                      <div className="text-brand__font__size__sm leading-tight">
                        Direct mail design that speaks to recipients
                      </div>
                    </div>
                  </HashLink>
                  <HashLink
                    to="/"
                    className="block border-b md:border-b-0 px-5 py-10 basis-[100%] md:basis-[50%] hover:shadow-lg duration-300 group"
                  >
                    <div>
                      <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                        <MdOutlineMotionPhotosAuto />
                      </div>
                      <div className="mb-1">
                        <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                          Flyer
                        </h1>
                        <span className="text-brand__font__size__sm">
                          from US$299
                        </span>
                      </div>
                      <div className="text-brand__font__size__sm leading-tight">
                        Custom flyer designs that make information beautiful
                      </div>
                    </div>
                  </HashLink>
                </div>
              </div>
              <HashLink
                to="/"
                className="block border-t border-r-0 md:border-r border-b-0 lg:border-b px-5 py-10 basis-[100%] md:basis-[50%] lg:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Poster
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$299
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    A popping poster that entices viewers
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-t border-r-0 lg:border-r border-b-0 lg:border-b px-5 py-10 basis-[100%] md:basis-[50%] lg:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Album Cover
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$299
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    An album cover that rocks
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-t border-r-0 md:border-r border-b-0 md:border-b px-5 py-10 basis-[100%] md:basis-[50%] lg:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Podcast
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$299
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    Custom podcast art that gets the word out
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-t border-b px-5 py-10 basis-[100%] md:basis-[50%] lg:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Infographic
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$299
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    An engaging infographic that both shows and tells
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-r-0 md:border-r border-b lg:border-b px-5 py-10 basis-[100%] md:basis-[50%] lg:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Brochure
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$299
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    The printable, foldable way to engage with clients
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-r-0 lg:border-r border-b lg:border-b px-5 py-10 basis-[100%] md:basis-[50%] lg:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Booklet
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$299
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    A booklet that tells your brand&rsquo;s story
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-r-0 md:border-r border-b md:border-b px-5 py-10 basis-[100%] md:basis-[50%] lg:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Pamphlet
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$299
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    A pamphlet that delivers all the info you need
                  </div>
                </div>
              </HashLink>
              <HashLink
                to="/"
                className="block border-b px-5 py-10 basis-[100%] md:basis-[50%] lg:basis-[25%] hover:shadow-lg duration-300 group"
              >
                <div>
                  <div className="text-brand__font__size__xl mb-1 group-hover:text-primary duration-300">
                    <MdOutlineMotionPhotosAuto />
                  </div>
                  <div className="mb-1">
                    <h1 className="text-brand__font__size__md group-hover:text-primary duration-300">
                      Car, truck or van wrap
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$299
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    A vehicle wrap to take advertising on the road
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
