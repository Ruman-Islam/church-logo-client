import CustomLink from "../../components/UI/CustomLink";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../assets/image/banner/hero-01-7daaa580.png";
import Banner2 from "../../assets/image/banner/hero-01-7daaa580100.png";
import Banner3 from "../../assets/image/banner/hero-01-7daaa58070.png";
import Banner4 from "../../assets/image/banner/hero-01-7daaa58090.png";

export default function Hero() {
    const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    waitForAnimate: true,
    cssEase: "linear",
  };

  return (
    <div className="container px-2">
      <div className="flex flex-col-reverse lg:flex-row justify-between py-6">
       <div className="basis-[40%] p-2.5">
        <div className="slider-container max-w-[600px]">
      <Slider {...settings}>
        <div>
          <img src={Banner1} />
        </div>
        <div>
          <img src={Banner2} />
        </div>
        <div>
          <img src={Banner3} />
        </div>
        <div>
          <img src={Banner4} />
        </div>
      </Slider>
    </div>
       </div>
        <div className="flex-1 flex justify-center p-2.5">
          <div className="w-full p-10 text-center lg:text-start">
          <h2 className="text-[#031401] text-[80px] leading-[80px] font-brand__font__semibold">
            Get Your Own <span className="text-primary">Custom Church</span>
            <br /> Logo
          </h2>
          <br />
          <p className="leading-relaxed text-text__gray w-full lg:max-w-[35rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aperiam perspiciatis mollitia cum expedita veniam perferendis eaque
            consectetur voluptatibus quia??
          </p>
          <br />
          <div className="flex gap-x-5">
          <CustomLink
            route="/"
            text="Get started"
            classNames="border py-3 px-6 mb-5 inline-block rounded-full text-text__gray font-semibold bg-primary text-white hover:bg-error hover:text-white duration-300 hover:border-error"
          >
            Get started
          </CustomLink>
          <CustomLink
            route="/"
            text="Get started"
            classNames="border py-3 px-6 mb-5 inline-block rounded-full text-text__gray font-semibold bg-[#031401] text-white hover:bg-error hover:text-white duration-300 hover:border-error"
          >
            Check out our shop
          </CustomLink>
          </div>
          <br />
          <div className="flex items-center gap-x-1">
          <span>Popular: </span>
          <div>
          </div>
           <CustomLink
            route="/"
            text="Get started"
            classNames="border py-0.5 px-6 inline-block rounded-md text-black bg-[#dad9d7] text-white hover:bg-error hover:text-white duration-300 hover:border-error"
          >
           Logo Design
          </CustomLink>
          <CustomLink
            route="/"
            text="Get started"
            classNames="border py-0.5 px-6 inline-block rounded-md text-black bg-[#dad9d7] text-white hover:bg-error hover:text-white duration-300 hover:border-error"
          >
            Web Design
          </CustomLink>
          <CustomLink
            route="/"
            text="Get started"
            classNames="border py-0.5 px-6 inline-block rounded-md text-black bg-[#dad9d7] text-white hover:bg-error hover:text-white duration-300 hover:border-error"
          >
            Branding
          </CustomLink>
          </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
