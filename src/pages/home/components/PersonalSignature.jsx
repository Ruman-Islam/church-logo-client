import { TiTick } from "react-icons/ti";
import { HashLink } from "react-router-hash-link";
import SectionTitle from "../../../components/common/SectionTitle";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

export default function PersonalSignature() {
  const scrollWithOffset = useScrollWithOffset();

  return (
    <section className="bg-[#051f02]">
      <div className="container px-4 py-10">
        <div className="px-4">
          <SectionTitle
            title="Is a Signature Church Logo for you?"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-tight font-brand__font__600 text-center text-white"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-10">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={getImgUrl("image/banner/churchlogo_signature.png")}
              alt="church_logo"
            />
          </div>
          <div className="flex-1 text-white">
            <ul className="flex flex-col gap-4 text-brand__font__size__md leading-tight">
              <li className="flex gap-3">
                <span>
                  <TiTick size={30} className="text-primary" />
                </span>
                <span>
                  You want to build a personal brand that radiates trust and
                  authenticity.
                </span>
              </li>
              <li className="flex gap-3">
                <span>
                  <TiTick size={30} className="text-primary" />
                </span>
                <span>
                  You want a logo that feels hand-crafted and uniquely yours.
                </span>
              </li>
              <li className="flex gap-3">
                <span>
                  <TiTick size={30} className="text-primary" />
                </span>
                <span>
                  You want cohesive branding that shines on social media, your
                  website, and beyond.
                </span>
              </li>
              <li className="flex gap-3">
                <span>
                  <TiTick size={30} className="text-primary" />
                </span>
                <span>
                  You want to be instantly recognizable and memorable.
                </span>
              </li>
              <li className="flex gap-3">
                <span>
                  <TiTick size={30} className="text-primary" />
                </span>
                <span>
                  You want a professional look that exudes a premium feel.
                </span>
              </li>
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
