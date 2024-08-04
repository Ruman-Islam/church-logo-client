import { Button } from "@mui/material";
import { FaCheck } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import packagesData from "../../data/packages.json";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import { getImgUrl } from "../../utils/getImgUrl-utility";
import { packagePriceConversion } from "../../utils/packagePriceConversion";
import Faq from "./components/Faq";
import OurClientsLovesUs from "./components/OurClientsLovesUs";
import WhyChurchLogo from "./components/WhyChurchLogo";

export default function Package() {
  const { id } = useParams();
  const scrollWithOffset = useScrollWithOffset();
  const filteredPackage = packagesData.find((item) => item.id === id);

  return (
    <Layout title="Logo design source pack">
      <section id="package">
        <div className="bg-section__bg_color">
          <div className="container px-4 flex flex-col md:flex-row justify-between items-center gap-5 py-10 xl:py-20">
            <div className="basis-[100%] md:basis-[50%]">
              <h1 className="text-[48px] lg:text-[60px] leading-[50px] lg:leading-[60px]">
                The complete logo design source pack for your business
              </h1>
              <p className="my-4 leading-snug">
                Connect with our creative experts and grow your business with a
                professional, custom branding package.
              </p>
              <h2 className="text-brand__font__size__lg">What you get</h2>
              <ul className="text-brand__font__size__xs leading-loose">
                {filteredPackage?.featuredItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-brand__font__size__base"
                  >
                    <FaCheck className="text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h2 className="text-brand__font__size__lg">
                Starting from ${packagePriceConversion(filteredPackage)}
              </h2>
              <div className="flex items-center gap-5 mt-4">
                <HashLink
                  to={`/order/brief/123#order-brief`}
                  scroll={(el) => scrollWithOffset(el, 130)}
                >
                  <Button
                    className="bg-primary hover:bg-brand__black__color rounded-full px-6 font-brand__font__600"
                    variant="contained"
                  >
                    Get started
                  </Button>
                </HashLink>
                <HashLink
                  to="/package/logo-design/logo-design-source-pack#package-faq"
                  scroll={(el) => scrollWithOffset(el, 130)}
                  className="flex items-center gap-2 hover:underline duration-300 text-brand__font__size__md"
                >
                  Learn more
                </HashLink>
              </div>
            </div>
            <div className="basis-[100%] md:basis-[50%]">
              <img
                src={getImgUrl("image/hero-banner/churchlogo_slider_02.png")}
                alt="church_logo"
              />
            </div>
          </div>
        </div>

        <WhyChurchLogo />
        <Faq />
        <OurClientsLovesUs />
      </section>
    </Layout>
  );
}
