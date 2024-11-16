import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Skeleton,
  Slide,
  Toolbar,
} from "@mui/material";
import { forwardRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout/index";
import SectionBanner from "../../components/common/SectionBanner";
import { galleryNavButtons } from "../../constants/gallery";
import useQueryParameter from "../../hooks/useQueryParameter";
import useTracking from "../../hooks/useTracking";
import { useGetGalleryImageQuery } from "../../services/features/gallery/galleryApi";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GalleryBrandingScreen() {
  useTracking();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const { dynamicUrl, handleShowMoreItems } = useQueryParameter({
    page: 1,
    limit: 9,
    sortBy: "serialId",
    sortOrder: 1,
    category: "branding",
  });

  const { data, isFetching } = useGetGalleryImageQuery(dynamicUrl);
  const isVisibleMoreBtn = dynamicUrl.limit < data?.meta?.totalDocs;
  const gallery = data?.data;

  const handleClickOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Layout
        title="Church Logo Design Gallery - Browse Creative Custom Logos"
        description="Explore our gallery of unique, custom church logos. Get inspired by top designs for your church branding."
      >
        <section id="branding">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 max-w-[1024px] w-full mx-auto gap-4">
              {(isFetching ? Array.from(new Array(dynamicUrl.limit)) : gallery)
                ?.slice(0, dynamicUrl.limit)
                .map((d, i) =>
                  d ? (
                    <div key={i} onClick={() => handleClickOpen(d)}>
                      <img
                        data-aos="flip-left"
                        data-aos-duration={`${i + 1 * 5}00`}
                        src={d?.urls[0].url}
                        className="w-full h-full object-cover rounded-md hover:cursor-pointer border"
                      />
                    </div>
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
                  {isFetching ? "Loading..." : "Load More"}
                </Button>
              </div>
            ) : null}
          </div>
        </section>
      </Layout>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        }}
      >
        <Box className="h-full relative">
          <Toolbar
            className="flex justify-end fixed
          top-0 right-2 z-10"
          >
            <IconButton
              edge="end"
              className="text-white bg-brand__black__color bg-opacity-50"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>

          <Box className="max-w-[1280px] mx-auto px-2 md:px-0">
            <Box className="flex flex-col items-center">
              {selectedImage?.urls?.length &&
                selectedImage?.urls.map((d, i) => (
                  <Box
                    key={i}
                    className={`w-full ${
                      selectedImage.showBorder ? "border-b" : "border-b-0"
                    }`}
                  >
                    <img src={d?.url} className="w-full" />
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
