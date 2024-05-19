import Slider from "react-slick";
import SectionTitle from "../../components/common/SectionTitle";
import CustomersDoingCard from "../../components/common/Cards/CustomersDoingCard";
import data from '../../data/customersDoing.json'


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
      <div className="container px-2 py-[20px] md:py-[50px]">
        <div>
          <SectionTitle
            title="Check out the cool things our customers are doing with their Churchlogo"
            titleClass="text-brand__font__size__lg md:text-brand__font__size__xl leading-[25px] md:leading-[50px] text-center mb-4"
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
