import CustomLink from "../../components/UI/CustomLink";

export default function ContactBar() {
  return (
    <section className="container px-2">
      <div className="mt-20 py-5 md:py-10 bg-ask__qus__background bg-center bg-cover flex rounded-xl max-w-[1000px] w-full mx-auto">
        <div className="basis-[0%] md:basis-[40%]"></div>
        <div className="basis-[100%] md:basis-[60%] bg-[#1D1C55] flex flex-col justify-center items-center text-white rounded-xl">
          <div>
            <h4 className="text-brand__font__size__md font-brand__font__semibold">
              Still have a question that needs a
            </h4>
            <h4 className="text-brand__font__size__md font-brand__font__semibold">
              little human touch?
            </h4>
            <CustomLink
              classNames="text-brand__font__size__sm bg-primary px-4 py-1 rounded-full mt-1 inline-block hover:bg-brand__black__color duration-200"
              route="/"
            >
              Contact us
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
}
