import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import { handleAosDelay } from "../../../utils/handleAos";
import { packagePriceConversion } from "../../../utils/packagePriceConversion";
import PackageIcon from "../components/PackageIcon";

const PackageCard = ({ i, pg, iconColors, setIconColors }) => {
  const scrollWithOffset = useScrollWithOffset();

  const handleMouseEnter = (id) => {
    setIconColors((prevColors) => ({
      ...prevColors,
      [id]: "#13a800",
    }));
  };

  const handleMouseLeave = (id) => {
    setIconColors((prevColors) => ({
      ...prevColors,
      [id]: "#031401",
    }));
  };

  return (
    <HashLink
      data-aos="fade-top"
      data-aos-easing="linear"
      data-aos-delay={handleAosDelay(i)}
      to={`/package/${pg?.packageId}#package`}
      className={`block px-5 py-10 hover:shadow-lg duration-300 group basis-[100%] ${pg?.styleClass}`}
      onMouseEnter={() => handleMouseEnter(pg?.packageId)}
      onMouseLeave={() => handleMouseLeave(pg?.packageId)}
      scroll={(el) => scrollWithOffset(el, 135)}
    >
      <div>
        {pg?.isPopular && (
          <div className="mb-2 w-fit">
            <span className="flex items-center justify-center gap-1 text-brand__font__size__xs px-3 py-1 bg-primary rounded-full text-white">
              <FaStar />
              <span>Most Popular</span>
            </span>
          </div>
        )}

        <div className="flex gap-2 mb-2">
          <div className="text-brand__font__size__xl group-hover:text-primary duration-300 pt-2">
            <PackageIcon fill={iconColors[pg?.packageId] || "#031401"} />
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-brand__font__size__md group-hover:text-primary duration-300 leading-[20px] mb-1.5">
              {pg?.title}
            </h1>
            <div className="flex items-center gap-2 text-brand__font__size__sm">
              <span className="text-brand__font__size__md font-brand__font__semibold">
                ${packagePriceConversion(pg)}
              </span>
              {pg?.savings > 0 && (
                <span className="text-primary">{pg?.savings}%+</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-brand__font__size__sm text-text__gray leading-tight mb-1">
            {pg?.previewTitle}
          </h2>
          <ul className="text-brand__font__size__xs leading-loose mt-2">
            <li className="flex items-center gap-1">
              <FaCheck className="text-primary" />
              <span>{pg?.featuredDeliveryTime}</span>
            </li>
            <li className="flex items-center gap-1">
              <FaCheck className="text-primary" />
              <span>{pg?.featuredRevision}</span>
            </li>
            {pg?.featuredItems?.map((item) => (
              <li key={item} className="flex items-center gap-1">
                {item.startsWith("X-") ? (
                  <IoCloseOutline className="text-error" />
                ) : (
                  <FaCheck className="text-primary" />
                )}

                <span>{item.replace("X-", "")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HashLink>
  );
};

export default PackageCard;
