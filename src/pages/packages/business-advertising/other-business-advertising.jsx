import { Button } from "@mui/material";
import { FaCheck } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import Layout from "../../../components/common/Layout";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";
import "../../../styles/categories.css";
import { getImgUrl } from "../../../utils/getImgUrl-utility";
import Faq from "../components/Faq";
import OurClientsLovesUs from "../components/OurClientsLovesUs";
import WhyChurchLogo from "../components/WhyChurchLogo";

const whatYouGet = ["Printable file", "Source file", "Vector file"];

export default function PackageOtherBusinessAdvertisingScreen() {
  const scrollWithOffset = useScrollWithOffset();

  return (
    <Layout title="Other Business Advertising">
      <section id="other-business-advertising">
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
                {whatYouGet.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-brand__font__size__base"
                  >
                    <FaCheck className="text-brand__black__color" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h2 className="text-brand__font__size__lg">
                Starting from $24.99
              </h2>
              <div className="flex items-center gap-5 mt-4">
                <Button
                  className="bg-primary hover:bg-brand__black__color rounded-full px-6 font-brand__font__600"
                  variant="contained"
                >
                  Get started
                </Button>
                <HashLink
                  to="/package/business-advertising/other-business-advertising#package-faq"
                  scroll={(el) => scrollWithOffset(el, 130)}
                  className="flex items-center gap-2 hover:underline duration-300 text-brand__font__size__md"
                >
                  <span>Learn more</span>
                </HashLink>
              </div>
            </div>
            <div className="basis-[100%] md:basis-[50%]">
              <img
                src={getImgUrl("image/hero-banner/churchlogo_slider_02.png")}
                alt=""
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
