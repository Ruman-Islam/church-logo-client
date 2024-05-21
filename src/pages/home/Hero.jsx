import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import data from "../../data/hero.json";
import "../../styles/hero-slider.css";
import { getImgUrl } from "../../utils/getImgUrl-utility";

export default function Hero() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    waitForAnimate: true,
    cssEase: "linear",
  };

  return (
    <section id="home" className="md:py-[20px]">
      <div className="container px-2">
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div className="basis-[30%] w-full flex justify-center items-center">
            <div
              id="hero-slider"
              className="max-w-[450px] xl:max-w-[560px] w-full p-10 md:p-0"
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
            <div className="w-full xl:p-10 text-center lg:text-start">
              <h2 className="text-brand__black__color text-[50px] md:text-[60px] xl:text-[80px] leading-[55px] xl:leading-[80px] md:leading-[65px] font-brand__font__semibold">
                Get Your Own <span className="text-primary">Custom Church</span>
                <br /> Logo
              </h2>
              <br />
              <p className="leading-relaxed text-text__gray w-full lg:max-w-[35rem]">
                We can put you in touch with a creative specialist to help your
                business appear and feel professional, no matter what it needs.
                Since excellent design generates excellent revenue.
              </p>

              <div className="flex flex-wrap gap-2 w-full items-center justify-center lg:justify-start my-4 xl:my-6">
                <HashLink
                  to="/"
                  className="px-5 py-2 inline-block rounded-full font-semibold bg-primary text-white hover:bg-brand__black__color duration-300 text-brand__font__size__sm"
                >
                  Get started
                </HashLink>
                <HashLink
                  to="/"
                  className="px-5 py-2 inline-block rounded-full font-semibold bg-brand__black__color text-white hover:bg-primary duration-300 text-brand__font__size__sm"
                >
                  Visit our shop
                </HashLink>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2">
                <div>
                  <span>Popular: </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 text-text__gray">
                  {data.map((d) => (
                    <HashLink key={d.id} to={d.route}>
                      <div className="border hover:bg-section__bg_color py-0.5 px-3 inline-block rounded-md text-brand__black__color duration-300 text-brand__font__size__sm">
                        {d.title}
                      </div>
                    </HashLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
