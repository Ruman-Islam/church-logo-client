import CloseIcon from "@mui/icons-material/Close";
import {
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
import Slider from "react-slick";
import Layout from "../../components/common/Layout/index";
import { galleryNavButtons } from "../../constants/gallery";
import { useGetGalleryImageQuery } from "../../services/features/gallery/galleryApi";
import { getImgUrl } from "../../utils/getImgUrl-utility";

import SectionBanner from "../../components/common/SectionBanner";
import slideData from "../../data/customersDoing.json";
import useQueryParameter from "../../hooks/useQueryParameter";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GalleryBrandingScreen() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { dynamicUrl, handleShowMoreItems } = useQueryParameter({
    page: 1,
    limit: 8,
    collection: "logo-design",
  });

  const { data, isLoading } = useGetGalleryImageQuery(dynamicUrl);
  const isVisibleMoreBtn = dynamicUrl.limit < data?.meta?.totalDocs;
  const gallery = data?.data;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Layout title="Gallery & Examples">
        <section id="branding">
          <SectionBanner heading="Gallery" desc="" />
          <div className="container px-4 flex flex-col gap-5 py-[20px]">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 xl:md:grid-cols-4 gap-4 p-2">
              {(isLoading ? Array.from(new Array(dynamicUrl.limit)) : gallery)
                ?.slice(0, dynamicUrl.limit)
                .map((d, i) =>
                  d ? (
                    <div key={d?._id} onClick={handleClickOpen}>
                      <img
                        data-aos="flip-left"
                        data-aos-duration={`${i + 1 * 5}00`}
                        src={getImgUrl(d?.url)}
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
                  Load More
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
      >
        <div className="bg-white h-full">
          <Toolbar className="flex justify-end border-b">
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <div className="max-w-[320px] sm:max-w-[550px] md:max-w-[750px] lg:max-w-[950px] w-full mx-auto py-10">
            <Slider {...settings}>
              {slideData.map((content) => (
                <div key={content.id} className="w-full h-[350px] md:h-[550px]">
                  <img
                    src={getImgUrl(content?.img)}
                    alt="church_logo"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="py-5 max-w-[320px] sm:max-w-[550px] md:max-w-[750px] lg:max-w-[950px] w-full mx-auto">
            <p className="text-brand__font__size__lg mb-2">
              <b>RentalCore</b> is a technology-based company. They make B2B
              rental management software for items like aerial lifts, not
              apartments.
            </p>
            <p className="text-brand__font__size__lg mb-2">
              <b>Logo Concept :</b> Core Concept + Technology Lines + Jelly Fish
              + Modern Trend.
            </p>
            <p className="text-brand__font__size__lg mb-2">
              <b>Logo Story :</b> I made the logo on 99designs for a contest in
              October 2016 (almost 4 years before). And the customer was so much
              happy that - I was selected as the winner before ending the final
              round. I know you can find many similar concepts with this one.
              But, this one is the original design. You can check the contest
              link here. Hopefully, you all guys will love it, And dont forget
              to submit an inspiring comment and a huge love/like here.
            </p>
          </div>
        </div>
      </Dialog>
    </>
  );
}
