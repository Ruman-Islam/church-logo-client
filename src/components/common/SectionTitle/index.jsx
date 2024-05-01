export default function SectionTitle(props) {
  const { title, sectionClass, titleClass, shapeImg } = props;
  return (
    <div className={sectionClass ? sectionClass : "text-brand__black__color"}>
      <h2 className={titleClass ? titleClass : "text-section__title__size"}>
        {title}
      </h2>
      {shapeImg ? <img src={shapeImg} alt="image" /> : null}
    </div>
  );
}
