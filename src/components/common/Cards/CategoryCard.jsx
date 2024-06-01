// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

export default function CategoryCard(props) {
  const { category, cardContainerClass, imgClass, contentClass, route } = props;
  const { img, title, alt } = category;

  return (
    <div className={cardContainerClass}>
      <HashLink to={route}>
        <div className="relative">
          <div className="overflow-hidden rounded-tl-[30px] rounded-tr-[30px]">
            <img className={imgClass} src={getImgUrl(img)} alt={alt} />
          </div>
          <div className={contentClass}>
            <p>{title}</p>
          </div>
        </div>
      </HashLink>
    </div>
  );
}
