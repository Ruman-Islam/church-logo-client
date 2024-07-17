import StarIcon from "@mui/icons-material/Star";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import imagePlaceHolder from "../../../assets/svg/icons/church_logo_image_placeholder.svg";
import manPlaceHolder from "../../../assets/svg/icons/profile_placeholder_man.png";
import womanPlaceHolder from "../../../assets/svg/icons/profile_placeholder_woman.svg";
import NextArrow from "../../../components/common/Arrow/nextArrow";
import PrevArrow from "../../../components/common/Arrow/prevArrow";
import useQueryParameter from "../../../hooks/useQueryParameter";
import { useGetReviewQuery } from "../../../services/features/review/reviewApi";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 3,
  autoplay: false,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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

export default function OurClientsLovesUs() {
  const { dynamicUrl } = useQueryParameter({
    page: 1,
    limit: 11,
  });

  const { data, isLoading } = useGetReviewQuery(dynamicUrl);
  const reviews = data?.data;

  if (isLoading) {
    return <Skeleton variant="rectangular" height={318} />;
  }

  return (
    <div className="h-fit py-5 md:py-10 overflow-hidden">
      <h1 className="text-brand__font__size__lg md:text-brand__font__size__xl leading-tight text-center mb-2">
        Our clients love us
      </h1>

      <div className="category-slide-container w-full">
        <Slider {...settings} className="p-2">
          {reviews.map((item) => (
            <Card
              key={item?._id}
              sx={{ maxWidth: 345 }}
              className="rounded-xl shadow-md"
            >
              <CardMedia
                className="rounded-tl-xl rounded-tr-xl border"
                component="img"
                height="140"
                image={getImgUrl(item?.productImageUrl)}
                alt="church_logo"
              />

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Review
                </Typography>
                <Typography>
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
                          color: "white",
                        }}
                        fontSize="inherit"
                      />
                    }
                  />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span>&ldquo;</span>
                  <span className="italic">
                    {item?.reviewText.length > 100
                      ? `${item?.reviewText.slice(0, 100)}...`
                      : item?.reviewText}
                  </span>
                  <span>&rdquo;</span>
                </Typography>
              </CardContent>

              <CardContent>
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full border border-brand__black__color">
                    <img
                      className="w-full h-full rounded-full border-[2px] border-white"
                      src={
                        item?.user?.photo?.cloudinaryUrl
                          ? getImgUrl(item?.user?.photo?.cloudinaryUrl)
                          : !item?.user?.gender
                          ? imagePlaceHolder
                          : item?.user?.gender === "male"
                          ? manPlaceHolder
                          : womanPlaceHolder
                      }
                      alt={`${item?.user?.firstName} ${item?.user?.lastName}`}
                    />
                  </div>
                  <div className="leading-tight">
                    <p>{`${item?.user?.firstName} ${item?.user?.lastName}`}</p>
                    <small>Client</small>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
}
