import { getImgUrl } from "../../../utils/getImgUrl-utility";

export default function ServiceCard(props) {
  const { service } = props;
  return (
    <div className="max-w-[300px] w-full max-h-full bg-transparent flex flex-col justify-center items-center rounded text-center duration-300 cursor-context-menu py-5">
      <div className="w-full flex-1 p-2.5">
        <img
          src={getImgUrl(service.img)}
          className="w-[65px] h-[65px] mx-auto"
        />
      </div>
      <div className="w-full text-brand__font__size__md px-2.5">
        <h2>{service.title}</h2>
      </div>
      <div className="w-full flex-1 leading-tight mt-2 text-brand__font__size__sm px-5">
        {service.desc}
      </div>
    </div>
  );
}
