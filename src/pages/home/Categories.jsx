import SectionTitle from "../../components/common/SectionTitle";

import CatImg3 from "../../assets/image/category/churchlogo_branding.jpeg";
import CatImg1 from "../../assets/image/category/churchlogo_logodesign.jpg";
import CatImg4 from "../../assets/image/category/churchlogo_personal_signature.jpeg";
import CatImg2 from "../../assets/image/category/churchlogo_webdesign.jpeg";
import CategoryCard from "../../components/common/Cards/CategoryCard";

const categories = [
  {
    id: 1,
    img: CatImg1,
    title: "Logo Design",
    alt: "churchlogo_logodesign",
    route: "/",
  },
  {
    id: 2,
    img: CatImg2,
    title: "Web Design",
    alt: "churchlogo_webdesign",
    route: "/",
  },
  {
    id: 3,
    img: CatImg3,
    title: "Branding",
    alt: "churchlogo_branding",
    route: "/",
  },
  {
    id: 4,
    img: CatImg4,
    title: "Personal Signature",
    alt: "churchlogo_personal_signature",
    route: "/",
  },
];

export default function Categories() {
  return (
    <div className="bg-section__bg_color">
      <div className="container px-2 pb-[30px] md:pb-[70px] pt-[30px] md:pt-[50px]">
        <div className="px-2">
          <SectionTitle
            title="Design for what you need"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-tight"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ex.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-between mt-5">
          {categories.map((category) => (
            <CategoryCard
              cardContainerClass="w-full h-full rounded-[30px] text-center border mb-10 group"
              imgClass="w-full h-full rounded-tl-[30px] rounded-tr-[30px] object-cover group-hover:scale-125 duration-500"
              contentClass="py-5 bg-white rounded-[30px] absolute w-full -bottom-11 text-brand__font__size__md text-brand__black__color font-brand__font__semibold group-hover:text-primary duration-300 flex justify-center items-center"
              key={category.id}
              route={category.route}
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
