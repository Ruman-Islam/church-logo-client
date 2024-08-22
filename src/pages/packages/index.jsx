import { Button, Chip, Skeleton } from "@mui/material";
import { BsArrowRepeat } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Layout from "../../components/common/Layout";
import useScrollWithOffset from "../../hooks/useScrollWithOffset";
import { useGetOnePackageQuery } from "../../services/features/package/packageApi";
import { getImgUrl } from "../../utils/getImgUrl-utility";
import { packagePriceConversion } from "../../utils/packagePriceConversion";
import Faq from "./components/Faq";
import OurClientsLovesUs from "./components/OurClientsLovesUs";
import WhyChurchLogo from "./components/WhyChurchLogo";

const titles = [
  {
    title: [
      <span key={1}>Crafting timeless brand</span>,
      <span key={2}>identities that resonate </span>,
    ],
    category: "logo-design",
  },
  {
    title:
      "Designing meticulously-crafted websites that seamlessly blend aesthetics and functionality.",
    category: "web-design",
  },
  {
    title:
      "Unlock Your Brand’s Potential: Elevate Your Online Presence with Our Expert Design Services!",
    category: "branding",
  },
  {
    title:
      "Designing bespoke logos and personal signatures that resonate with your brand’s essence.",
    category: "personal-signature",
  },
  {
    title:
      "Transforming ideas into captivating visuals: our design services bring your brand to life!",
    category: "business-advertising",
  },
  {
    title:
      "Boost your brand’s online presence with our captivating social media services!",
    category: "social-media-service",
  },
];

export default function Package() {
  const scrollWithOffset = useScrollWithOffset();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetOnePackageQuery(id);
  const packageInfo = data?.data;
  const featuredItems = packageInfo ? packageInfo?.featuredItems : [];
  const title = titles.find((item) => item?.category === packageInfo?.category);

  return (
    <Layout title="Logo design source pack">
      {isError ? (
        <div className="flex justify-center items-center w-full h-full">
          No data found!
        </div>
      ) : (
        <section id="package">
          <div className="bg-section__bg_color">
            <div className="container px-4 flex flex-col md:flex-row justify-between items-center gap-5 py-10 xl:py-20">
              <div className="basis-[100%] md:basis-[50%]">
                <h1 className="text-[48px] lg:text-[60px] leading-[50px] lg:leading-[60px]">
                  {isLoading ? (
                    <Skeleton
                      variant="rectangular"
                      className="mb-2 max-w-[600px] w-full"
                      height={20}
                    />
                  ) : (
                    <span
                      data-aos="fade-right"
                      data-aos-delay="0"
                      data-aos-duration="500"
                      className="block"
                    >
                      {title?.title[0]}
                    </span>
                  )}

                  {isLoading ? (
                    <Skeleton
                      variant="rectangular"
                      className="mb-2 max-w-[450px] w-full"
                      height={20}
                    />
                  ) : (
                    <span
                      data-aos="fade-left"
                      data-aos-delay="300"
                      data-aos-duration="500"
                      className="block"
                    >
                      {title?.title[1]}
                    </span>
                  )}
                </h1>
                {/* <h1 className="text-[48px] lg:text-[60px] leading-[50px] lg:leading-[60px]">
                  {isLoading ? (
                    <Skeleton
                      variant="rectangular"
                      className="mb-2 max-w-[600px] w-full"
                      height={20}
                    />
                  ) : (
                    <span
                      data-aos="fade-right"
                      data-aos-delay="0"
                      data-aos-duration="500"
                      className="block"
                    >
                      The complete logo
                    </span>
                  )}
                  {isLoading ? (
                    <Skeleton
                      variant="rectangular"
                      className="mb-2 max-w-[450px] w-full"
                      height={20}
                    />
                  ) : (
                    <span
                      data-aos="fade-left"
                      data-aos-delay="300"
                      data-aos-duration="500"
                      className="block"
                    >
                      {" "}
                      design source pack for
                    </span>
                  )}
                  {isLoading ? (
                    <Skeleton
                      variant="rectangular"
                      className="mb-2 max-w-[250px] w-full"
                      height={20}
                    />
                  ) : (
                    <span
                      data-aos="fade-right"
                      data-aos-delay="600"
                      data-aos-duration="500"
                      className="block"
                    >
                      {" "}
                      your business
                    </span>
                  )}
                </h1> */}

                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    className="mt-4 mb-2 max-w-[590px] w-full"
                    height={10}
                  />
                ) : (
                  <p className="my-5 leading-snug text-text__gray">
                    Connect with our creative experts and grow your business
                    with a professional, custom branding package.
                  </p>
                )}

                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    className="mt-5 mb-2 max-w-[200px] w-full"
                    height={20}
                  />
                ) : (
                  <div className="font-brand__font__500 flex gap-4 capitalize mb-4 text-brand__black__color">
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
                )}

                <ul className="text-brand__font__size__xs leading-loose text-brand__black__color">
                  {(isLoading ? Array.from(new Array(6)) : featuredItems).map(
                    (item, i) =>
                      item ? (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-brand__font__size__base"
                        >
                          <FaCheck className="text-primary" />
                          <span>{item}</span>
                        </li>
                      ) : (
                        <Skeleton
                          key={i}
                          variant="rectangular"
                          className={`mt-2 mb-2 max-w-[${i * 100}px] w-full`}
                          height={10}
                        />
                      )
                  )}
                </ul>
                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    className="mt-5 mb-2  max-w-[300px] w-full"
                    height={20}
                  />
                ) : (
                  <h2 className="text-brand__font__size__lg mt-4">
                    Starting from ${packagePriceConversion(data?.data)}
                  </h2>
                )}

                <div className="flex items-center gap-5 mt-4">
                  {isLoading ? (
                    <Skeleton
                      variant="rectangular"
                      className="mt-5 mb-2 rounded-full"
                      width={180}
                      height={20}
                    />
                  ) : (
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
                  )}

                  {isLoading ? (
                    <Skeleton
                      variant="rectangular"
                      className="mt-5 mb-2 rounded-full"
                      width={180}
                      height={20}
                    />
                  ) : (
                    <HashLink
                      to={`/package/${id}#package-faq`}
                      scroll={(el) => scrollWithOffset(el, 130)}
                      className="flex items-center gap-2 hover:underline duration-300 text-brand__font__size__md"
                    >
                      Learn more
                    </HashLink>
                  )}
                </div>
              </div>

              <div className="basis-[100%] md:basis-[50%] w-full mx-auto justify-center">
                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    className="max-w-[600px] w-full mx-auto h-[200px] xl:h-[400px]"
                  />
                ) : (
                  <img
                    className="block"
                    src={getImgUrl(
                      "image/hero-banner/churchlogo_slider_02.png"
                    )}
                    alt="church_logo"
                  />
                )}
              </div>
            </div>
          </div>

          <WhyChurchLogo />
          <Faq />
          <OurClientsLovesUs />
        </section>
      )}
    </Layout>
  );
}
