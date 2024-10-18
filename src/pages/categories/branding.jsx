import { Skeleton } from "@mui/material";
import { Fragment, useState } from "react";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import useTracking from "../../hooks/useTracking";
import { useGetPackageListQuery } from "../../services/features/package/packageApi";
import "../../styles/categories.css";
import CategoryBtn from "./components/CategoryBtn";
import OurClientsLovesUs from "./components/OurClientsLovesUs";
import PackageCard from "./components/PackageCard";
import WhyChurchLogo from "./components/WhyChurchLogo";

export default function CategoryBrandingScreen() {
  useTracking();
  const [iconColors, setIconColors] = useState({});

  const [query] = useState({
    page: 1,
    limit: 100,
    sortBy: "serialId",
    sortOrder: 1,
    category: "branding",
  });

  const { data, isLoading } = useGetPackageListQuery(query);
  const packages = data?.data || [];
  const meta = data?.meta?.systemData || {};

  return (
    <Layout
      title="Branding - Complete Church Branding Solutions for Growth"
      description="Strengthen your church’s identity with cohesive branding. From logos to marketing materials, we create a consistent and impactful brand."
    >
      <section id="branding" className="bg-white">
        <SectionBanner
          heading="The complete brand identity package for Your Church"
          desc="Unlock Your Brand’s Potential: Elevate Your Online Presence with Our Expert Design Services!"
        />

        <div className="container px-4 py-5">
          <CategoryBtn />
          <div className="p-5 md:mt-4">
            <div
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
                      <div className="basis-[100%] md:basis-[50%] md:border-b w-full h-full">
                        <img
                          className="max-w-[550px] w-full h-[450px] object-cover p-5"
                          src={meta?.brandingThumbnail}
                          alt=""
                        />
                      </div>
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
              {/* <div className="block md:border-t px-5 py-10 basis-[100%] md:basis-[50%]"></div> */}
            </div>
          </div>
        </div>

        <div className="bg-section__bg_color">
          <WhyChurchLogo imgUrl="image/home/portfolio/churchlogo_business_card.png" />
        </div>

        <OurClientsLovesUs />
      </section>
    </Layout>
  );
}
