import { TiTick } from "react-icons/ti";
import { HashLink } from "react-router-hash-link";
import SectionTitle from "../../components/common/SectionTitle";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import { getImgUrl } from "../../utils/getImgUrl-utility";

export default function PersonalSignature() {
  const scrollWithOffset = useScrollWithOffset();

  return (
    <section className="bg-[#051f02]">
      <div className="container px-2 py-10">
        <div className="px-2">
          <SectionTitle
            title="Is a Signature Churchlogo for you?"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-tight font-brand__font__600 text-center text-white"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-10">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={getImgUrl("image/hero-banner/churchlogo_slider_03.png")}
              alt="church_logo"
            />
          </div>
          <div className="flex-1 flex justify-center items-center text-white">
            <ul className="flex flex-col gap-4 text-brand__font__size__md leading-tight">
              <li className="flex items-center gap-3">
                <span>
                  <TiTick size={30} className="text-primary" />
                </span>
                <span>
                  You want to build a strong personal brand that communicates
                  trust
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span>
                  <TiTick size={30} className="text-primary" />
                </span>
                <span>
                  You want to have a logo that looks very personal, hand-made,
                  and unique
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span>
                  <TiTick size={30} className="text-primary" />
                </span>
                <span>
                  You want to be perfect to put on your social media, website,
                  emails and much much more.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span>
                  <TiTick size={30} className="text-primary" />
                </span>
                <span>
                  You want people to quickly identify and remember you.
                </span>
              </li>
              <li className="flex justify-between items-center gap-3">
                <span>
                  <TiTick size={30} className="text-primary" />
                </span>
                <span>
                  You want visitors to get a more ‘premium’ feel to your name
                  and give you a more professional look.
                </span>
              </li>
              <li className="duration-300 bg-primary hover:bg-brand__black__color rounded-none lg:rounded-full text-white w-fit mt-2">
                <HashLink
                  className="px-8 py-3 w-full inline-block"
                  to="/"
                  scroll={(el) => scrollWithOffset(el, 135)}
                >
                  Only $24.99 - Order Now
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
