import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import data from "../../data/portfolio.json";
import "../../styles/portfolio-slider.css";
import { getImgUrl } from "../../utils/getImgUrl-utility";

export default function Portfolio() {
  const PrevArrow = ({ ...props }) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="w-[250px] md:w-[400px] xl:w-[500px] h-[60px] md:h-[80px] xl:h-[100px] flex items-center justify-center relative -left-[20px] z-[10] bg-primary hover:bg-[#14a800be] text-white hover:cursor-pointer duration-200 active:bg-brand__black__color"
      >
        <FaArrowLeft size={30} />
      </div>
    );
  };

  const NextArrow = ({ ...props }) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="w-[250px] md:w-[400px] xl:w-[500px] h-[60px] md:h-[80px] xl:h-[100px] flex items-center justify-center relative -right-[20px] z-[10] bg-primary hover:bg-[#14a800be] text-white hover:cursor-pointer duration-200 active:bg-brand__black__color"
      >
        <FaArrowRight size={30} />
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
  };

  return (
    <div className="w-full bg-globe bg-no-repeat bg-[length:1000px_700px] bg-right relative">
      {/* <div className="bg-white absolute w-full h-full"></div> */}
      <div id="portfolio-slider" className="py-5 xl:py-0">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.id}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 container">
                <div className="basis-[50%] w-full p-5">
                  <img
                    src={getImgUrl(d.img)}
                    className="max-w-[95%] w-full mx-auto"
                  />
                </div>
                <div className="flex-1 w-full h-full">
                  <div className="w-full text-center md:text-left gap-5">
                    <h2 className="text-[22px] lg:text-[32px] leading-[25px] lg:leading-[40px] text-primary font-brand__font__600 mb-4">
                      {d.headLine}
                    </h2>

                    <p className="text-brand__black__color leading-[23px]">
                      {d.feedBack}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
