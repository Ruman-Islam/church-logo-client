export default function SectionBanner({ heading, desc }) {
  return (
    <div className="bg-page_bg h-[150px] lg:h-[200px] xl:h-[250px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white text-center leading-tight py-2">
      <h3 className="text-[37px]">{heading}</h3>
      {desc && <p className="md:text-[20px] mt-1">{desc}</p>}
    </div>
  );
}
