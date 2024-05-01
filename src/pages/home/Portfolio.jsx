import Slider from "react-slick";
import Banner1 from "../../assets/image/banner/hero-01-7daaa580.png";

export default function Portfolio() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full border border-red-500 h-[820px] bg-globe bg-no-repeat bg-contain bg-center relative">
      <div className="bg-white absolute w-full h-full bg-opacity-80">
        <div className="slider-container p-20">
          <Slider {...settings} className="p-5">
            <div className="px-[200px]">
              <div className="flex items-center justify-between gap-4">
                <div className="border border-blue-600 basis-[50%] w-full">
                  <img src={Banner1} className="w-full"/>
                </div>
                <div className="border border-red-600 basis-[50%] h-full">
                  <h1>hello 2</h1>
                </div>
              </div>
            </div>
            <div className="px-[200px]">
              <div className="flex items-center justify-between gap-4">
                <div className="border border-blue-600 basis-[50%] w-full">
                  <img src={Banner1} className="w-full"/>
                </div>
                <div className="border border-red-600 basis-[50%] h-full">
                  <h1>bye 2</h1>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
