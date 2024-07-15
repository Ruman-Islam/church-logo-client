import StarIcon from "@mui/icons-material/Star";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
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
import imagePlaceHolder from "../../assets/icons/church_logo_image_placeholder.jpg";
import manPlaceHolder from "../../assets/svg/icons/profile_placeholder_man.svg";
import womanPlaceHolder from "../../assets/svg/icons/profile_placeholder_woman.svg";
import Layout from "../../components/common/Layout";
import useQueryParameter from "../../hooks/useQueryParameter";
import { useGetReviewQuery } from "../../services/features/review/reviewApi";
import { getImgUrl } from "../../utils/getImgUrl-utility";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 320,
  },
});

export default function ReviewsScreen() {
  const { dynamicUrl, handleShowMoreItems } = useQueryParameter({
    page: 1,
    limit: 11,
  });

  const { data, isLoading } = useGetReviewQuery(dynamicUrl);
  const reviews = data?.data;
  const isVisibleMoreBtn = dynamicUrl.limit < data?.meta?.totalDocs;

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

        <div className="container px-2 flex flex-col gap-5 py-[20px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
            {isLoading ? (
              <Skeleton variant="rectangular" height={218} />
            ) : (
              <Card className="shadow-none border rounded-md p-10">
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
            )}

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
                        <div className="w-10 h-10 rounded-full border border-brand__black__color mx-auto">
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
                      }
                      title={
                        <div className="flex items-center gap-1">
                          <p>{`${item?.user?.firstName} ${item?.user?.lastName}`}</p>
                          <VerifiedUserIcon className="text-primary text-brand__font__size__sm" />
                        </div>
                      }
                      subheader={item?.submittedDate}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={getImgUrl(item?.productImageUrl)}
                      alt="church_logo"
                    />
                    <CardContent>
                      {item?.reviewText.length > 150 ? (
                        <Typography variant="body2" color="text.secondary">
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
                        <Typography variant="body2" color="text.secondary">
                          <span>&ldquo;</span>
                          {item?.reviewText}
                          <span>&rdquo;</span>
                        </Typography>
                      )}
                    </CardContent>
                    <CardActions disableSpacing></CardActions>
                  </Card>
                ) : (
                  <Skeleton key={i} variant="rectangular" height={218} />
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
