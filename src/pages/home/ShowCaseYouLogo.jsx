import Slider from "react-slick";
import Banner1 from "../../assets/image/banner/Screenshot_26.png";
import SectionTitle from "../../components/common/SectionTitle";

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

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
      },
    },
  ],
};

export default function ShowCaseYouLogo() {
  return (
    <div className="bg-brand__black__color">
      <div className="container px-2 pb-[30px] md:pb-[70px] pt-[30px] md:pt-[50px]">
        <div>
          <SectionTitle
            title="Design for what you need"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-[35px] text-center text-white"
          />
        </div>
       
        <div className="slider-container-portfolio mt-5 p-5">
          <Slider {...settings} className="">
            {showCaseData.map((d) => (
              <div key={d.id} className="w-full">
                <img src={d.img} className="w-full" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
