import Slider from "react-slick";
import CustomersDoingCard from "../../components/common/Cards/CustomersDoingCard";
import SectionTitle from "../../components/common/SectionTitle";
import data from "../../data/customersDoing.json";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  arrows: false,
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

export default function CustomersDoing() {
  return (
    <div>
      <div className="container px-2 py-[10px] md:py-[30px] xl:py-[50px]">
        <div>
          <SectionTitle
            title="Check out the cool things our customers are doing with their Church Logo"
            titleClass="text-brand__font__size__lg md:text-section__title__size xl:text-brand__font__size__xl leading-[30px] md:leading-[40px] xl:leading-[55px] font-brand__font__600 text-center text-center md:mb-4 text-text__gray max-w-[600px] xl:max-w-[1024px] mx-auto"
          />
        </div>

        <div className="slider-container w-full">
          <Slider {...settings} className="p-2">
            {data.map((content) => (
              <CustomersDoingCard key={content.id} content={content} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
