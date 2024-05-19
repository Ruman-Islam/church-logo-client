import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { getImgUrl } from "../../../utils/getImgUrl-utility";
import CustomLink from "../../UI/CustomLink";

export default function CategoryCard(props) {
  const { category, cardContainerClass, imgClass, contentClass, route } = props;
  const { img, title, alt } = category;

  return (
    <div className={cardContainerClass}>
      <CustomLink route={route}>
        <div className="relative">
          <div className="overflow-hidden rounded-tl-[30px] rounded-tr-[30px]">
            <img className={imgClass} src={getImgUrl(img)} alt={alt} />
          </div>
          <div className={contentClass}>
            <p>{title}</p>
            <div className="flex">
              <MdOutlineKeyboardArrowRight
                size={25}
                className="text-gray-400 group-hover:text-primary"
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
