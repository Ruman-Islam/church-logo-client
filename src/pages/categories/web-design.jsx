import { MdOutlineMotionPhotosAuto } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import { categoryNavButtons } from "../../constants/category";

export default function CategoryWebDesignScreen() {
  const { pathname } = useLocation();

  return (
    <Layout title="Categories">
      <section id="web-design" className="bg-white">
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
                          Website Builders
                        </h1>
                        <span className="text-brand__font__size__sm">
                          from US$549
                        </span>
                      </div>
                      <div className="text-brand__font__size__sm leading-tight">
                        Easily bring your website to life, so you can stay
                        focused on running your business
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
                          Web page design
                        </h1>
                        <span className="text-brand__font__size__sm">
                          from US$599
                        </span>
                      </div>
                      <div className="text-brand__font__size__sm leading-tight">
                        Engaging custom web design that connects with visitors
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
                          Website Redesign
                        </h1>
                        <span className="text-brand__font__size__sm">
                          from US$549
                        </span>
                      </div>
                      <div className="text-brand__font__size__sm leading-tight">
                        A refreshed website to better showcase your business
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
                          Blog
                        </h1>
                        <span className="text-brand__font__size__sm">
                          from US$549
                        </span>
                      </div>
                      <div className="text-brand__font__size__sm leading-tight">
                        Custom blog design to keep them reading
                      </div>
                    </div>
                  </HashLink>
                </div>
                <div className="basis-[100%] md:basis-[50%]">
                  <img
                    className="px-5 py-10 w-full"
                    src="https://99designs-start-static.imgix.net/categories-page/parent-categories/web-05.png?auto=format&ch=Width%2CDPR&q=50&h=660"
                    alt=""
                  />
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
                      WordPress theme design
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$599
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    As custom WordPress theme that does everything you need it
                    to
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
                      Landing page design
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$349
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    Landing page that gets clicks
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
                      App Icon
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$199
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    A stunning app icon guaranteed to get you downloads
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
                      Website Icon
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$199
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    A website icon that users will recognize
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
                      Form
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$349
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    Forms customized to collect the data you need
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
                      App design
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$599
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    A user-friendly app that gets downloads
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
                      iOS App
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$599
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    An iOS app design that&rsquo;ll be the apple of your eye
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
                      Android App
                    </h1>
                    <span className="text-brand__font__size__sm">
                      from US$599
                    </span>
                  </div>
                  <div className="text-brand__font__size__sm leading-tight">
                    An app that looks great on any android device
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
