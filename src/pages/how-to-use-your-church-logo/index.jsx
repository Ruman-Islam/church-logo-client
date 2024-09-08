import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner/index";
import SectionTitle from "../../components/common/SectionTitle";
import categoryData from "../../data/categories.json";
import data from "../../data/customersDoing.json";
import { getImgUrl } from "../../utils/getImgUrl-utility";
import { CategoryCard, NextArrow, PrevArrow } from "../dashboard";
import Card from "./components/Card";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  arrows: false,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const settings2 = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  draggable: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function HowToUseYourChurchLogoScreen() {
  return (
    <Layout title="How to use your church logo">
      <Box id="church">
        <SectionBanner
          heading="How to Use your Church Logo"
          desc="Take your brand to the next level with these simple ways you can add your Church Logo® seamlessly into all your graphics and photos."
        />

        <Box className="py-5 lg:py-10 flex flex-col gap-10">
          <Box className="max-w-[1024px] w-full mx-auto flex flex-col px-4">
            <Box className="w-full flex items-center justify-between gap-2">
              <Box className="basis-[100%] md:basis-[45%] w-full flex flex-col gap-4 text-text__gray">
                <Box>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-primary">
                    CANVA
                  </Typography>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-brand__black__color">
                    How to Apply Your Church Logo® with Canva
                  </Typography>
                </Box>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Canva is one of the most beginner-friendly tools out there. It
                  has an impressive array of graphic design tools available on
                  the web. Plus, it’s also available on Android and iOS. You can
                  use it to DIY everything from slideshows to social media
                  posts.{" "}
                </Typography>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  In this guide, we’ll show you how to apply your Church Logo
                  using Canva in 5 easy steps
                </Typography>
              </Box>
              <Box className="basis-[100%] md:basis-[45%] w-full rounded-lg">
                <img
                  src={getImgUrl("image/banner/churchlogo_print_use.png")}
                  alt="church_logo"
                  className="w-full h-full rounded-lg"
                />
              </Box>
            </Box>
            <Box className="w-full flex flex-row-reverse items-center justify-between gap-2">
              <Box className="basis-[100%] md:basis-[45%] w-full flex flex-col gap-4 text-text__gray">
                <Box>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-primary">
                    CANVA
                  </Typography>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-brand__black__color">
                    How to Apply Your Church Logo® with Canva
                  </Typography>
                </Box>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Canva is one of the most beginner-friendly tools out there. It
                  has an impressive array of graphic design tools available on
                  the web. Plus, it’s also available on Android and iOS. You can
                  use it to DIY everything from slideshows to social media
                  posts.{" "}
                </Typography>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  In this guide, we’ll show you how to apply your Church Logo
                  using Canva in 5 easy steps
                </Typography>
              </Box>
              <Box className="basis-[100%] md:basis-[45%] w-full rounded-lg">
                <img
                  src={getImgUrl("image/banner/churchlogo_print_use.png")}
                  alt="church_logo"
                  className="w-full h-full rounded-lg"
                />
              </Box>
            </Box>
            <Box className="w-full flex items-center justify-between gap-2">
              <Box className="basis-[100%] md:basis-[45%] w-full flex flex-col gap-4 text-text__gray">
                <Box>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-primary">
                    CANVA
                  </Typography>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-brand__black__color">
                    How to Apply Your Church Logo® with Canva
                  </Typography>
                </Box>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Canva is one of the most beginner-friendly tools out there. It
                  has an impressive array of graphic design tools available on
                  the web. Plus, it’s also available on Android and iOS. You can
                  use it to DIY everything from slideshows to social media
                  posts.{" "}
                </Typography>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  In this guide, we’ll show you how to apply your Church Logo
                  using Canva in 5 easy steps
                </Typography>
              </Box>
              <Box className="basis-[100%] md:basis-[45%] w-full rounded-lg">
                <img
                  src={getImgUrl("image/banner/churchlogo_print_use.png")}
                  alt="church_logo"
                  className="w-full h-full rounded-lg"
                />
              </Box>
            </Box>
            <Box className="w-full flex flex-row-reverse items-center justify-between gap-2">
              <Box className="basis-[100%] md:basis-[45%] w-full flex flex-col gap-4 text-text__gray">
                <Box>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-primary">
                    CANVA
                  </Typography>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-brand__black__color">
                    How to Apply Your Church Logo® with Canva
                  </Typography>
                </Box>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Canva is one of the most beginner-friendly tools out there. It
                  has an impressive array of graphic design tools available on
                  the web. Plus, it’s also available on Android and iOS. You can
                  use it to DIY everything from slideshows to social media
                  posts.{" "}
                </Typography>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  In this guide, we’ll show you how to apply your Church Logo
                  using Canva in 5 easy steps
                </Typography>
              </Box>
              <Box className="basis-[100%] md:basis-[45%] w-full rounded-lg">
                <img
                  src={getImgUrl("image/banner/churchlogo_print_use.png")}
                  alt="church_logo"
                  className="w-full h-full rounded-lg"
                />
              </Box>
            </Box>
          </Box>

          <Box className="bg-section__bg_color py-10 px-4">
            <Box className="max-w-[1024px] w-full mx-auto slider-container">
              <SectionTitle
                title="See How Other Professionals Are Using Their Church Logos"
                titleClass="text-[22px] md:text-section__title__size xl:text-brand__font__size__xl leading-[30px] md:leading-[40px] xl:leading-[50px] font-brand__font__600 text-center text-center md:mb-5 text-text__gray max-w-[600px] xl:max-w-[1024px] mx-auto"
              />

              <Slider {...settings}>
                {data.map((content) => (
                  <Card key={content.id} content={content} />
                ))}
              </Slider>
            </Box>
          </Box>

          <Box className="max-w-[1024px] w-full mx-auto slider-container px-4">
            <Box className="flex flex-col gap-4 py-5">
              <Box className="flex items-center">
                <Box className="max-w-[165px] w-full">
                  <Typography variant="p">Upgrade your business</Typography>
                </Box>
                <Box className="border-t w-full flex-grow"></Box>
              </Box>
            </Box>
            <Slider {...settings2}>
              {categoryData.map((d) => (
                <CategoryCard key={d.id} route={d.route} category={d} />
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
