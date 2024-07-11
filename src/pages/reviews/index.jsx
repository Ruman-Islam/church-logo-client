import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useState } from "react";
import Layout from "../../components/common/Layout";
import { useGetReviewQuery } from "../../services/features/review/reviewApi";
import { getImgUrl } from "../../utils/getImgUrl-utility";

export default function ReviewsScreen() {
  const [dynamicUrl, setDynamicUrl] = useState({
    page: 1,
    limit: 8,
  });

  const { data, isLoading } = useGetReviewQuery(dynamicUrl);
  const reviews = data?.data;
  const isVisibleMoreBtn = dynamicUrl.limit < data?.meta?.total;

  const handleShowMoreItems = () => {
    setDynamicUrl((prev) => ({ ...prev, limit: prev.limit + 10 }));
  };

  return (
    <Layout title="Reviews">
      <section id="reviews">
        <div className="bg-page_bg h-[150px] lg:h-[200px] xl:h-[300px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white text-center leading-tight py-2">
          <Typography className="text-[37px]">Reviews</Typography>
          <Typography className=" md:text-[20px] mt-1 max-w-[600px] w-full">
            Read all the real, honest reviews from thousands of professionals on
            our Facebook Page and Trustpilot.
          </Typography>
        </div>

        <div className="container px-2 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
            <Card
              sx={{ maxWidth: 345 }}
              className="shadow-none border rounded-md p-10"
            >
              <Typography className="text-brand__font__size__lg">
                3.8/5
              </Typography>
              <Typography>
                <Rating
                  name="read-only"
                  value={5}
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
              <Typography>554 Real Customer Reviews</Typography>
            </Card>
            {(isLoading ? Array.from(new Array(dynamicUrl.limit)) : reviews)
              ?.slice(0, dynamicUrl.limit)
              .map((review) =>
                review ? (
                  <Card
                    key={review?._id}
                    sx={{ maxWidth: 345 }}
                    className="shadow-none border rounded-md"
                  >
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      title={`${review?.user?.firstName} ${review?.user?.lastName}`}
                      subheader={review?.submittedDate}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={getImgUrl(review?.productImageUrl)}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        <span>&ldquo;</span>
                        {review?.reviewText?.length > 200
                          ? `${review?.reviewText?.slice(0, 200)}...`
                          : review?.reviewText}
                        <span>&rdquo;</span>
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing></CardActions>
                  </Card>
                ) : (
                  <Skeleton
                    key={review?._id}
                    variant="rectangular"
                    height={218}
                  />
                )
              )}
          </div>
          {isVisibleMoreBtn ? (
            <div className="flex justify-center">
              <Button
                onClick={handleShowMoreItems}
                className="bg-primary hover:bg-brand__black__color rounded-full px-6 font-brand__font__600"
                variant="contained"
              >
                Load More
              </Button>
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}
