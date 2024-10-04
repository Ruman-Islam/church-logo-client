import { Skeleton } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import buttons from "../../../data/hero.json";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import "../../../styles/hero-slider.css";

const settings = {
  fade: true,
  infinite: true,
  speed: 2000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  waitForAnimate: true,
  cssEase: "linear",
};

export default function Hero({ data, loading }) {
  const scrollWithOffset = useScrollWithOffset();

  return (
    <section id="home" className="lg:pt-[20px] lg:pb-[40px]">
      <div className="container px-4">
        {loading ? (
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="basis-[30%] w-full flex justify-center items-center">
              <Skeleton
                variant="rectangular"
                className="rounded-md w-full h-[350px]"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full xl:px-10 flex justify-center flex-col gap-4">
                <Skeleton
                  variant="rectangular"
                  className="rounded-md max-w-[800px] w-full h-[50px]"
                />
                <Skeleton
                  variant="rectangular"
                  className="rounded-md max-w-[700px] w-full h-[50px]"
                />

                <Skeleton
                  variant="rectangular"
                  className="rounded-md max-w-[600px] w-full h-[15px]"
                />
                <Skeleton
                  variant="rectangular"
                  className="rounded-md max-w-[500px] w-full h-[15px]"
                />
                <Skeleton
                  variant="rectangular"
                  className="rounded-md max-w-[400px] w-full h-[15px]"
                />

                <div className="flex flex-wrap gap-2 w-full items-center justify-center md:justify-start my-4 text-brand__font__size__sm">
                  <Skeleton
                    variant="rectangular"
                    className="rounded-full max-w-[125px] w-full h-[35px]"
                  />
                  <Skeleton
                    variant="rectangular"
                    className="rounded-full max-w-[125px] w-full h-[35px]"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2 text-text__gray">
                  <Skeleton
                    variant="rectangular"
                    className="rounded-md max-w-[125px] w-full h-[35px]"
                  />
                  {buttons.map((d) => (
                    <Skeleton
                      key={d.id}
                      variant="rectangular"
                      className="rounded-md max-w-[125px] w-full h-[35px]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="basis-[30%] w-full flex justify-center items-center outline-none">
              <div
                id="hero-slider"
                className="max-w-[450px] xl:max-w-[560px] w-full p-10 lg:p-0 outline-none"
              >
                <Slider {...settings}>
                  {data?.bannerImages.map((d) => (
                    <div key={d.uid} className="outline-none">
                      <img
                        src={d.url}
                        alt="church_logo"
                        className="outline-none"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="flex-1 flex justify-center p-2.5">
              <div className="w-full xl:p-10">
                <h2 className="text-brand__black__color text-[40px] lg:text-[60px] xl:text-[80px] leading-[45px] xl:leading-[80px] lg:leading-[65px] font-brand__font__semibold text-center md:text-left">
                  {data?.bannerTitle && (
                    <>
                      {/* First two words */}
                      {data?.bannerTitle.split(" ").slice(0, 3).join(" ")}{" "}
                      {/* Style third to fifth words */}
                      <span className="text-primary">
                        {data?.bannerTitle.split(" ").slice(3, 5).join(" ")}
                      </span>{" "}
                      {/* Remaining words after the fifth */}
                      {data?.bannerTitle.split(" ").slice(5).join(" ")}
                    </>
                  )}
                </h2>
                <br />
                <p className="leading-snug text-[#7a7a7a] lg:max-w-[40rem] w-full font-brand__font__500 text-brand__font__size__sm lg:text-brand__font__size__base text-center md:text-left">
                  {data?.bannerDescription}
                </p>

                <div className="flex flex-wrap gap-2 w-full items-center justify-center md:justify-start my-4 text-brand__font__size__sm">
                  <HashLink
                    to="/categories/logo-design#logo-design"
                    className="px-4 py-1.5 inline-block rounded-full font-semibold bg-primary text-white hover:bg-brand__black__color duration-300"
                  >
                    Get started
                  </HashLink>
                  <HashLink
                    to="/"
                    className="px-4 py-1.5 inline-block rounded-full font-semibold bg-brand__black__color text-white hover:bg-primary duration-300"
                  >
                    Visit our shop
                  </HashLink>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-text__gray">
                  <div>
                    <span>Popular: </span>
                  </div>
                  {buttons.map((d) => (
                    <HashLink
                      key={d.id}
                      to={d.route}
                      scroll={(el) => scrollWithOffset(el, 135)}
                      className={`hover:bg-section__bg_color py-0.5  block rounded-md text-text__gray duration-300 text-brand__font__size__sm border text-center ${
                        d.id !== 4
                          ? "flex-grow px-3"
                          : "flex-grow-0 xl:flex-grow px-8 xl:px-5"
                      }`}
                    >
                      {d.title}
                    </HashLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
