import { getImgUrl } from "../../../utils/getImgUrl-utility";

export default function CustomersDoingCard(props) {
  const { content } = props;
  return (
    <div className="w-full h-full rounded-lg bg-white aspect-[1.3/1] text-center p-2">
      <div className="mb-3">
        <img
          src={getImgUrl(content.img)}
          alt=""
          className="rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <p className="leading-tight p-2 text-left shadow text-gray-500">
        <small>
          <em>
            #ilovephotologo “Awesome experience! I asked for a slight revision
            and you guys got it done ASAP. I love it!!! Thank you“
          </em>
        </small>
      </p>
    </div>
  );
}
