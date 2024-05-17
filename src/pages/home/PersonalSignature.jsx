import { TiTick } from "react-icons/ti";
import SectionTitle from "../../components/common/SectionTitle";

export default function PersonalSignature() {
  return (
    <section className="bg-[#363A30] mt-20">
      <div className="container px-2 py-10">
        <div className="px-2 text-center">
          <SectionTitle
            title="Is a Signature Churchlogo for you?"
            titleClass="text-section__title__size xl:text-brand__font__size__xl leading-tight text-white"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-10">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://photologo.co/wp-content/uploads/2023/05/AndyMoore_FinalCTA.png"
              alt=""
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
                You want to be distinct and become a leading name in your
                industry
              </li>
              <li className="flex items-center gap-3">
                <TiTick size={30} className="text-primary" />
                You want to protect your online content from being stolen
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
