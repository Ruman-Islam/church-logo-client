import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import data from "../../../data/hero.json";
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

export default function Hero({ systemData }) {
  const scrollWithOffset = useScrollWithOffset();

  return (
    <section id="home" className="lg:pt-[20px] lg:pb-[40px]">
      <div className="container px-4">
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div className="basis-[30%] w-full flex justify-center items-center">
            <div
              id="hero-slider"
              className="max-w-[450px] xl:max-w-[560px] w-full p-10 lg:p-0"
            >
              <Slider {...settings}>
                {systemData?.homeSettings?.bannerImages.map((d) => (
                  <div key={d.uid}>
                    <img src={d.url} alt="church_logo" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="flex-1 flex justify-center p-2.5">
            <div className="w-full xl:p-10">
              <h2 className="text-brand__black__color text-[40px] lg:text-[60px] xl:text-[80px] leading-[45px] xl:leading-[80px] lg:leading-[65px] font-brand__font__semibold text-center md:text-left">
                {systemData?.homeSettings?.bannerTitle && (
                  <>
                    {/* First two words */}
                    {systemData?.homeSettings?.bannerTitle
                      .split(" ")
                      .slice(0, 3)
                      .join(" ")}{" "}
                    {/* Style third to fifth words */}
                    <span className="text-primary">
                      {systemData?.homeSettings?.bannerTitle
                        .split(" ")
                        .slice(3, 5)
                        .join(" ")}
                    </span>{" "}
                    {/* Remaining words after the fifth */}
                    {systemData?.homeSettings?.bannerTitle
                      .split(" ")
                      .slice(5)
                      .join(" ")}
                  </>
                )}
              </h2>
              <br />
              <p className="leading-snug text-[#7a7a7a] lg:max-w-[40rem] w-full font-brand__font__500 text-brand__font__size__sm lg:text-brand__font__size__base text-center md:text-left">
                {systemData?.homeSettings?.bannerDescription}
              </p>

              <div className="flex flex-wrap gap-2 w-full items-center justify-center md:justify-start my-4 text-brand__font__size__sm">
                {/* <input type="file" multiple onChange={handleFileChange} />
                <button
                  className="border rounded-full p-2 hover:bg-primary hover:text-white"
                  onClick={handleUpload}
                >
                  Upload
                </button> */}
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
                {data.map((d) => (
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
      </div>
    </section>
  );
}
