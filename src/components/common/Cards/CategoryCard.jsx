import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CustomLink from "../../UI/CustomLink";

export default function CategoryCard(props) {
  const { category, cardContainerClass, imgClass, contentClass, route } = props;
  const { img, title, alt } = category;

  return (
    <div className={cardContainerClass}>
      <CustomLink to={route}>
        <div className="relative">
          <div className="overflow-hidden rounded-tl-[30px] rounded-tr-[30px]">
            <img className={imgClass} src={img} alt={alt} />
          </div>
          <div className={contentClass}>
            <p>{title}</p>
            <div className="flex">
              <MdOutlineKeyboardArrowRight
                size={25}
                className="text-gray-400 group-hover:text-brand__light_green__color"
              />
              <MdOutlineKeyboardArrowRight
                size={25}
                className="text-brand__black__color group-hover:text-primary relative -translate-x-4"
              />
            </div>
          </div>
        </div>
      </CustomLink>
    </div>
  );
}
