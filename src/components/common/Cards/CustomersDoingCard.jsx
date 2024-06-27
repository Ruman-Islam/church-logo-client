import { getImgUrl } from "../../../utils/getImgUrl-utility";

export default function CustomersDoingCard(props) {
  const { content } = props;
  return (
    <div className="w-full h-full rounded-lg bg-white aspect-[1.3/1] text-center p-2">
      <div className="mb-2">
        <img
          src={getImgUrl(content?.img)}
          alt=""
          className="rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <p className="leading-tight p-2 text-left shadow text-gray-500 h-[80px]">
        <small>
          <em>
            <span>{content?.hashTag}</span> <span>{content?.title}</span>
          </em>
        </small>
      </p>
    </div>
  );
}
