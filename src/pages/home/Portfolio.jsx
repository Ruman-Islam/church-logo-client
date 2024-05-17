import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import Banner1 from "../../assets/image/banner/hero-01-7daaa580.png";
import data from "../../data/portfolio.json";
import "../../styles/portfolio-slider.css";

export default function Portfolio() {
  const PrevArrow = ({ ...props }) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="w-[250px] md:w-[400px] xl:w-[500px] h-[60px] md:h-[80px] xl:h-[100px] flex items-center justify-center relative -left-[20px] z-[10] bg-primary hover:bg-brand__black__color text-white hover:cursor-pointer duration-200"
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
        className="w-[250px] md:w-[400px] xl:w-[500px] h-[60px] md:h-[80px] xl:h-[100px] flex items-center justify-center relative -right-[20px] z-[10] bg-primary hover:bg-brand__black__color text-white hover:cursor-pointer duration-200"
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
            <div key={d.id} className="">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="basis-[50%] w-full p-5">
                  <img src={Banner1} className="max-w-[95%] w-full mx-auto" />
                </div>
                <div className="flex-1 w-full h-full pl-0 xl:pl-10">
                  <div className="max-w-[100%] xl:max-w-[400px] w-full text-center xl:text-left">
                    <h2 className="text-[32px] max-w-[500px] mx-auto leading-tight text-primary">
                      {d.headLine}
                    </h2>
                    <br />
                    <p className="max-w-[500px] mx-auto font-brand__font__regular">
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
