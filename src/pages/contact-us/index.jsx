import { Box } from "@mui/material";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import OurClientsLovesUs from "../../components/common/OurClientsLovesUs";
import SectionBanner from "../../components/common/SectionBanner";
import WhyChurchLogo from "../../components/common/WhyChurchLogo";
import { useAppSelector } from "../../services/hook";

const ContactUs = () => {
  const {
    chat: { inboxConversationId },
    system: { categorySettings, contactUsThumbnail },
  } = useAppSelector((state) => state);

  return (
    <Layout title="Contact Us" description="">
      <Box id="contact-us">
        <SectionBanner heading="Contact Us" desc="" />
        <Box className="bg-church_logo_contact_us_bg bg-no-repeat bg-center bg-cover relative">
          <Box className="absolute w-full h-full top-0 bg-white bg-opacity-75"></Box>
          <Box className="container px-4 py-[30px] relative z-10">
            <Box className="max-w-[1000px] w-full mx-auto flex flex-col md:flex-row justify-between ">
              <Box className="w-full flex flex-col justify-center gap-4 text-center md:text-start">
                <h2 className="text-brand__font__size__xl font-brand__font__semibold flex flex-col leading-tight border-b-2 pb-2">
                  <span>Got a project?</span>
                  <span>Let’s talk?</span>
                </h2>

                <p className="text-brand__font__size__sm leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  accusantium fugit incidunt repellendus est labore temporibus
                  minus deserunt natus quam.
                </p>

                <HashLink
                  className="bg-primary px-6 py-2 rounded-full my-1 inline-block hover:bg-brand__black__color duration-200 text-white w-fit text-brand__font__size__sm md:text-brand__font__size__md"
                  to={`/dashboard/inbox/${inboxConversationId}#chat`}
                >
                  Contact us
                </HashLink>
              </Box>

              <Box className="w-full text-center flex flex-col rounded-md p-5">
                <Box className="w-full h-full p-5">
                  <img src={contactUsThumbnail} alt="church_logo" />
                </Box>

                <Box className="flex items-center justify-center gap-5 text-primary">
                  <a
                    href="https://www.facebook.com/churchlogo"
                    target="_blank"
                    className="hover:text-brand__black__color duration-300"
                    title="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/churchlogo.co"
                    target="_blank"
                    className="hover:text-brand__black__color duration-300"
                    title="Instagram"
                  >
                    <AiFillInstagram size={23} />
                  </a>
                  <a
                    href="https://www.youtube.com/@ChurchLogo"
                    target="_blank"
                    className="hover:text-brand__black__color duration-300"
                    title="Youtube"
                  >
                    <FaYoutube size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@churchlogo.co"
                    target="_blank"
                    className="hover:text-brand__black__color duration-300"
                    title="Tiktok"
                  >
                    <FaTiktok size={20} />
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <WhyChurchLogo
          imgUrl={categorySettings?.logoDesignThumbnail2}
          direction="reverse"
        />

        <OurClientsLovesUs />
      </Box>
    </Layout>
  );
};

export default ContactUs;
