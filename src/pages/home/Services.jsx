import icon1 from "../../assets/gif/clock.gif";
import icon3 from "../../assets/gif/monitor.gif";
import icon2 from "../../assets/gif/paint-palette.gif";
import icon4 from "../../assets/gif/responsive.gif";
import ServiceCard from "../../components/common/Cards/ServiceCard";
import SectionTitle from "../../components/common/SectionTitle";

const services = [
  {
    id: 1,
    img: icon1,
    title: "Quick Turnaround",
    desc: "We understand that your time is valuable. We make sure your logo is delivered to you within 3 days.",
  },
  {
    id: 2,
    img: icon2,
    title: "Handmade by a Professional Artist",
    desc: "Our team of highly talented artists do this all day, and they're good at it!",
  },
  {
    id: 3,
    img: icon3,
    title: "FREE Revisions Risk Free",
    desc: "Want something changed? All Churchlogos come with three FREE revisions!",
  },
  {
    id: 4,
    img: icon4,
    title: "Desktop & Mobile Ready",
    desc: "Your Churchlogo will look great no matter what device you're on!",
  },
];

export default function Services() {
  return (
    <div className="bg-section__bg_color">
      <div className="container px-2 py-[30px] md:py-[60px]">
        <div>
          <SectionTitle
            title="What you get"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-[35px] text-center"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-5 md:mt-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
