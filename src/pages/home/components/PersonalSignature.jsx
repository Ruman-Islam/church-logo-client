import { TiTick } from "react-icons/ti";
import { HashLink } from "react-router-hash-link";
import SectionTitle from "../../../components/common/SectionTitle";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";

export default function PersonalSignature({ data, loading }) {
  const scrollWithOffset = useScrollWithOffset();
  const { personalSignature: { title, thumbnail = [], points = [] } = {} } =
    data || {};

  return loading ? null : (
    <section className="bg-[#051f02]">
      <div className="container px-4 py-10">
        <div className="px-4">
          <SectionTitle
            title={title}
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-tight font-brand__font__600 text-center text-white"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-10">
          <div className="flex-1 flex justify-center items-center">
            <img src={thumbnail[0]?.url} alt="church_logo" />
          </div>
          <div className="flex-1 text-white">
            <ul className="flex flex-col gap-4 text-brand__font__size__md leading-tight">
              {points.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span>
                    <TiTick size={30} className="text-primary" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="duration-300 bg-primary hover:bg-brand__black__color rounded-full text-white w-fit mt-5 mx-auto md:ml-2">
              <HashLink
                className="px-8 py-2 w-full inline-block"
                to="/categories/logo-design#logo-design"
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                Order Now
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
