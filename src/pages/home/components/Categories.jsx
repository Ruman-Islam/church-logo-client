// import CategoryCard from "../../../components/common/Cards/CategoryCard";

import { HashLink } from "react-router-hash-link";
import SectionTitle from "../../../components/common/SectionTitle";
import data from "../../../data/categories.json";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

function CategoryCard(props) {
  const scrollWithOffset = useScrollWithOffset();
  const { category, route } = props;
  const { img, title, alt } = category;

  return (
    <HashLink
      className="block text-center group relative"
      to={route}
      scroll={(el) => scrollWithOffset(el, 135)}
    >
      <div className="overflow-hidden rounded-[30px]">
        <img
          className="group-hover:scale-125 duration-500"
          src={getImgUrl(img)}
          alt={alt}
        />
      </div>
      <div className="py-3 bg-white rounded-[30px] absolute w-full bottom-0 text-brand__black__color font-brand__font__semibold group-hover:text-primary duration-300 shadow-md">
        <p>{title}</p>
      </div>
    </HashLink>
  );
}

export default function Categories() {
  return (
    <div className="bg-section__bg_color">
      <div className="container px-4 pt-[30px] pb-[60px]">
        <div className="px-4">
          <SectionTitle
            title="Design for what you need"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-tight font-brand__font__600 text-center md:text-left text-text__gray"
          />
          <p className="font-brand__font__500 mt-2 text-center md:text-left text-gray-600">
            For your specific need and particular service details check out our
            following dynamic, creative and professional services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-between mt-5">
          {data.map((d) => (
            <CategoryCard key={d.id} route={d.route} category={d} />
          ))}
        </div>
      </div>
    </div>
  );
}
