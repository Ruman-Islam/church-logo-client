import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Layout from "../../components/common/Layout";
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
      <Box id="reviews">
        <Box className="bg-page_bg h-[150px] lg:h-[180px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white text-center leading-tight p-2">
          <Typography className="text-brand__font__size__lg">
            {data?.meta?.averageRating}/5
          </Typography>
          <Typography>
            <Rating
              name="read-only"
              value={data?.meta?.averageRating}
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
          <Typography>{data?.meta?.totalDocs} Real Customer Reviews</Typography>
          <p className="text-[12px] md:text-[18px] mt-2 max-w-[700px] w-full">
            Read all the real, honest reviews from thousands of professionals on
            our Facebook Page.
          </p>
        </Box>

        <Box className="container px-4 py-10 flex flex-col gap-5">
          <Box className="max-w-[1024px] mx-auto [column-count:1] md:[column-count:2] lg:[column-count:3] [column-gap:1rem]">
            {(isLoading ? Array.from(new Array(dynamicUrl.limit)) : reviews)
              ?.slice(0, dynamicUrl.limit)
              .map((item, i) =>
                item ? (
                  <Box
                    key={item?._id || i}
                    className="mb-4 break-inside-avoid shadow-none border gap-4 rounded-lg"
                  >
                    {i % 2 === 0 ? (
                      <Card className="shadow-none rounded-lg rounded-tr-lg">
                        <Box>
                          <img
                            className="h-auto max-w-full rounded-tl-lg rounded-tr-lg"
                            src={item?.productImageUrl}
                            alt=""
                          />
                        </Box>
                        <Box className="flex flex-col justify-center items-center relative pb-4 shadow-inner bg-gray-50">
                          <Box className="mx-auto w-fit h-fit border-4 border-white rounded-full absolute -top-10">
                            <Avatar
                              alt={item?.user?.firstName}
                              src={
                                item?.user?.photo?.url ||
                                "/static/images/avatar/1.jpg"
                              }
                              sx={{ backgroundColor: generateRandomHexColor() }}
                              className="w-20 h-20"
                            />
                          </Box>
                          <Box className="flex flex-col gap-3 text-center mt-12">
                            <Box className="flex flex-col gap-3 items-center">
                              <Box className="flex items-center justify-center gap-x-1">
                                <p className="font-brand__font__semibold">{`${item?.user?.firstName} ${item?.user?.lastName}`}</p>
                                <VerifiedIcon
                                  fontSize=""
                                  sx={{ color: "#65B741" }}
                                />
                              </Box>
                              <Rating
                                name="read-only"
                                value={item?.ratingPoints || 0}
                                precision={1}
                                readOnly
                                style={{
                                  fontSize: 20,
                                }}
                                emptyIcon={
                                  <StarIcon
                                    style={{
                                      opacity: 0.55,
                                      color: "gray",
                                    }}
                                    fontSize="inherit"
                                  />
                                }
                              />
                            </Box>
                            <Box className="px-4">
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
                            </Box>
                          </Box>
                        </Box>
                      </Card>
                    ) : (
                      <Card className="shadow-none rounded-lg h-fit">
                        <Box className="flex flex-col justify-center items-center p-4 shadow-inner bg-gray-50">
                          <Box className="mx-auto w-fit h-fit border-4 border-white rounded-full">
                            <Avatar
                              alt={item?.user?.firstName}
                              src={
                                item?.user?.photo?.url ||
                                "/static/images/avatar/1.jpg"
                              }
                              sx={{ backgroundColor: generateRandomHexColor() }}
                              className="w-20 h-20"
                            />
                          </Box>
                          <Box className="flex flex-col gap-3 text-center mt-4">
                            <Box className="flex flex-col gap-3 items-center">
                              <Box className="flex items-center justify-center gap-x-1">
                                <p className="font-brand__font__semibold">{`${item?.user?.firstName} ${item?.user?.lastName}`}</p>
                                <VerifiedIcon
                                  fontSize=""
                                  sx={{ color: "#65B741" }}
                                />
                              </Box>
                              <Rating
                                name="read-only"
                                value={item?.ratingPoints || 0}
                                precision={1}
                                readOnly
                                style={{
                                  fontSize: 20,
                                }}
                                emptyIcon={
                                  <StarIcon
                                    style={{
                                      opacity: 0.55,
                                      color: "gray",
                                    }}
                                    fontSize="inherit"
                                  />
                                }
                              />
                            </Box>
                            <Box>
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
                            </Box>
                          </Box>
                        </Box>
                      </Card>
                    )}
                  </Box>
                ) : (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    width={300}
                    height={218}
                  />
                )
              )}
          </Box>

          {isVisibleMoreBtn ? (
            <Box className="flex justify-center">
              <Button
                onClick={handleShowMoreItems}
                className="bg-primary hover:bg-brand__black__color rounded-full px-6 font-brand__font__600"
                variant="contained"
              >
                Load More
              </Button>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Layout>
  );
}
