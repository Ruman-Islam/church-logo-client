import { HashLink } from "react-router-hash-link";
import { categoryNavButtons } from "../../../constants/category";
import { useLocation } from "react-router-dom";

const CategoryBtn = () => {
    const { pathname } = useLocation();

  return (
    <div className="flex flex-wrap max-w-[1024px] w-full mx-auto xl:justify-start items-center gap-3 pt-5">
      {categoryNavButtons.map((d) => (
        <HashLink
          key={d.id}
          to={d.route}
          className={`border hover:text-white hover:bg-brand__black__color hover:border-brand__black__color duration-300 rounded-md font-brand__font__600 px-4 lg:px-8 py-2 lg:py-3 text-brand__font__size__sm lg:text-[19px] flex-grow md:flex-grow-0 text-center ${
            pathname && pathname.includes(d.match)
              ? "bg-brand__black__color border-brand__black__color text-white"
              : "border-text__gray text-text__gray"
          }`}
        >
          {d?.title}
        </HashLink>
      ))}
    </div>
  );
};

export default CategoryBtn;
