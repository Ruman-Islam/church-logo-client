import SectionTitle from "../../../components/common/SectionTitle";
import data from "../../../data/services.json";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

function ServiceCard(props) {
  const { service } = props;
  return (
    <div className="max-w-[300px] w-full max-h-full bg-transparent flex flex-col justify-center items-center rounded text-center duration-300 cursor-context-menu py-1.5 lg:py-5">
      <div className="w-full flex-1 p-1.5 lg:p-2.5">
        <img
          src={getImgUrl(service.img)}
          className="w-[45px] h-[45px] lg:w-[65px] lg:h-[65px] mx-auto"
        />
      </div>
      <div className="w-full text-brand__font__size__md px-2.5">
        <h2>{service.title}</h2>
      </div>
      <div className="w-full flex-1 flex flex-col items-center justify-center leading-tight mt-2 text-brand__font__size__sm px-5">
        <span>{service.desc[0]}</span>
        <span>{service.desc[1]}</span>
        <span>{service.desc[2]}</span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-brand__black__color">
      <div className="container px-2 py-[30px] md:py-[60px] text-white">
        <div>
          <SectionTitle
            title="What you get"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-tight font-brand__font__600 text-center text-center text-white"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {data.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
