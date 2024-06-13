import { Button, Skeleton } from "@mui/material";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout/index";
import { galleryNavButtons } from "../../constants/gallery";
import { useGetGalleryLogoDesignQuery } from "../../services/features/gallery/galleryApi";
import { getImgUrl } from "../../utils/getImgUrl-utility";

export default function GalleryPersonalSignatureScreen() {
  const { pathname } = useLocation();
  const [dynamicUrl, setDynamicUrl] = useState({
    page: 1,
    limit: 8,
    searchTerm: "",
    collection: "logo-design",
  });
  const { data, isLoading } = useGetGalleryLogoDesignQuery(dynamicUrl);
  const isVisibleMoreBtn = dynamicUrl.limit < data?.meta?.total;
  const gallery = data?.data;

  const handleShowMoreItems = () => {
    setDynamicUrl((prev) => ({ ...prev, limit: prev.limit + 4 }));
  };

  return (
    <Layout title="Gallery & Examples">
      <section id="logo-design">
        <div className="bg-[url(https://photologo.co/wp-content/uploads/2022/08/hero-bg-min-scaled-1.jpg)] h-[150px] md:h-[200px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white">
          <h3 className="text-[37px]">Gallery</h3>
        </div>
        <div className="container px-2 flex flex-col gap-5 py-[30px] xl:py-[60px]">
          <div className="flex flex-wrap lg:justify-center items-center gap-2">
            {galleryNavButtons.map((d) => (
              <HashLink
                key={d.id}
                to={d.route}
                className={`border text-text__gray hover:text-white hover:bg-primary hover:border-primary duration-200 rounded-full font-brand__font__600 px-4 lg:px-6 py-1 lg:py-1.5 text-brand__font__size__xs lg:text-brand__font__size__sm ${
                  pathname && pathname.includes(d.match)
                    ? "bg-primary border-primary text-white"
                    : "border-text__gray"
                }`}
              >
                {d?.title}
              </HashLink>
            ))}
          </div>
          <PhotoProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 xl:md:grid-cols-4 gap-4 p-2">
              {(isLoading ? Array.from(new Array(dynamicUrl.limit)) : gallery)
                ?.slice(0, dynamicUrl.limit)
                .map((d, i) =>
                  d ? (
                    <PhotoView key={d?._id} src={getImgUrl(d?.url)}>
                      <img
                        data-aos="flip-left"
                        data-aos-duration={`${i + 1 * 5}00`}
                        src={getImgUrl(d?.url)}
                        className="w-full h-full object-cover rounded-md hover:cursor-pointer"
                      />
                    </PhotoView>
                  ) : (
                    <Skeleton key={i} variant="rectangular" height={218} />
                  )
                )}
            </div>
          </PhotoProvider>

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
