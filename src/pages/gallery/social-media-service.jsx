import { Button, Skeleton } from "@mui/material";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout/index";
import SectionBanner from "../../components/common/SectionBanner";
import { galleryNavButtons } from "../../constants/gallery";
import useQueryParameter from "../../hooks/useQueryParameter";
import useTracking from "../../hooks/useTracking";
import { useGetGalleryImageQuery } from "../../services/features/gallery/galleryApi";

export default function GallerySocialMediaServiceScreen() {
  useTracking();
  const { pathname } = useLocation();
  const { dynamicUrl, handleShowMoreItems } = useQueryParameter({
    page: 1,
    limit: 9,
    sortBy: "serialId",
    sortOrder: 1,
    category: "social-media-service",
  });

  const { data, isFetching } = useGetGalleryImageQuery(dynamicUrl);
  const isVisibleMoreBtn = dynamicUrl.limit < data?.meta?.totalDocs;
  const gallery = data?.data;

  return (
    <Layout
      title="Church Logo Design Gallery - Browse Creative Custom Logos"
      description="Explore our gallery of unique, custom church logos. Get inspired by top designs for your church branding."
    >
      <section id="social-media-service">
        <SectionBanner heading="Gallery" desc="" />
        <div className="container px-4 flex flex-col gap-5 py-[20px]">
          <div className="max-w-[1024px] w-full mx-auto flex flex-wrap gap-3 py-5 justify-center md:justify-start">
            {galleryNavButtons.map((d) => (
              <HashLink
                key={d.id}
                to={d.route}
                className={`border hover:text-white hover:bg-brand__black__color hover:border-brand__black__color duration-300 rounded-md font-brand__font__600 px-4 lg:px-8 py-2 lg:py-3 text-brand__font__size__sm lg:text-[19px] ${
                  pathname && pathname.includes(d.match)
                    ? "bg-brand__black__color border-brand__black__color text-white"
                    : "border-text__gray text-text__gray"
                }`}
              >
                {d?.title}
              </HashLink>
            ))}
          </div>

          <PhotoProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 max-w-[1024px] w-full mx-auto gap-4">
              {(isFetching ? Array.from(new Array(dynamicUrl.limit)) : gallery)
                ?.slice(0, dynamicUrl.limit)
                .map((d, i) =>
                  d ? (
                    <PhotoView key={i} src={d?.urls[0].url}>
                      <img
                        data-aos="flip-left"
                        data-aos-duration={`${i + 1 * 5}00`}
                        src={d?.urls[0].url}
                        className="w-full h-full object-cover rounded-md hover:cursor-pointer border"
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
                {isFetching ? "Loading..." : "Load More"}
              </Button>
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}
