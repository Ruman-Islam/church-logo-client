import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import navigation from "../../data/navigation.json";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";

const MenuItems = ({ onModalOpen }) => {
  const scrollWithOffset = useScrollWithOffset();
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      {navigation.map((d) =>
        d?.route.includes("order-now") ? (
          <li
            key={d?.id}
            className="duration-300 bg-primary hover:bg-brand__black__color rounded-none lg:rounded-full text-white"
          >
            <HashLink
              className="px-1.5 md:px-5 py-3 lg:py-1.5 w-full inline-block"
              to={d?.route}
              scroll={(el) => scrollWithOffset(el, 135)}
            >
              {d?.title}
            </HashLink>
          </li>
        ) : d?.route.includes("/sign-in") ? (
          <li
            key={d?.id}
            className="border-b lg:border-0 hover:bg-gray-200 lg:hover:bg-transparent duration-300 rounded-none lg:rounded-full"
          >
            <button
              className="hover:text-primary duration-300 px-1.5 py-3 lg:py-1.5 w-full text-start"
              onClick={onModalOpen}
            >
              {d?.title}
            </button>
          </li>
        ) : (
          <li
            key={d?.id}
            className={`${
              pathname.includes(d?.match)
                ? "text-primary"
                : "text-brand__black__color"
            } border-b lg:border-0 hover:bg-gray-200 lg:hover:bg-transparent hover:text-primary duration-300`}
          >
            <HashLink
              className="px-1.5 py-3 lg:py-1.5 w-full inline-block"
              to={d?.route}
              scroll={(el) => scrollWithOffset(el, 135)}
            >
              {d?.title}
            </HashLink>
          </li>
        )
      )}
    </>
  );
};

export default MenuItems;
