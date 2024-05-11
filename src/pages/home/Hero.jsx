import Slider from "react-slick";
import Banner1 from "../../assets/image/banner/hero-01-7daaa580.png";
import Banner2 from "../../assets/image/banner/hero-01-7daaa580100.png";
import Banner3 from "../../assets/image/banner/hero-01-7daaa58070.png";
import Banner4 from "../../assets/image/banner/hero-01-7daaa58090.png";
import CustomLink from "../../components/UI/CustomLink";

const popularData = [
  {
    id: 1,
    route: "/",
    children: "Logo Design",
    className:
      "border py-0.5 px-3 inline-block rounded-md text-black bg-[#dad9d7] hover:bg-white duration-300 text-brand__font__size__sm",
  },
  {
    id: 2,
    route: "/",
    children: "Web Design",
    className:
      "border py-0.5 px-3 inline-block rounded-md text-black bg-[#dad9d7] hover:bg-white duration-300 text-brand__font__size__sm",
  },
  {
    id: 3,
    route: "/",
    children: "Branding",
    className:
      "border py-0.5 px-3 inline-block rounded-md text-black bg-[#dad9d7] hover:bg-white duration-300 text-brand__font__size__sm",
  },
  {
    id: 4,
    route: "/",
    children: "Personal Signature",
    className:
      "border py-0.5 px-3 inline-block rounded-md text-black bg-[#dad9d7] hover:bg-white duration-300 text-brand__font__size__sm",
  },
];

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
    <div className="container px-2 md:py-[40px]">
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="basis-[100%] lg:basis-[40%] w-full flex justify-center items-center">
          <div className="slider-container max-w-[450px] xl:max-w-[600px] w-full p-10 md:p-0">
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
            <br />
            <div className="flex flex-wrap gap-2 w-full items-center justify-center lg:justify-start">
              <CustomLink
                route="/"
                text="Get started"
                classNames="py-3 px-6 inline-block rounded-full text-text__gray font-semibold bg-primary text-white hover:bg-brand__black__color duration-300"
              >
                Get started
              </CustomLink>
              <CustomLink
                route="/"
                text="Get started"
                classNames="py-3 px-6 inline-block rounded-full text-text__gray font-semibold bg-brand__black__color text-white hover:bg-primary duration-300"
              >
                Visit our shop
              </CustomLink>
            </div>
            <br />
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2">
              <div>
                <span>Popular: </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-text__gray">
                {popularData.map((d) => (
                  <CustomLink
                    key={d.id}
                    route={d.route}
                    classNames={d.className}
                  >
                    {d.children}
                  </CustomLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
