// import CategoryCard from "../../../components/common/Cards/CategoryCard";
import { Skeleton } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import SectionTitle from "../../../components/common/SectionTitle";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";

export function CategoryCard({ category }) {
  const scrollWithOffset = useScrollWithOffset();

  const { title, thumbnail, route } = category;

  return (
    <HashLink
      className="block text-center group relative"
      to={route}
      scroll={(el) => scrollWithOffset(el, 135)}
    >
      <div className="overflow-hidden rounded-[30px]">
        <img
          className="group-hover:scale-125 duration-500"
          src={thumbnail}
          alt="church_logo"
        />
      </div>
      <div className="py-3 bg-white rounded-[30px] absolute w-full bottom-0 text-brand__black__color font-brand__font__semibold group-hover:text-primary duration-300 shadow-md">
        <p>{title}</p>
      </div>
    </HashLink>
  );
}

export default function Categories({ data = {}, loading }) {
  const {
    categoryTitle = "",
    categoryDescription = "",
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
  } = data || {}; // Provide default values to avoid errors

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
    <div className="bg-section__bg_color">
      <div className="container px-4 pt-[30px] pb-[60px]">
        {loading ? (
          <div className="flex flex-col gap-2">
            <Skeleton
              variant="rectangular"
              className="rounded-md max-w-[600px] w-full h-[35px]"
            />
            <Skeleton
              variant="rectangular"
              className="rounded-md max-w-[800px] w-full h-[20px]"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-between mt-5">
              {Array.from(new Array(4)).map((_, idx) => (
                <Skeleton
                  key={idx}
                  variant="rectangular"
                  className="rounded-md w-full h-[200px] flex-grow"
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="px-4">
              <SectionTitle
                title={categoryTitle}
                titleClass="text-section__title__size xl:text-brand__font__size__xl leading-tight font-brand__font__600 text-center md:text-left text-text__gray"
              />
              <p className="font-brand__font__500 mt-2 text-center md:text-left text-gray-600">
                {categoryDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-between mt-5">
              {thumbnails
                .filter((item) => item.visibility)
                .map((item, idx) => (
                  <CategoryCard key={idx} category={item} />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
