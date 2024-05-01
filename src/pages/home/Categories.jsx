import SectionTitle from "../../components/common/SectionTitle";

import CatImg1 from "../../assets/image/category/cat2.jpeg";
import CatImg2 from "../../assets/image/category/cat3.jpeg";
import CatImg3 from "../../assets/image/category/cat4.jpeg";
import CatImg4 from "../../assets/image/category/cat5.jpeg";
import CategoryCard from "../../components/common/Cards/CategoryCard";

export default function Categories() {
  const categories = [
    { id: 1, img: CatImg1, title: "Logo & branding design", route: "/" },
    { id: 2, img: CatImg2, title: "Logo & branding design", route: "/" },
    { id: 3, img: CatImg3, title: "Logo & branding design", route: "/" },
    { id: 4, img: CatImg4, title: "Logo & branding design", route: "/" },
  ];

  return (
    <div className="bg-[#f3f2f0]">
      <div className="container px-2 py-[50px]">
        <div>
          <SectionTitle
            title="Design for what you need"
            titleClass="text-section__title__size leading-[35px] text-center"
          />
        </div>
        <br />
        <div className="flex flex-wrap justify-center gap-5">
          {categories.map((category) => (
            <CategoryCard
              cardContainerClass="max-w-[230px] w-full max-h-[210] h-full rounded-lg bg-white shadow"
              imgClass="w-full h-full rounded-tl-lg rounded-tr-lg"
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
