import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "../../../styles/portfolio-slider.css";

export default function Portfolio({ data, loading }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const { portfolios = [] } = data || {};

  const activeColor = portfolios[activeSlide]?.color || "#0bb7fd";

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="h-[60px] md:h-[80px] xl:h-[100px] flex items-center justify-center relative -left-[20px] z-[10] hover:bg-[#14a800be] text-white hover:cursor-pointer active:bg-brand__black__color px-1 md:px-2 lg:px-5 xl:px-10 rounded-tr rounded-br duration-500"
        style={{
          backgroundColor: activeColor,
        }}
      >
        <FaArrowLeft className="text-[20px] xl:text-[30px]" />
      </div>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="h-[60px] md:h-[80px] xl:h-[100px] flex items-center justify-center relative -right-[20px] z-[10] hover:bg-[#14a800be] text-white hover:cursor-pointer duration-200 active:bg-brand__black__color px-1 md:px-2 lg:px-5 xl:px-10 rounded-tl rounded-bl"
        style={{
          backgroundColor: activeColor,
        }}
      >
        <FaArrowRight className="text-[20px] xl:text-[30px]" />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  return (
    <div className="w-full bg-globe bg-no-repeat bg-[length:600px_200px] sm:bg-[length:700px_400px] md:bg-[length:800px_350px] lg:bg-[length:900px_400px] xl:bg-[length:900px_450px] 2xl:bg-[length:1500px_520px] bg-right relative">
      {loading ? (
        null
      ) : (
        <div id="portfolio-slider" className="py-5 md:py-16 lg:py-24">
          <Slider {...settings}>
            {portfolios.map((d, idx) => (
              <div key={idx}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 container">
                  <div className="flex-1 w-full">
                    <div className="w-full">
                      <img
                        src={d.thumbnail[0]?.url}
                        className="w-full h-full mx-auto"
                      />
                    </div>
                  </div>
                  <div className="flex-1 w-full h-full">
                    <div className="w-full text-center md:text-left gap-5">
                      <h2
                        className="text-[22px] lg:text-[32px] leading-[25px] lg:leading-[40px] font-brand__font__600 mb-4 slide-heading"
                        style={{
                          color: d?.color,
                          transition: "color 0.5s ease",
                        }}
                      >
                        {d?.title}
                      </h2>

                      <p className="text-brand__black__color leading-[23px]">
                        {d?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
