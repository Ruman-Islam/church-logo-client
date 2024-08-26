import StarIcon from "@mui/icons-material/Star";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import NextArrow from "../../../components/common/Arrow/nextArrow";
import PrevArrow from "../../../components/common/Arrow/prevArrow";
import useQueryParameter from "../../../hooks/useQueryParameter";
import { useGetReviewQuery } from "../../../services/features/review/reviewApi";
import { generateRandomHexColor } from "../../../utils/generateRandomHexColor";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
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
        arrows: false,
      },
    },
  ],
};

export default function OurClientsLovesUs() {
  const { dynamicUrl } = useQueryParameter({
    page: 1,
    limit: 11,
  });

  const { data } = useGetReviewQuery(dynamicUrl);
  const reviews = data?.data || [];

  return !reviews.length ? null : (
    <div className="h-fit py-5 md:py-20 overflow-hidden">
      <h1 className="text-brand__font__size__lg md:text-brand__font__size__xl leading-tight text-center mb-2">
        Our clients love us
      </h1>

      <div className="category-slide-container w-full">
        <Slider {...settings} className="py-4">
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
                  <div className="w-10 h-10 rounded-full">
                    <Avatar
                      alt={item?.user?.firstName}
                      src={
                        item?.user?.photo?.url || "/static/images/avatar/1.jpg"
                      }
                      sx={{ backgroundColor: generateRandomHexColor() }}
                      className="w-full h-full border-2"
                    />
                  </div>
                  <div>
                    <p>{`${item?.user?.firstName} ${item?.user?.lastName}`}</p>
                    {item?.user?.verified && (
                      <p className="flex items-center gap-x-1 text-brand__font__size__sm mt-0.5">
                        <VerifiedUserIcon className="text-primary text-brand__font__size__sm" />
                        <span>verified</span>
                      </p>
                    )}
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
