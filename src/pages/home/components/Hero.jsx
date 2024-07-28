import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import data from "../../../data/hero.json";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import "../../../styles/hero-slider.css";
import { getImgUrl } from "../../../utils/getImgUrl-utility.js";

export default function Hero() {
  const scrollWithOffset = useScrollWithOffset();

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

  // const now = new Date("2024-07-11T05:44:17.565+00:00");
  // const timeString = now.toTimeString();
  // const dateString = now.toDateString();

  return (
    <section id="home" className="lg:pt-[20px] lg:pb-[40px]">
      <div className="container px-4">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="basis-[30%] w-full flex justify-center items-center">
            <div
              id="hero-slider"
              className="max-w-[450px] xl:max-w-[560px] w-full p-10 lg:p-0"
            >
              <Slider {...settings}>
                {data.map((d) => (
                  <div key={d.id}>
                    <img src={getImgUrl(d.img)} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="flex-1 flex justify-center p-2.5">
            <div className="w-full xl:p-10">
              <h2 className="text-brand__black__color text-[50px] lg:text-[60px] xl:text-[80px] leading-[55px] xl:leading-[80px] lg:leading-[65px] font-brand__font__semibold text-center md:text-left">
                Get Your Own <span className="text-primary">Custom Church</span>
                <br /> Logo
              </h2>
              <br />
              <p className="leading-snug text-[#7a7a7a] lg:max-w-[40rem] w-full font-brand__font__500 text-brand__font__size__sm lg:text-brand__font__size__base text-center md:text-left">
                &ldquo;Church Logo&rdquo; a branding agency provides unique,
                quick, and demonstrative service for a church brand creation. We
                also provide web development, graphics design and other
                services.
              </p>

              <div className="flex flex-wrap gap-2 w-full items-center justify-center md:justify-start my-4">
                {/* {timeString} {dateString} */}
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

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-text__gray">
                <div>
                  <span>Popular: </span>
                </div>
                {data.map((d) => (
                  <HashLink
                    key={d.id}
                    to={d.route}
                    scroll={(el) => scrollWithOffset(el, 135)}
                    className="hover:bg-section__bg_color hover:text-brand__black__color py-0.5 px-3 block rounded-md text-text__gray duration-300 text-brand__font__size__sm border text-center flex-grow"
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
