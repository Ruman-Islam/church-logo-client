import CustomLink from "../../components/UI/CustomLink";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../assets/image/banner/hero-01-7daaa580.png";

export default function Hero() {
    const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <div className="container px-2">
      <div className="flex flex-col-reverse lg:flex-row justify-between py-16">
       <div className="flex-1 border border-blue-600 p-2.5">
        <div className="slider-container max-w-[250px]">
      <Slider {...settings}>
        <div>
          <img src={Banner1} />
        </div>
        <div>
          <img src={Banner1} />
        </div>
        <div>
          <img src={Banner1} />
        </div>
        <div>
          <img src={Banner1} />
        </div>
      </Slider>
    </div>
       </div>
        <div className="flex-1 flex justify-center p-2.5">
          <div className="w-full p-10 text-center lg:text-start">
          <h2 className="text-text__navy_blue text-[55px] leading-[60px] font-brand__font__semibold">
            Get Your Own Custom
            <br />Church Logo
          </h2>
          <br />
          <p className="leading-relaxed text-text__gray w-full lg:max-w-[35rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aperiam perspiciatis mollitia cum expedita veniam perferendis eaque
            consectetur voluptatibus quia??
          </p>
          <br />
          <CustomLink
            route="/"
            text="Get started"
            classNames="border py-3 px-6 rounded text-text__gray font-semibold hover:bg-error hover:text-white duration-300 hover:border-error"
          >
            Get started
          </CustomLink>
          </div>
        </div>
       
      </div>
    </div>
  );
}
