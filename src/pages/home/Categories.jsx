import CategoryCard from "../../components/common/Cards/CategoryCard";

import SectionTitle from "../../components/common/SectionTitle";
import data from "../../data/categories.json";

export default function Categories() {
  return (
    <div className="bg-section__bg_color">
      <div className="container px-2 pt-[30px] pb-[60px]">
        <div className="px-2">
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
            <CategoryCard
              cardContainerClass="w-full h-full rounded-[30px] text-center group mb-6 lg:mb-6 xl:mb-0"
              imgClass="w-full h-full rounded-tl-[30px] rounded-tr-[30px] object-cover group-hover:scale-125 duration-500"
              contentClass="py-3 bg-white rounded-[30px] absolute w-full -bottom-6 text-brand__black__color font-brand__font__semibold group-hover:text-primary duration-300"
              key={d.id}
              route={d.route}
              category={d}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
