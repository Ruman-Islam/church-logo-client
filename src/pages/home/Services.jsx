import ServiceCard from "../../components/common/Cards/ServiceCard";
import SectionTitle from "../../components/common/SectionTitle";
import data from "../../data/services.json";

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
