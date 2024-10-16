import img2 from "../../../assets/logo/zeroplace_logo_web.png";

export default function ZeroPlacePromotionalSpace({ data, loading }) {
  const { zeroPlacePromotional = {} } = data || {};

  return loading ? null : (
    <div
      className="py-10 xl:py-0 xl:h-[533px] flex items-center justify-center bg-brand__black__color text-white bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${
          zeroPlacePromotional?.background
            ? zeroPlacePromotional?.background[0]?.url
            : ""
        })`,
      }}
    >
      <div className="container p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="basis-[40%] hidden md:block">
          <img
            className="w-[250px] md:w-[450px]"
            src={
              zeroPlacePromotional?.thumbnail
                ? zeroPlacePromotional?.thumbnail[0]?.url
                : ""
            }
            alt=""
          />
        </div>
        <div className="basis-[60%] flex flex-col items-center">
          <img
            className="max-w-[200px] md:max-w-[250px] xl:max-w-[300px]"
            src={img2}
            alt=""
          />
          <h2 className="my-4 text-brand__font__size__lg text-center max-w-[300px] md:max-w-[700px] leading-[30px]">
            {zeroPlacePromotional?.title}
          </h2>
          <p className="text-brand__font__size__sm text-center">
            {zeroPlacePromotional?.description}
          </p>
          <div className="mt-5">
            <a
              className="bg-primary px-6 py-1.5 rounded-full my-1 inline-block text-white w-fit text-brand__font__size__sm md:text-brand__font__size__base"
              href="https://zeroplace.co/"
              target="_blank"
            >
              Contact with Zero Place
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
