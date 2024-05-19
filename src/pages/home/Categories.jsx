import CategoryCard from "../../components/common/Cards/CategoryCard";
import SectionTitle from "../../components/common/SectionTitle";
import data from "../../data/categories.json";

export default function Categories() {
  return (
    <div className="bg-section__bg_color">
      <div className="container px-2 pb-[30px] md:pb-[50px] pt-[30px] md:pt-[50px]">
        <div className="px-2">
          <SectionTitle
            title="Design for what you need"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-tight"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ex.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-between mt-5">
          {data.map((d) => (
            <CategoryCard
              cardContainerClass="w-full h-full rounded-[30px] text-center mb-10 group"
              imgClass="w-full h-full rounded-tl-[30px] rounded-tr-[30px] object-cover group-hover:scale-125 duration-500"
              contentClass="py-3 bg-white rounded-[30px] absolute w-full -bottom-6 text-brand__font__size__md text-brand__black__color font-brand__font__semibold group-hover:text-primary duration-300 flex justify-center items-center border"
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
