import { Button, Chip, Skeleton } from "@mui/material";
import { BsArrowRepeat } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import NoDataFound from "../../components/common/NoDataFound";
import OurClientsLovesUs from "../../components/common/OurClientsLovesUs";
import WhyChurchLogo from "../../components/common/WhyChurchLogo";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import useTracking from "../../hooks/useTracking";
import { useGetOnePackageQuery } from "../../services/features/package/packageApi";
import { useAppSelector } from "../../services/hook";
import { packagePriceConversion } from "../../utils/packagePriceConversion";
import Faq from "./components/Faq";

function getCategory(category) {
  if (category === "logo-design") {
    return "logoDesign";
  } else if (category === "web-design") {
    return "webDesign";
  } else if (category === "branding") {
    return "branding";
  } else if (category === "personal-signature") {
    return "personalSignature";
  } else if (category === "business-advertising") {
    return "businessAdvertising";
  } else if (category === "social-media-service") {
    return "socialMediaService";
  }
}

export default function Package() {
  useTracking();
  const scrollWithOffset = useScrollWithOffset();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetOnePackageQuery(id);
  const packageInfo = data?.data;
  const featuredItems = packageInfo ? packageInfo?.featuredItems : [];

  const {
    system: { categoryFaqs },
  } = useAppSelector((state) => state);

  const faqs =
    (categoryFaqs && categoryFaqs[getCategory(packageInfo?.category)]) || [];

  return (
    <Layout title="Logo design source pack">
      {isError ? (
        <NoDataFound />
      ) : (
        <section id="package">
          <div className="bg-section__bg_color">
            <div className="container px-4 flex flex-col md:flex-row justify-between items-center gap-5 py-10 xl:py-20">
              <div className="basis-[100%] md:basis-[50%]">
                {isLoading ? (
                  <>
                    <Skeleton
                      variant="rectangular"
                      className="mt-4 mb-2 max-w-[590px] w-full"
                      height={30}
                    />
                    <Skeleton
                      variant="rectangular"
                      className="mt-4 mb-2 max-w-[290px] w-full"
                      height={10}
                    />
                    <Skeleton
                      variant="rectangular"
                      className="mt-5 mb-2 max-w-[200px] w-full"
                      height={20}
                    />
                    <ul className="text-brand__font__size__xs leading-loose text-brand__black__color">
                      {Array.from(new Array(6)).map((item, i) => (
                        <Skeleton
                          key={i}
                          variant="rectangular"
                          className={`mt-2 mb-2 max-w-[${i * 100}px] w-full`}
                          height={10}
                        />
                      ))}
                    </ul>
                    <Skeleton
                      variant="rectangular"
                      className="mt-5 mb-2  max-w-[300px] w-full"
                      height={20}
                    />
                    <div className="flex items-center gap-5 mt-4">
                      <Skeleton
                        variant="rectangular"
                        className="mt-5 mb-2 rounded-full"
                        width={180}
                        height={20}
                      />

                      <Skeleton
                        variant="rectangular"
                        className="mt-5 mb-2 rounded-full"
                        width={180}
                        height={20}
                      />
                    </div>
                  </>
                ) : (
                  <div
                    data-aos="fade-right"
                    data-aos-delay="0"
                    data-aos-duration="500"
                    className="basis-[100%] md:basis-[50%]"
                  >
                    <h1 className="text-[42px] md:text-[48px] lg:text-[55px] leading-[50px] lg:leading-[60px]">
                      {packageInfo?.headTitle}
                    </h1>

                    <p className="my-5 leading-snug text-text__gray">
                      {packageInfo?.subTitle}
                    </p>

                    <div className="font-brand__font__500 flex gap-4 capitalize mb-4 text-brand__black__color flex-col md:flex-row">
                      <Chip
                        sx={{
                          px: 2,
                          py: 2,
                          fontSize: 16,
                        }}
                        icon={<IoMdTime size={22} />}
                        label={`${packageInfo?.featuredDeliveryTime}`}
                      />

                      <Chip
                        sx={{
                          px: 2,
                          py: 2,
                          fontSize: 16,
                        }}
                        icon={<BsArrowRepeat size={22} />}
                        label={`${packageInfo?.featuredRevision}`}
                      />
                    </div>

                    <ul className="text-brand__font__size__xs leading-loose text-brand__black__color">
                      {featuredItems.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-brand__font__size__base"
                        >
                          <FaCheck className="text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <h2 className="text-brand__font__size__lg mt-4">
                      Starting from ${packagePriceConversion(data?.data)}
                    </h2>

                    <div className="flex items-center gap-5 mt-4">
                      <HashLink
                        to={`/order/${packageInfo?.category}/brief/${id}#order-brief`}
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
                        to={`/package/${id}#package-faq`}
                        scroll={(el) => scrollWithOffset(el, 130)}
                        className="flex items-center gap-2 hover:underline duration-300 text-brand__font__size__md"
                      >
                        Learn more
                      </HashLink>
                    </div>
                  </div>
                )}
              </div>

              {isLoading ? (
                <Skeleton
                  variant="rectangular"
                  className="max-w-[600px] w-full mx-auto h-[200px] xl:h-[400px]"
                />
              ) : (
                <div
                  data-aos="fade-left"
                  data-aos-delay="0"
                  data-aos-duration="500"
                  className="basis-[100%] md:basis-[50%] w-full mx-auto justify-center"
                >
                  <img
                    className="block"
                    src={packageInfo?.thumbnail1}
                    alt="church_logo"
                  />
                </div>
              )}
            </div>
          </div>

          <WhyChurchLogo imgUrl={packageInfo?.thumbnail2} direction="reverse" />
          <Faq faqs={faqs} />
          <OurClientsLovesUs />
        </section>
      )}
    </Layout>
  );
}
