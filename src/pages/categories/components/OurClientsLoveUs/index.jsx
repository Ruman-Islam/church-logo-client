import StarIcon from "@mui/icons-material/Star";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import data from "../../../../data/testimonial.json";
import NextArrow from "../../../../components/common/Arrow/nextArrow";
import PrevArrow from "../../../../components/common/Arrow/prevArrow";

export default function OurClientsLoveUs() {
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

  return (
    <div className="h-fit py-5 md:py-10 overflow-hidden">
      <h1 className="text-brand__font__size__lg md:text-brand__font__size__xl leading-tight text-center mb-2">
        Our clients love us
      </h1>

      <div className="category-slide-container w-full">
        <Slider {...settings} className="p-2">
          {data.map((content) => (
            <Card
              key={content.id}
              sx={{ maxWidth: 345 }}
              className="rounded-xl"
            >
              <CardMedia
                className="rounded-tl-xl rounded-tr-xl border"
                component="img"
                height="140"
                image="https://images-marketing.99static.com/images/product-landing/reviews/review-design-01.jpeg"
                alt="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Review
                </Typography>
                <Typography>
                  <Rating
                    name="read-only"
                    value={content?.rating}
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
                  <blockquote
                    title={content?.review.length > 100 ? content?.review : ""}
                  >
                    <span>&ldquo;</span>
                    {content?.review.length > 100
                      ? `${content?.review.slice(0, 100)}...`
                      : content?.review}
                    <span>&rdquo;</span>
                  </blockquote>
                </Typography>
              </CardContent>

              <CardContent>
                <div className="flex gap-1.5 my-1">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={content?.image}
                    alt={content?.name}
                  />
                  <div className="leading-tight">
                    <p>{content?.name}</p>
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
