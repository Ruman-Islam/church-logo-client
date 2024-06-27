import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import data from "../../data/testimonial.json";
import "../../styles/testimonial-slider.css";

export default function Testimonial() {
  const PrevArrow = ({ ...props }) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute right-20 md:right-24 bottom-10 text-white duration-300 hover:cursor-pointer bg-primary w-8 h-8 md:w-10 md:h-10 flex flex-col items-center justify-center p-1 hover:p-1.5 rounded-full group"
      >
        <FaArrowLeft size={16} className="group-hover:scale-125 duration-300" />
      </div>
    );
  };

  const NextArrow = ({ ...props }) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute right-10 bottom-10 text-white duration-300 hover:cursor-pointer bg-primary w-8 h-8 md:w-10 md:h-10 flex flex-col items-center justify-center p-1 hover:p-1.5 rounded-full group"
      >
        <FaArrowRight
          size={16}
          className="group-hover:scale-125 duration-300"
        />
      </div>
    );
  };

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: false,
    swipe: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section>
      <div
        id="testimonial-slider"
        className="w-full mx-auto px-10 bg-white"
      >
        <div className="container px-2">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="flex-1 hidden lg:block text-brand__black__color">
              <p className="text-brand__font__size__xs text-text__gray font-brand__font__600">
                TESTIMONIALS
              </p>
              <div className="font-brand__font__semibold text-[48px] leading-[50px] mt-2.5">
                <p>What our clients say</p>
                <p>
                  about our <span className="text-primary">Church Logo.</span>
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="rounded-lg w-full">
                <Slider
                  {...settings}
                  className="relative max-w-[450px] sm:max-w-[550px] md:max-w-[750px] lg:max-w-[600px] xl:max-w-[800px] mx-auto md:ml-auto"
                >
                  {data.map((slide, index) => (
                    <div
                      key={index}
                      className="rounded-md w-full text-brand__black__color"
                    >
                      <div className="p-8 flex">
                        <div className="basis-[15%]">
                          <img
                            className="w-12 h-12 rounded-full mx-auto"
                            src={slide?.image}
                            alt={slide?.name}
                          />
                        </div>
                        <div className="basis-[85%]">
                          <p className="font-brand__font__600">{slide?.name}</p>
                          <div className="flex items-center gap-1.5 my-1">
                            <img
                              src={slide?.countryImage}
                              className="w-4 h-4 rounded-full"
                              alt={slide?.countryName}
                            />
                            <p>{slide?.countryName}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Rating
                              name="read-only"
                              value={slide?.rating}
                              precision={0.5}
                              readOnly
                              style={{
                                fontSize: 20,
                              }}
                              emptyIcon={
                                <StarIcon
                                  style={{
                                    opacity: 0.55,
                                    color: "white",
                                  }}
                                  fontSize="inherit"
                                />
                              }
                            />
                            {/* <span className="text-brand__font__size__xs text-text__gray font-brand__font__500">
                              {slide?.date}
                            </span> */}
                          </div>

                          <blockquote
                            title={
                              slide?.review.length > 250 ? slide?.review : ""
                            }
                            className="leading-snug mt-1.5"
                          >
                            <span>&ldquo;</span>
                            {slide?.review.length > 250
                              ? `${slide?.review.slice(0, 250)}...`
                              : slide?.review}
                            <span>&rdquo;</span>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
