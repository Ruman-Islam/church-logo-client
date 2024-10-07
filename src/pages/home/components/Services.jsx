import { Skeleton } from "@mui/material";
import SectionTitle from "../../../components/common/SectionTitle";

function ServiceCard({ service = {} }) {
  return (
    <div className="max-w-[300px] w-full max-h-full bg-transparent flex flex-col justify-center items-center rounded text-center duration-300 cursor-context-menu py-1.5 lg:py-5">
      <div className="w-full flex-1 p-1.5 lg:p-2.5">
        <img
          src={service?.thumbnail[0]?.url}
          className="w-[45px] h-[45px] lg:w-[65px] lg:h-[65px] mx-auto"
        />
      </div>
      <div className="w-full text-brand__font__size__md px-4.5">
        <h2>{service?.title}</h2>
      </div>
      <div className="w-full flex-1 flex flex-col items-center justify-center leading-tight mt-2 text-brand__font__size__sm px-5">
        <p className="line-clamp-3 overflow-hidden text-ellipsis">
          {service?.description}
        </p>
      </div>
    </div>
  );
}

export default function Services({ data = {}, loading }) {
  const { service = {} } = data;
  const services = service.services || [];

  return loading ? (
    <div>
      <div className="container px-4 py-[30px] md:py-[60px] text-white">
        <Skeleton
          variant="rectangular"
          className="rounded-md max-w-[400px] w-full h-[35px] mx-auto"
        />

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {Array.from(new Array(4)).map((item, idx) => (
            <Skeleton
              key={idx}
              variant="rectangular"
              className="rounded-md max-w-[300px] w-full h-[200px] mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-brand__black__color">
      <div className="container px-4 py-[30px] md:py-[60px] text-white">
        <div>
          <SectionTitle
            title="What you get"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-tight font-brand__font__600 text-center text-center text-white"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
