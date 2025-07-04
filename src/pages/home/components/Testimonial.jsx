import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { useGetReviewQuery } from "../../../services/features/review/reviewApi";
import "../../../styles/testimonial-slider.css";
import { generateRandomHexColor } from "../../../utils/generateRandomHexColor";
import { getCountryImgPath } from "../../../utils/getImgUrl-utility";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 650,
  },
});

const PrevArrow = ({ ...props }) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-20 bottom-0 md:bottom-10 text-white duration-300 hover:cursor-pointer bg-primary w-8 h-8 flex flex-col items-center justify-center p-1 hover:p-1.5 rounded-full group"
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
      className="absolute right-10 bottom-0 md:bottom-10 text-white duration-300 hover:cursor-pointer bg-primary w-8 h-8 flex flex-col items-center justify-center p-1 hover:p-1.5 rounded-full group"
    >
      <FaArrowRight size={16} className="group-hover:scale-125 duration-300" />
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
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};

export default function Testimonial() {
  const [dynamicUrl] = useState({
    page: 1,
    limit: 10,
    sortBy: "ratingPoints",
    sortOrder: -1,
  });

  const { data, isLoading } = useGetReviewQuery(dynamicUrl);
  const reviews = data?.data || [];
  const filteredReviews = reviews.filter(review => review.approved);

  return (
    <section>
      <div id="testimonial-slider" className="w-full mx-auto px-10 bg-white">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
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
                {isLoading ? (
                  <div className="py-[75px]">
                    <Skeleton variant="rectangular" height={250} />
                  </div>
                ) : (
                  <Slider
                    {...settings}
                    className="relative max-w-[400px] sm:max-w-[550px] md:max-w-[750px] lg:max-w-[600px] xl:max-w-[800px] mx-auto md:ml-auto"
                  >
                    {filteredReviews.map((item) => (
                      <div
                        key={item?._id}
                        className="rounded-md w-full text-brand__black__color"
                      >
                        <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center md:items-start">
                          <div className="flex justify-center border-2 rounded-full w-fit h-fit">
                            <Avatar
                              alt={item?.user?.firstName}
                              src={
                                item?.user?.photo?.url ||
                                "/static/images/avatar/1.jpg"
                              }
                              sx={{ backgroundColor: generateRandomHexColor() }}
                              className="w-8 h-8 m-0"
                            />
                          </div>
                          <div className="basis-[100%] text-center md:text-start flex flex-col items-center md:items-start m-0">
                            <div className="flex items-center gap-1">
                              <p className="font-brand__font__600">{`${item?.user?.firstName} ${item?.user?.lastName}`}</p>
                              {item?.user?.verified && (
                                <VerifiedIcon className="text-primary text-brand__font__size__sm" />
                              )}
                            </div>
                            <div className="flex items-center justify-center gap-1.5 my-1">
                              <img
                                src={getCountryImgPath(item?.user?.country)}
                                className="w-4 h-4 rounded-full"
                                alt={item?.user?.country}
                              />
                              <p>{item?.user?.country}</p>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-1">
                              <Rating
                                name="read-only"
                                value={item?.ratingPoints || 5}
                                precision={0.5}
                                readOnly
                                style={{
                                  fontSize: 20,
                                }}
                                emptyIcon={
                                  <StarIcon
                                    style={{
                                      opacity: 0.55,
                                      color: "#7a7a7a",
                                    }}
                                    fontSize="inherit"
                                  />
                                }
                              />
                            </div>

                            {item?.reviewText.length > 250 ? (
                              <blockquote className="text-brand__font__size__sm">
                                <span>&ldquo;</span>
                                <CustomWidthTooltip
                                  title={item?.reviewText}
                                  placement="top"
                                >
                                  <span>
                                    {`${item?.reviewText.slice(0, 250)}...`}
                                  </span>
                                </CustomWidthTooltip>
                                <span>&rdquo;</span>
                              </blockquote>
                            ) : (
                              <blockquote className="leading-snug mt-1.5 text-brand__font__size__sm">
                                <span>&ldquo;</span>
                                {item?.reviewText}
                                <span>&rdquo;</span>
                              </blockquote>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
