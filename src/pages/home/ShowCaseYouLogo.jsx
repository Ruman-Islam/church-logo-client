import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import Banner1 from "../../assets/image/banner/Screenshot_26.png";
import SectionTitle from "../../components/common/SectionTitle";
import "../../styles/showcase-logo-slider.css";

const showCaseData = [
  {
    id: 1,
    img: Banner1,
  },
  {
    id: 2,
    img: Banner1,
  },
];

export default function ShowCaseYouLogo() {
  const PrevArrow = ({ ...props }) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="relative -left-[10px] z-[99999] text-white hover:text-primary duration-200 hover:cursor-pointer"
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
        className="relative -right-[10px] z-[99999] text-white hover:text-primary duration-200 hover:cursor-pointer"
      >
        <FaArrowRight size={25} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="bg-brand__black__color">
      <div className="container px-2 pb-[30px] md:pb-[70px] pt-[30px] md:pt-[50px]">
        <div>
          <SectionTitle
            title="Design for what you need"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-[35px] text-center text-white"
          />
        </div>

        <div id="showcase-logo" className="mt-10">
          <Slider {...settings}>
            {showCaseData.map((d) => (
              <div key={d.id} className="min-w-[600px] w-full h-full">
                <img src={Banner1} alt="" className="w-full h-full" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
