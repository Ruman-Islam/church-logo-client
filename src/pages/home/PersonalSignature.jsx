import { TiTick } from "react-icons/ti";
import SectionTitle from "../../components/common/SectionTitle";
import { getImgUrl } from "../../utils/getImgUrl-utility";

export default function PersonalSignature() {
  return (
    <section className="bg-[#363A30]">
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
            <ul className="flex flex-col gap-5 text-brand__font__size__md">
              <li className="flex items-center gap-3">
                <TiTick size={30} className="text-primary" />
                You want to build a strong personal brand that communicates
                trust
              </li>
              <li className="flex items-center gap-3">
                <TiTick size={30} className="text-primary" />
                You want to have a logo that looks very personal, hand-made, and
                unique
              </li>
              <li className="flex items-center gap-3">
                <TiTick size={30} className="text-primary" />
                You want to be perfect to put on your social media, website,
                emails and much much more.
              </li>
              <li className="flex items-center gap-3">
                <TiTick size={30} className="text-primary" />
                You want people to quickly identify and remember you.
              </li>
              <li className="flex items-center gap-3">
                <TiTick size={30} className="text-primary" />
                You want visitors to get a more ‘premium’ feel to your name and
                give you a more professional look.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
