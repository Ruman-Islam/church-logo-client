import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { FiChevronsRight } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner/index";
import SectionTitle from "../../components/common/SectionTitle";
import { useGetListQuery } from "../../services/features/howToUseChurchLogo/howToUseChurchLogoApi";
import { useAppSelector } from "../../services/hook";
import { CategoryCard, NextArrow, PrevArrow } from "../dashboard";
import { CustomersDoingCard } from "../home/components/CustomersDoing";

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
  const {
    system: { homeSettings },
  } = useAppSelector((state) => state);

  const {
    customersDoing: { title, slideImages = [] } = {},
    categoryLogoDesignThumbnail,
    categoryWebDesignThumbnail,
    categoryBrandingThumbnail,
    categoryPersonalSignatureThumbnail,
    categoryBusinessAdvertisingThumbnail,
    categorySocialMediaServiceThumbnail,
    categoryLogoDesignVisibility,
    categoryWebDesignVisibility,
    categoryBrandingVisibility,
    categoryPersonalSignatureVisibility,
    categoryBusinessAdvertisingVisibility,
    categorySocialMediaServiceVisibility,
  } = homeSettings || {};

  const thumbnails = [
    {
      title: "Logo Design",
      thumbnail: categoryLogoDesignThumbnail,
      visibility: categoryLogoDesignVisibility,
      route: "/categories/logo-design#logo-design",
    },
    {
      title: "Web Design",
      thumbnail: categoryWebDesignThumbnail,
      visibility: categoryWebDesignVisibility,
      route: "/categories/web-design#web-design",
    },
    {
      title: "Branding",
      thumbnail: categoryBrandingThumbnail,
      visibility: categoryBrandingVisibility,
      route: "/categories/branding#branding",
    },
    {
      title: "Personal Signature",
      thumbnail: categoryPersonalSignatureThumbnail,
      visibility: categoryPersonalSignatureVisibility,
      route: "/categories/personal-signature#personal-signature",
    },
    {
      title: "Business & Advertising",
      thumbnail: categoryBusinessAdvertisingThumbnail,
      visibility: categoryBusinessAdvertisingVisibility,
      route: "/categories/business-advertising#business-advertising",
    },
    {
      title: "Social Media Service",
      thumbnail: categorySocialMediaServiceThumbnail,
      visibility: categorySocialMediaServiceVisibility,
      route: "/categories/social-media-service#social-media-service",
    },
  ];

  const { data, isFetching } = useGetListQuery({
    refetchOnMountOrArgChange: true,
  });
  const list = data?.data || [];

  return (
    <Layout
      title="How to Use Your Church Logo - Effective Church Branding Tips"
      description="Learn how to properly use your church logo across all platforms. Get practical tips to enhance your branding and create a lasting impact."
    >
      <Box id="church">
        <SectionBanner
          heading="How to use your Church Logo"
          desc="Take your brand to the next level with these simple ways you can add your Church Logo® seamlessly into all your graphics and photos."
        />

        <Box className="py-5 lg:py-10 flex flex-col gap-10">
          <Box className="max-w-[1024px] w-full mx-auto flex flex-col gap-10 px-4">
            {(isFetching ? Array.from(new Array(3)) : list).map((item, idx) =>
              item ? (
                <Box
                  key={item?._id}
                  className={`w-full flex ${
                    idx % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  } items-center justify-between gap-2`}
                >
                  <Box className="basis-[100%] md:basis-[45%] w-full flex flex-col gap-4 text-text__gray">
                    <Box>
                      <Typography className="text-brand__font__size__md font-brand__font__semibold text-primary">
                        {item?.headTitle}
                      </Typography>
                      <Typography className="text-brand__font__size__md font-brand__font__semibold text-brand__black__color">
                        {item?.subTitle}
                      </Typography>
                    </Box>

                    <Typography
                      component="p"
                      className="text-brand__font__size__sm"
                      dangerouslySetInnerHTML={{
                        __html: item?.shortDesc,
                      }}
                    />
                    <HashLink
                      to={`/how-to-use-your-churchlogo/${item._id}`}
                      className="bg-primary hover:bg-brand__black__color text-white px-6 py-1 rounded-full font-brand__font__600 w-fit flex items-center gap-x-1"
                    >
                      <span>Learn More</span>
                      <FiChevronsRight />
                    </HashLink>
                  </Box>
                  <Box className="basis-[100%] md:basis-[45%] w-full rounded-lg">
                    <img
                      src={item?.thumbnail}
                      alt="church_logo"
                      className="w-full h-full rounded-lg"
                    />
                  </Box>
                </Box>
              ) : (
                <Box
                  key={idx}
                  className={`w-full flex ${
                    idx % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  } justify-between gap-5`}
                >
                  <Box className="basis-[100%] md:basis-[30%] w-full flex flex-col gap-4 text-text__gray">
                    <Skeleton variant="rounded" height={218} />
                  </Box>
                  <Box className="basis-[100%] md:basis-[70%] w-full rounded-lg flex flex-col gap-5">
                    <Skeleton variant="rounded" width={200} height={30} />
                    <Skeleton variant="rounded" width={350} height={20} />
                    <Skeleton variant="rounded" height={15} />
                  </Box>
                </Box>
              )
            )}

            {/* <Box className="w-full flex flex-row-reverse items-center justify-between gap-2">
              <Box className="basis-[100%] md:basis-[45%] w-full flex flex-col gap-4 text-text__gray">
                <Box>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-primary">
                    Photoshop
                  </Typography>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-brand__black__color">
                    How to apply your Church Logo in Photoshop
                  </Typography>
                </Box>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  In the world of digital art, Adobe Photoshop is undeniably the
                  industry standard. It’s the go-to tool for image editing and
                  photo retouching.
                </Typography>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Even though Photoshop wasn’t specifically designed for this,
                  you can still manually apply your Church Logo to your designs
                  using the available tools in Photoshop.
                </Typography>
                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Here’s a super simple step-by-step guide to help you out.
                </Typography>
                <HashLink
                  to="/how-to-use-your-churchlogo/photoshop"
                  className="bg-primary hover:bg-brand__black__color text-white px-6 py-1 rounded-full font-brand__font__600 w-fit flex items-center gap-x-1"
                >
                  <span>Learn More</span>
                  <FiChevronsRight />
                </HashLink>
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
                    LIGHTROOM
                  </Typography>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-brand__black__color">
                    How to apply your Church Logo in Lightroom
                  </Typography>
                </Box>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Adobe Lightroom is another great way to add your Church Logo
                  to photos and graphics. You can easily use the watermarking
                  feature in the app.
                </Typography>
                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  So, if you’re a Lightroom user but aren’t familiar with their
                  watermarking tool, here’s the simplest way to apply your
                  Church Logo in Lightroom.
                </Typography>
                <HashLink
                  to="/how-to-use-your-churchlogo/lightroom"
                  className="bg-primary hover:bg-brand__black__color text-white px-6 py-1 rounded-full font-brand__font__600 w-fit flex items-center gap-x-1"
                >
                  <span>Learn More</span>
                  <FiChevronsRight />
                </HashLink>
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
                    PHOTOPOLISH
                  </Typography>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-brand__black__color">
                    How To Apply Your Church Logo in Photopolish
                  </Typography>
                </Box>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Add your new logo with ease and save precious time by using
                  Photopolish. Photopolish is perfect if you want to add your
                  Church Logo to multiple photos quickly. You can use the bulk
                  watermarking feature to process all of your designs at once.
                </Typography>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Learn to apply your Church Logo in Photopolish like a pro with
                  this easy-to-follow four-step tutorial.
                </Typography>
                <HashLink
                  to="/how-to-use-your-churchlogo/photopolish"
                  className="bg-primary hover:bg-brand__black__color text-white px-6 py-1 rounded-full font-brand__font__600 w-fit flex items-center gap-x-1"
                >
                  <span>Learn More</span>
                  <FiChevronsRight />
                </HashLink>
              </Box>
              <Box className="basis-[100%] md:basis-[45%] w-full rounded-lg">
                <img
                  src={getImgUrl("image/banner/churchlogo_print_use.png")}
                  alt="church_logo"
                  className="w-full h-full rounded-lg"
                />
              </Box>
            </Box>

            <Box className="w-full flex flex-row items-center justify-between gap-2">
              <Box className="basis-[100%] md:basis-[45%] w-full flex flex-col gap-4 text-text__gray">
                <Box>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-primary">
                    APPLE WATCH
                  </Typography>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-brand__black__color">
                    Customize Your Apple Watch With Your Church Logo
                  </Typography>
                </Box>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  As you’ve seen, your Church Logo is incredibly versatile and
                  fits a wide range of uses. But there’s even more to explore.
                </Typography>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Customizing your watch is just one of the many ideas we
                  suggest to help you unlock the full potential and
                  possibilities that your Church Logo offers.
                </Typography>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Together, we’ll discover how to transform the face of your
                  watch, making it even more personal and unique.
                </Typography>
                <HashLink
                  to="/how-to-use-your-churchlogo/apple-watch"
                  className="bg-primary hover:bg-brand__black__color text-white px-6 py-1 rounded-full font-brand__font__600 w-fit flex items-center gap-x-1"
                >
                  <span>Learn More</span>
                  <FiChevronsRight />
                </HashLink>
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
                    MOBILE
                  </Typography>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-brand__black__color">
                    How To Use Your Church Logo on Your Mobile
                  </Typography>
                </Box>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Got a photo you want to share in a snap? Protect your valuable
                  work on the go! Adding your signature logo is a breeze. In
                  just a few seconds, you’ll be hitting that post button and
                  captivating your followers.
                </Typography>

                <HashLink
                  to="/how-to-use-your-churchlogo/mobile"
                  className="bg-primary hover:bg-brand__black__color text-white px-6 py-1 rounded-full font-brand__font__600 w-fit flex items-center gap-x-1"
                >
                  <span>Learn More</span>
                  <FiChevronsRight />
                </HashLink>
              </Box>
              <Box className="basis-[100%] md:basis-[45%] w-full rounded-lg">
                <img
                  src={getImgUrl("image/banner/churchlogo_print_use.png")}
                  alt="church_logo"
                  className="w-full h-full rounded-lg"
                />
              </Box>
            </Box>

            <Box className="w-full flex flex-row items-center justify-between gap-2">
              <Box className="basis-[100%] md:basis-[45%] w-full flex flex-col gap-4 text-text__gray">
                <Box>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-primary">
                    ANIMATED
                  </Typography>
                  <Typography className="text-brand__font__size__md font-brand__font__semibold text-brand__black__color">
                    How to apply your Animated Church Logo
                  </Typography>
                </Box>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  By itself, your Church Logo is already a work of art.
                </Typography>

                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  But why stop there? Let’s take that masterpiece and make it
                  even more impressive. It’s simple—just add one thing: motion.
                  Movement makes your logo more exciting and eye-catching.
                </Typography>
                <Typography
                  component="p"
                  className="text-brand__font__size__sm"
                >
                  Discover all the places you can use your Animated Church Logo
                  and the best applications to bring it to life
                </Typography>
                <HashLink
                  to="/how-to-use-your-churchlogo/animated"
                  className="bg-primary hover:bg-brand__black__color text-white px-6 py-1 rounded-full font-brand__font__600 w-fit flex items-center gap-x-1"
                >
                  <span>Learn More</span>
                  <FiChevronsRight />
                </HashLink>
              </Box>
              <Box className="basis-[100%] md:basis-[45%] w-full rounded-lg">
                <img
                  src={getImgUrl("image/banner/churchlogo_print_use.png")}
                  alt="church_logo"
                  className="w-full h-full rounded-lg"
                />
              </Box>
            </Box> */}
          </Box>

          <Box className="bg-section__bg_color py-10 px-4">
            <Box className="max-w-[1024px] w-full mx-auto slider-container">
              <SectionTitle
                title={title}
                titleClass="text-[22px] md:text-section__title__size xl:text-brand__font__size__xl leading-[30px] md:leading-[40px] xl:leading-[50px] font-brand__font__600 text-center text-center md:mb-5 text-text__gray max-w-[600px] xl:max-w-[1024px] mx-auto"
              />

              <Slider {...settings}>
                {slideImages.map((content, idx) => (
                  <CustomersDoingCard key={idx} slide={content} />
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
              {thumbnails
                .filter((item) => item.visibility)
                .map((item) => (
                  <CategoryCard
                    key={item.title}
                    route={item.route}
                    category={item}
                  />
                ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
