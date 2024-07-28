import { HashLink } from "react-router-hash-link";
import { getImgUrl } from "../../../utils/getImgUrl-utility";

export default function ContactBar() {
  return (
    <section>
      <div className="py-5 md:py-10 bg-section__bg_color w-full md:h-[280px] xl:h-[430px] flex items-center justify-center px-4">
        <div className="flex-1 flex items-end container text-brand__black__color gap-5">
          <div className="basis-[0%] xl:basis-[30%]">
            <div className="max-w-[370px] hidden xl:block">
              <img
                className="w-full rounded-xl"
                src={getImgUrl("image/contact-us/Contact-Us.png")}
                alt=""
              />
            </div>
          </div>

          <div className="basis-[100%] xl:basis-[70%] h-full md:mb-6">
            <div className="border-b border-brand__black__color flex justify-between items-end w-full p-2">
              <div className="flex-grow h-full text-brand__black__color text-[32px]  md:text-brand__font__size__xl font-brand__font__semibold leading-tight">
                <h2 className="">Got a project? </h2>
                <h2>Let&rsquo;s talk? </h2>
              </div>
              <div>
                <HashLink
                  className="bg-primary px-4 py-1.5 rounded-full my-1 inline-block hover:bg-brand__black__color duration-200 text-white w-fit text-brand__font__size__sm md:text-brand__font__size__base"
                  to="/"
                >
                  Contact us
                </HashLink>
              </div>
            </div>
            <div className="text-text__gray px-4 py-3 leading-tight font-brand__font__500">
              <p>Do you have any query?</p>
              <p>
                If you have any query or any question before starting your
                valuable project with us, you can contact us through our email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
