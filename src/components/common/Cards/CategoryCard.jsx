import CustomLink from "../../UI/CustomLink";

export default function CategoryCard(props) {
  const { category, cardContainerClass, imgClass, route } = props;
  const { img, title } = category;

  return (
    <div className={cardContainerClass ? cardContainerClass : ""}>
      <CustomLink to={route}>
        <img className={imgClass ? imgClass : ""} src={img} alt="" />
        <div className="p-3">
          <p>{title}</p>
        </div>
      </CustomLink>
    </div>
  );
}
