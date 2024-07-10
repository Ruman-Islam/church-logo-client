import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import SectionTitle from "../../../components/common/SectionTitle";
import data from "../../../data/showCaseLogo.json";
import { getImgUrl } from "../../../utils/getImgUrl-utility";
import "../../../styles/showcase-logo-slider.css";

const PrevArrow = ({ ...props }) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="relative -left-[20px] text-white hover:text-primary duration-200 hover:cursor-pointer"
    >
      <FaArrowLeft size={25} />
    </div>
  );
};

const NextArrow = ({ ...props }) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="relative -right-[20px] text-white hover:text-primary duration-200 hover:cursor-pointer"
    >
      <FaArrowRight size={25} />
    </div>
  );
};

export default function ShowCaseYouLogo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-brand__black__color">
      <div className="container px-2 py-[40px]">
        <div>
          <SectionTitle
            title="Looks great and easy to use everywhere!"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-tight font-brand__font__600 text-center text-white"
          />
        </div>

        <div id="showcase-logo" className="lg:mt-10 md:px-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.id}>
                <div>
                  <img
                    src={getImgUrl(d.img)}
                    alt="churchlogo"
                    className="w-[512px] h-full cursor-grab active:cursor-grabbing"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
