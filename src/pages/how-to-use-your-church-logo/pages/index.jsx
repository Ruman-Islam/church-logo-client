import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { useParams } from "react-router-dom";
import Layout from "../../../components/common/Layout";
import { useGetOneQuery } from "../../../services/features/howToUseChurchLogo/howToUseChurchLogoApi";

const HowToUseChurchLogoDetail = () => {
  const { id } = useParams();

  const { data, isFetching } = useGetOneQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const howToUseChurchLogoData = data?.data || {};

  return (
    <Layout
      title={howToUseChurchLogoData?.subTitle}
      description="Learn how to properly use your church logo across all platforms. Get practical tips to enhance your branding and create a lasting impact."
    >
      <Box className="max-w-[1024px] w-full h-full mx-auto px-4 py-5 lg:py-10">
        {isFetching ? (
          <Box className="flex flex-col justify-center items-center gap-3">
            <Skeleton
              variant="rectangular"
              className="rounded-xl max-w-[900px] w-full h-[350px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-xl max-w-[800px] w-full h-[30px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-xl max-w-[700px] w-full h-[30px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-xl max-w-[600px] w-full h-[30px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-xl max-w-[300px] w-full h-[30px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-xl max-w-[800px] w-full h-[30px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-xl max-w-[700px] w-full h-[30px]"
            />
          </Box>
        ) : (
          <Box
            dangerouslySetInnerHTML={{
              __html: howToUseChurchLogoData?.content,
            }}
          />
        )}
      </Box>
    </Layout>
  );
};

export default HowToUseChurchLogoDetail;
