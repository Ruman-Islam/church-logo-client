import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import useQueryParameter from "../../hooks/useQueryParameter";
import useTracking from "../../hooks/useTracking";
import { useGetReviewQuery } from "../../services/features/review/reviewApi";
import { generateRandomHexColor } from "../../utils/generateRandomHexColor";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 340,
  },
});

export default function ReviewsScreen() {
  useTracking();
  const { dynamicUrl, handleShowMoreItems } = useQueryParameter({
    page: 1,
    limit: 9,
  });

  const { data, isLoading } = useGetReviewQuery(dynamicUrl);
  const reviews = data?.data;
  const isVisibleMoreBtn = dynamicUrl.limit < data?.meta?.totalDocs;

  return (
    <Layout
      title="Church Logo Design Reviews - Real Testimonials & Success Stories"
      description="Read real testimonials from churches who loved their custom logo designs. See why they recommend us."
    >
      <section id="reviews">
        <SectionBanner
          heading="Reviews"
          desc="Read all the real, honest reviews from thousands of professionals on
            our Facebook Page and Trustpilot."
        />

        <div className="container px-4 py-10 flex flex-col gap-5">
          <Box className="underline p-5 w-fit mx-auto flex flex-wrap items-center gap-4">
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
          </Box>

          <div className="max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(isLoading ? Array.from(new Array(dynamicUrl.limit)) : reviews)
              ?.slice(0, dynamicUrl.limit)
              .map((item, i) =>
                item ? (
                  <Card
                    key={item?._id}
                    className="shadow-none border rounded-md"
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          alt={item?.user?.firstName}
                          src={
                            item?.user?.photo?.url ||
                            "/static/images/avatar/1.jpg"
                          }
                          sx={{ backgroundColor: generateRandomHexColor() }}
                          className="w-8 h-8"
                        />
                      }
                      title={
                        <div className="flex items-center gap-1">
                          <p>{`${item?.user?.firstName} ${item?.user?.lastName}`}</p>
                          {item?.user?.verified && (
                            <VerifiedIcon className="text-primary text-brand__font__size__sm" />
                          )}
                        </div>
                      }
                      subheader={item?.submittedDate}
                    />
                    <CardMedia
                      className="border-t border-b"
                      component="img"
                      height="194"
                      image={item?.productImageUrl}
                      alt="church_logo"
                    />
                    <CardContent>
                      {item?.reviewText.length > 150 ? (
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          className="italic"
                        >
                          <span>&ldquo;</span>
                          <CustomWidthTooltip
                            title={item?.reviewText}
                            placement="top"
                          >
                            <span>
                              {`${item?.reviewText.slice(0, 150)}...`}
                            </span>
                          </CustomWidthTooltip>
                          <span>&rdquo;</span>
                        </Typography>
                      ) : (
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          className="italic"
                        >
                          <span>&ldquo;</span>
                          {item?.reviewText}
                          <span>&rdquo;</span>
                        </Typography>
                      )}
                    </CardContent>
                    <CardActions disableSpacing></CardActions>
                  </Card>
                ) : (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    width={300}
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
