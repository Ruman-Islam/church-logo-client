const RatingCard = (props) => {
  const { Icon, title, text } = props;
  return (
    <div className="basis-full md:basis-[48%] flex gap-2">
      <div>{Icon}</div>
      <div>
        <h2 className="font-brand__font__600 text-brand__font__size__md">
          {title}
        </h2>
        <p className="mt-2 text-text__gray">{text}</p>
      </div>
    </div>
  );
};

export default RatingCard;
