import Slider from "react-slick";
import Banner1 from "../../assets/image/banner/hero-01-7daaa580.png";

export default function Portfolio() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    waitForAnimate: true,
    cssEase: "linear",
  };

  return (
    <div className="border border-red-500 w-full h-[800px] bg-globe bg-no-repeat bg-contain bg-center bg-origin-content relative">
      <div className="bg-white absolute w-full h-full bg-opacity-80">
        <div className="slider-container p-20">
          <Slider {...settings}>
            <div className="border border-green-500 flex">
             <h1>hello 1</h1>
             <h1>hello 2</h1>
            </div>
            <div className="border border-blue-500">
             <h1>bye 1</h1>
             <h1>bye 2</h1>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
