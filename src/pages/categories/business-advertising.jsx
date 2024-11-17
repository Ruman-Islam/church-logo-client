import { Box, Skeleton } from "@mui/material";
import { Fragment, useState } from "react";
import Layout from "../../components/common/Layout";
import OurClientsLovesUs from "../../components/common/OurClientsLovesUs";
import SectionBanner from "../../components/common/SectionBanner";
import WhyChurchLogo from "../../components/common/WhyChurchLogo";
import useTracking from "../../hooks/useTracking";
import { useGetPackageListQuery } from "../../services/features/package/packageApi";
import { useAppSelector } from "../../services/hook.js";
import "../../styles/categories.css";
import CategoryBtn from "./components/CategoryBtn";
import PackageCard from "./components/PackageCard";

export default function CategoryPersonalSignatureScreen() {
  useTracking();

  const {
    system: { categorySettings },
  } = useAppSelector((state) => state);

  const [iconColors, setIconColors] = useState({});

  const [query] = useState({
    page: 1,
    limit: 100,
    sortBy: "serialId",
    sortOrder: 1,
    category: "business-advertising",
  });

  const { data, isLoading } = useGetPackageListQuery(query);
  const packages = data?.data || [];

  return (
    <Layout
      title="Business & Advertising - Boost Your Church's Visibility"
      description="Get professional business and advertising solutions to enhance your church’s outreach. Build brand awareness with impactful marketing materials."
    >
      <Box id="personal-signature" className="bg-white">
        <SectionBanner
          heading="Full business & advertising package for Your Church"
          desc="Transforming ideas into captivating visuals: our design services bring your brand to life!"
        />

        <Box className="container px-4 py-5">
          <CategoryBtn />
          <Box className="p-5 md:mt-4">
            <Box
              className={`flex flex-wrap max-w-[1024px] w-full mx-auto ${
                isLoading && "justify-center"
              }`}
            >
              {(isLoading ? Array.from(new Array(9)) : packages).map((pg, i) =>
                pg ? (
                  packages.length > 3 && i === 2 ? (
                    <Fragment key={pg?.packageId}>
                      <PackageCard
                        i={i}
                        pg={pg}
                        iconColors={iconColors}
                        setIconColors={setIconColors}
                      />
                      <Box className="basis-[100%] md:basis-[50%] md:border-b w-full h-full">
                        <img
                          className="max-w-[550px] w-full h-[500px] object-cover p-5"
                          src={categorySettings?.businessAdvertisingThumbnail}
                          alt=""
                        />
                      </Box>
                    </Fragment>
                  ) : (
                    <PackageCard
                      i={i}
                      key={pg?.packageId}
                      pg={pg}
                      iconColors={iconColors}
                      setIconColors={setIconColors}
                    />
                  )
                ) : (
                  <Skeleton
                    sx={{ margin: 1 }}
                    key={i}
                    variant="rectangular"
                    width={300}
                    height={218}
                  />
                )
              )}
            </Box>
          </Box>
        </Box>

        <Box className="bg-section__bg_color">
          <WhyChurchLogo
            imgUrl={categorySettings?.businessAdvertisingThumbnail2}
          />
        </Box>

        <OurClientsLovesUs />
      </Box>
    </Layout>
  );
}
