import { AiFillInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const navigation = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Gallery",
    route: "/",
  },
  {
    title: "Church Shop",
    route: "/",
  },
  {
    title: "Review",
    route: "/",
  },
  {
    title: "Login",
    route: "/login",
  },
];

const product = [
  {
    title: "Order My ChurchLogo",
    route: "/",
  },
  {
    title: "How to Use Your ChurchLogo",
    route: "/",
  },
  {
    title: "ChurchLogo Terms",
    route: "/",
  },
];

const help = [
  {
    title: "Terms & Conditions",
    route: "/terms-conditions",
  },
  {
    title: "Privacy Policy",
    route: "/privacy-policy",
  },
  {
    title: "FAQ",
    route: "/",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="relative bg-brand__black__color py-5 px-2 text-white">
      <div className="container px-2.5 py-5 md:py-10">
        <div className="flex gap-16">
          <div className="hidden md:block basis-[25%]">
            <div className="">
              <p className="lg:text-lg lg:font-semibold">
                Prepare yourself to be a part of exploration of
              </p>
              <p className="text-4xl font-bold">With the Church Logo</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-1 gap-5">
            <div className="flex-1">
              <p className="text-2xl font-brand__font__semibold text-center md:text-left">
                Navigation
              </p>
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0"
                  to={item.route}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex-1">
              <p className="text-2xl font-brand__font__semibold text-center md:text-left">
                Product
              </p>
              {product.map((item, index) => (
                <Link
                  key={index}
                  className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0"
                  to={item.route}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex-1">
              <p className="text-2xl font-brand__font__semibold text-center md:text-left">
                Help
              </p>
              {help.map((item, index) => (
                <Link
                  key={index}
                  className="block w-fit py-0.5 hover:underline duration-300 mx-auto md:mx-0"
                  to={item.route}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b w-full mx-auto my-5"></div>
      <div className="flex flex-col gap-3 items-center xl:items-start md:flex-row justify-between container px-2.5">
        <p className="flex items-center gap-x-2">
          <AiOutlineCopyrightCircle />
          All rights reserved Churchlogo {year}
        </p>
        <div className="flex items-center gap-8">
          <Link to="/">
            <FaFacebook size={20} />
          </Link>
          <Link to="/">
            <AiFillInstagram size={23} />
          </Link>
          <Link to="/">
            <FaTiktok size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
