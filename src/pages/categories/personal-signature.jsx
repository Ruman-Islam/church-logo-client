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
    category: "personal-signature",
  });

  const { data, isLoading } = useGetPackageListQuery(query);
  const packages = data?.data ? data?.data : [];

  return (
    <Layout title="Categories">
      <section id="personal-signature" className="bg-white">
        <SectionBanner
          heading="The Signature Collection"
          desc="A handcrafted, uniquely tailored signature logo to suit your unique
            personality."
        />

        <div className="container px-4 py-5">
          <CategoryBtn />
          <div className="p-5 md:mt-4">
            <div className="flex flex-wrap justify-center max-w-[1024px] w-full mx-auto">
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
                      <div className="basis-[100%] md:basis-[50%] w-full h-full">
                        <img
                          className="max-w-[550px] w-full h-[450px] object-cover p-5"
                          src={getImgUrl(
                            "image/package/churchlogo_website_design_2.png"
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
          <WhyChurchLogo imgUrl="image/banner/churchlogo_signature.png" />
        </div>

        <OurClientsLovesUs />
      </section>
    </Layout>
  );
}
