import { HashLink } from "react-router-hash-link";
import { getImgUrl } from "../../utils/getImgUrl-utility";

export default function ContactBar() {
  return (
    <section>
      <div className="py-5 md:py-10 bg-section__bg_color w-full md:h-[430px] flex items-center justify-center px-2">
        <div className="flex-1 flex flex-col md:flex-row justify-center items-center container text-brand__black__color gap-5">
          <div className="basis-[50%] border border-blue-500 rounded-xl">
            <img
              className="max-w-[400px] w-full mx-auto border border-red-500 rounded-xl"
              src={getImgUrl("image/banner/hero-01-7daaa580.png")}
              alt=""
            />
          </div>
          <div className="basis-[50%] flex flex-col justify-center rounded-xl border border-green-500 p-4 bg-white gap-3">
            <h4 className="text-brand__font__size__md font-brand__font__500">
              Still have a question that needs a little human touch? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Nobis, aliquid!
            </h4>
            <HashLink
              className="bg-primary px-4 py-1.5 rounded-full mt-1 inline-block hover:bg-brand__black__color duration-200 text-white w-fit"
              to="/"
            >
              Contact us
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
}
