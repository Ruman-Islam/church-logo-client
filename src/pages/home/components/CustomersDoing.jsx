import Slider from "react-slick";
import SectionTitle from "../../../components/common/SectionTitle";
import data from "../../../data/customersDoing.json";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  arrows: false,
  draggable: true,
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

function CustomersDoingCard(props) {
  const { content } = props;
  return (
    <div className="w-full h-full rounded-lg bg-white aspect-[1.3/1] text-center p-2">
      <div className="mb-2">
        <img
          src={getImgUrl(content?.img)}
          alt=""
          className="rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <p className="leading-tight p-2 text-left shadow text-gray-500 h-[80px]">
        <small>
          <em>
            <span>{content?.hashTag}</span> <span>{content?.title}</span>
          </em>
        </small>
      </p>
    </div>
  );
}

export default function CustomersDoing() {
  return (
    <div>
      <div className="container px-4 py-[20px] md:py-[30px] xl:py-[50px]">
        <div>
          <SectionTitle
            title="Check out the cool things our customers are doing with their Church Logo"
            titleClass="text-[22px] md:text-section__title__size xl:text-brand__font__size__xl leading-[30px] md:leading-[40px] xl:leading-[55px] font-brand__font__600 text-center text-center md:mb-4 text-text__gray max-w-[600px] xl:max-w-[1024px] mx-auto"
          />
        </div>

        <div className="slider-container w-full cursor-grab active:cursor-grabbing">
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
