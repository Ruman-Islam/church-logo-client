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
    category: "personal-signature",
  });

  const { data, isLoading } = useGetPackageListQuery(query);
  const packages = data?.data || [];

  return (
    <Layout
      title="Personal Signature - Custom Signature Logos for a Personal Touch"
      description="Design a custom personal signature logo that reflects your unique identity. Perfect for inBoxiduals or ministries seeking a distinctive look."
    >
      <Box id="personal-signature" className="bg-white">
        <SectionBanner
          heading="The complete signature logo package for Your Church"
          desc="Designing bespoke logos and personal signatures that resonate with your brand’s essence."
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
                          className="max-w-[550px] w-full h-[450px] object-cover p-5"
                          src={categorySettings?.personalSignatureThumbnail}
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
            imgUrl={categorySettings?.personalSignatureThumbnail2}
          />
        </Box>

        <OurClientsLovesUs />
      </Box>
    </Layout>
  );
}
