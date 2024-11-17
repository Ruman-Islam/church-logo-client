import { Box } from "@mui/material";
import { BiSolidChevronsRight } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import fatherImage from "../../assets/image/banner/churchlogo_signature.png";
import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import { useAppSelector } from "../../services/hook";

const PrevArrow = ({ ...props }) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      className="absolute top-[40%] -left-[6px] text-primary duration-300 hover:cursor-pointer rounded-full flex items-center justify-start z-50 bg-white p-2 border"
    >
      <FaArrowLeft size={18} />
    </Box>
  );
};

const NextArrow = ({ ...props }) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      className="absolute top-[40%] -right-[13px] text-primary duration-300 hover:cursor-pointer rounded-full flex items-center justify-start z-50 bg-white p-2 border"
    >
      <FaArrowRight size={18} />
    </Box>
  );
};

function CategoryCard({ category }) {
  const scrollWithOffset = useScrollWithOffset();

  const { title, thumbnail, route } = category;

  return (
    <HashLink
      className="text-center group relative"
      to={route}
      scroll={(el) => scrollWithOffset(el, 135)}
    >
      <Box>
        <Box className="overflow-hidden md:max-w-[420px] w-full">
          <img
            className="group-hover:scale-125 duration-500 w-full h-full"
            src={thumbnail}
            alt="church_logo"
          />
        </Box>
        <Box className="py-2 bg-white w-full text-text__gray font-brand__font__semibold group-hover:text-primary duration-300 border text-brand__font__size__sm md:text-brand__font__size__base">
          <p>{title}</p>
        </Box>
      </Box>
    </HashLink>
  );
}

const settings = {
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

const AboutUsScreen = () => {
  const {
    system: { homeSettings },
  } = useAppSelector((state) => state);

  const {
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

  return (
    <Layout title="Contact Us" description="">
      <Box id="about-us">
        <SectionBanner heading="About Us" desc="" />

        <Box className="max-w-[1024px] w-full mx-auto px-4 py-[30px]">
          <Box className="flex flex-col gap-20">
            <Box className="flex flex-col gap-5">
              <Box className="flex justify-between items-center gap-5">
                <Box className="w-full flex flex-col gap-5">
                  <Box className="flex flex-col gap-5">
                    <p className="text-brand__font__size__lg2 font-brand__font__semibold leading-tight">
                      We’re a global stakeholder relations and consultancy.
                    </p>
                    <p>
                      At vero eos et accusamus et iusto odio digni goiku sendeno
                      ssimos ducimus qui blanditiis praese. Ntium voluum
                      deleniti atque corrupti quos.
                    </p>
                    <p>
                      We bring more than 24 years’ senior experience forging of
                      collaborations across government.
                    </p>
                  </Box>
                  <Box className="grid grid-cols-2 gap-5">
                    <span className="flex items-center gap-x-2">
                      <BiSolidChevronsRight /> Praesent feugiat sem.
                    </span>
                    <span className="flex items-center gap-x-2">
                      <BiSolidChevronsRight /> A wonderful serenity.
                    </span>
                    <span className="flex items-center gap-x-2">
                      <BiSolidChevronsRight /> Premium services for you.
                    </span>
                    <span className="flex items-center gap-x-2">
                      <BiSolidChevronsRight /> Set a link back to photo.
                    </span>
                    <span className="flex items-center gap-x-2">
                      <BiSolidChevronsRight /> Premium services for you.
                    </span>
                    <span className="flex items-center gap-x-2">
                      <BiSolidChevronsRight /> A wonderful serenity.
                    </span>
                  </Box>
                </Box>
                <Box className="w-full">
                  <img src={fatherImage} alt="" />
                </Box>
              </Box>
            </Box>

            <Box className="flex flex-col gap-5">
              <Box className="flex items-center gap-x-5">
                <Box className="h-1 bg-primary w-[50px]"></Box>
                <Box>Pricing</Box>
              </Box>
              <Box>
                <Box className="w-full text-brand__font__size__lg2 font-brand__font__semibold leading-tight">
                  <p>We’re ready to share </p> <p>our advice and experience.</p>
                </Box>
              </Box>
              <Box className="mt-5">
                <Slider {...settings}>
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

            <Box></Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default AboutUsScreen;
