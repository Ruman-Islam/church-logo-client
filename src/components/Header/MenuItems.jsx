import { Link, useLocation } from "react-router-dom";

const MenuItems = () => {
  const location = useLocation();

  return (
    <>
      <li
        className={`${
          location.pathname === "/gallery" ? "menu-active" : ""
        } border-b lg:border-0 hover:bg-gray-200 lg:hover:bg-transparent hover:text-primary duration-500`}
      >
        <Link className="px-1.5 py-1.5 w-full inline-block" to="/gallery">
          Gallery
        </Link>
      </li>

      <li
        className={`${
          location.pathname === "/church-shop" ? "menu-active" : ""
        } border-b lg:border-0 hover:bg-gray-200 lg:hover:bg-transparent hover:text-primary duration-500`}
      >
        <Link className="px-1.5 py-1.5 w-full inline-block" to="/review">
          Church Shop
        </Link>
      </li>

      <li
        className={`${
          location.pathname === "/review" ? "menu-active" : ""
        } border-b lg:border-0 hover:bg-gray-200 lg:hover:bg-transparent hover:text-primary duration-500`}
      >
        <Link className="px-1.5 py-1.5 w-full inline-block" to="/review">
          Review
        </Link>
      </li>

      <li
        className={`${
          location.pathname === "/faq" ? "menu-active" : ""
        } border-b lg:border-0 hover:bg-gray-200 lg:hover:bg-transparent hover:text-primary duration-500`}
      >
        <Link className="px-1.5 py-1.5 w-full inline-block" to="/faq">
          FAQ
        </Link>
      </li>

      <li
        className={`${
          location.pathname === "/contact" ? "menu-active" : ""
        } border-b lg:border-0 hover:bg-gray-200 lg:hover:bg-transparent hover:text-primary duration-500`}
      >
        <Link className="px-1.5 py-1.5 w-full inline-block" to="/contact">
          Contact
        </Link>
      </li>
      <li
        className={`${
          location.pathname === "/sign-in" ? "menu-active" : ""
        } border-b lg:border-0 hover:bg-gray-200 lg:hover:bg-transparent hover:text-primary duration-500`}
      >
        <Link className="px-1.5 py-1.5 w-full inline-block" to="/sign-in">
          Sign In
        </Link>
      </li>
      <li
        className={`${
          location.pathname === "/order-now" ? "menu-active" : ""
        } border-b lg:border-0 duration-500 bg-primary hover:bg-brand__black__color rounded-none lg:rounded-full text-white`}
      >
        <Link className="px-4 py-1 w-full inline-block" to="/order-now">
          Order Yours
        </Link>
      </li>
    </>
  );
};

export default MenuItems;
