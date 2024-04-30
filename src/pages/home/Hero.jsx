import CustomLink from "../../components/UI/CustomLink";

export default function Hero() {
  return (
    <div className="container px-2">
      <div className="flex justify-between py-16">
        <div className="flex-1 p-2.5">
          <h2 className="text-text__navy_blue text-brand__font__size__xl leading-tight">
            World-class design.
            <br /> <em>At your service.</em>
          </h2>
          <br />
          <p className="leading-relaxed text-text__gray max-w-[35rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aperiam perspiciatis mollitia cum expedita veniam perferendis eaque
            consectetur voluptatibus quia??
          </p>
          <br />
          <CustomLink
            route="/"
            text="Get started"
            classNames="border py-3 px-6 rounded text-text__gray font-semibold hover:bg-error hover:text-white duration-300 hover:border-error"
          >
            Get started
          </CustomLink>
        </div>
        <div className="flex-1 border border-blue-600 p-2.5">Banner Right</div>
      </div>
    </div>
  );
}
