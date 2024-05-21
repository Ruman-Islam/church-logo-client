import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import SectionTitle from "../../components/common/SectionTitle";
import data from "../../data/testimonial.json";
import "../../styles/testimonial-slider.css";

export default function Testimonial() {
  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    centerPadding: "100px",
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    dots: true,
    arrows: false,
    swipe: false,
    responsive: [
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
    <section className="my-10">
      <div className="container px-2">
        <div className="px-2 text-center">
          <SectionTitle
            title="10,000+ Glowing Reviews"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-tight font-brand__font__600 text-center text-center"
          />
          <h3 className="font-brand__font__500 mt-2 text-primary">
            See what others say
          </h3>
        </div>

        <div
          id="testimonial-slider"
          className="max-w-[1200px] w-full mx-auto p-5"
        >
          <Slider {...settings}>
            {data.map((slide, index) => (
              <div
                key={index}
                className="bg-white border rounded-md slide-item text-brand__black__color"
              >
                <div className="flex flex-col p-5">
                  <FaQuoteLeft className="text-brand__light_green__color" />
                  <p className="text-[9px] leading-snug mt-3">{slide.review}</p>
                </div>
                <div className="border-t w-full px-5 py-3 flex items-center gap-1 bg-section__bg_color rounded-bl-md rounded-br-md">
                  <img
                    className="w-6 h-6 rounded-full shadow"
                    src={slide.image}
                    alt={slide.name}
                  />
                  <div className="text-[10px] leading-[12px] flex flex-col">
                    <span>{slide.name}</span>
                    <span className="text-[8px]">{slide.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
