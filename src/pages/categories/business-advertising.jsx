import { Skeleton } from "@mui/material";
import { Fragment, useState } from "react";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import { useGetPackageListQuery } from "../../services/features/package/packageApi";
import "../../styles/categories.css";
import { getImgUrl } from "../../utils/getImgUrl-utility";
import CategoryBtn from "./components/CategoryBtn";
import OurClientsLovesUs from "./components/OurClientsLovesUs";
import PackageCard from "./components/PackageCard";
import WhyChurchLogo from "./components/WhyChurchLogo";

export default function CategoryPersonalSignatureScreen() {
  const [iconColors, setIconColors] = useState({});

  const [query] = useState({
    page: 1,
    limit: 100,
    sortBy: "serialId",
    sortOrder: 1,
    category: "business-advertising",
  });

  const { data, isLoading } = useGetPackageListQuery(query);
  const packages = data?.data ? data?.data : [];

  return (
    <Layout title="Categories">
      <section id="personal-signature" className="bg-white">
        <SectionBanner
          heading="Full business & advertising package for Your Church"
          desc="Transforming ideas into captivating visuals: our design services bring your brand to life!"
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
                          className="max-w-[550px] w-full h-[500px] object-cover p-5"
                          src={getImgUrl(
                            "image/home/portfolio/churchlogo_flyer_design.png"
                          )}
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
            </div>
          </div>
        </div>

        <div className="bg-section__bg_color">
          <WhyChurchLogo imgUrl="image/banner/churchlogo_print_use.png" />
        </div>

        <OurClientsLovesUs />
      </section>
    </Layout>
  );
}
