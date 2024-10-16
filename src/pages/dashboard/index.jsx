import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import Layout from "../../components/common/Layout";
import useAutomaticScrollWithOffset from "../../hooks/useAutomaticScrollWithOffset";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import { useAppSelector } from "../../services/hook";
import Sidebar from "./components/Sidebar";

export const PrevArrow = ({ ...props }) => {
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

export const NextArrow = ({ ...props }) => {
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

export function CategoryCard({ category }) {
  const scrollWithOffset = useScrollWithOffset();

  const { title, thumbnail, route } = category;

  return (
    <HashLink
      className="text-center group relative"
      to={route}
      scroll={(el) => scrollWithOffset(el, 135)}
    >
      <Box>
        <Box className="overflow-hidden md:max-w-[355px] w-full">
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

export default function DashboardScreen() {
  useAutomaticScrollWithOffset();

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
    <Layout title="Dashboard">
      <Box id="dashboard" className="bg-section__bg_color">
        <Box className="max-w-[1024px] w-full h-full mx-auto px-4 py-5 lg:py-10">
          <Box className="flex flex-col lg:flex-row gap-5">
            <Sidebar />
            <Box className="flex-1">
              <Outlet />
            </Box>
          </Box>

          <Box className="w-full p-2">
            <Box className="flex flex-col gap-4 py-5">
              <Box className="flex items-center">
                <Box className="max-w-[165px] w-full">
                  <Typography variant="p">Upgrade your business</Typography>
                </Box>
                <Box className="border-t w-full flex-grow"></Box>
              </Box>
            </Box>
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
      </Box>
    </Layout>
  );
}
