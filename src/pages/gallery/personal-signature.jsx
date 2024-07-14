import { Button, Skeleton } from "@mui/material";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout/index";
import { galleryNavButtons } from "../../constants/gallery";
import useQueryParameter from "../../hooks/useQueryParameter";
import { useGetGalleryImageQuery } from "../../services/features/gallery/galleryApi";
import { getImgUrl } from "../../utils/getImgUrl-utility";

export default function GalleryPersonalSignatureScreen() {
  const { pathname } = useLocation();
  const { dynamicUrl, handleShowMoreItems } = useQueryParameter({
    page: 1,
    limit: 8,
    collection: "logo-design",
  });

  const { data, isLoading } = useGetGalleryImageQuery(dynamicUrl);
  const isVisibleMoreBtn = dynamicUrl.limit < data?.meta?.totalDocs;
  const gallery = data?.data;

  return (
    <Layout title="Gallery & Examples">
      <section id="personal-signature">
        <div className="bg-page_bg h-[150px] lg:h-[200px] xl:h-[300px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white text-center leading-tight py-2">
          <h3 className="text-[37px]">Gallery</h3>
        </div>
        <div className="container px-2 flex flex-col gap-5 py-[20px]">
          <div className="flex flex-wrap xl:justify-center items-center gap-3 py-5">
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
