import icon1 from "../../assets/gif/clock.gif";
import icon3 from "../../assets/gif/monitor.gif";
import icon2 from "../../assets/gif/paint-palette.gif";
import icon4 from "../../assets/gif/responsive.gif";
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
      <div className="container px-2 py-[50px]">
        <div>
          <SectionTitle
            title="What you get"
            titleClass="text-brand__font__size__xl leading-[35px] text-center"
          />
        </div>
        <br />
        <br />
        <div className="flex flex-wrap justify-center gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="max-w-[300px] xl:max-w-[250px] w-full max-h-full bg-white flex flex-col justify-center items-center rounded p-10 shadow"
            >
              <div className="max-w-[40px] w-full mb-3 flex-1">
                <img src={service.img} />
              </div>
              <div className="text-center flex-1">
                <h2>{service.title}</h2>
                <p className="leading-tight mt-2">
                  <small>{service.desc}</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
