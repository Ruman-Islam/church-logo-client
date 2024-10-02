import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import useTracking from "../../hooks/useTracking";
import { useGetSystemConfigQuery } from "../../services/features/system/systemApi";

export default function TermsAndConditionsScreen() {
  useTracking();
  const { data } = useGetSystemConfigQuery();

  return (
    <Layout
      title="Terms & Conditions - Know the Details of Our Services"
      description="Understand the terms and conditions of our services. Get clear information on your rights and our responsibilities to you."
    >
      <section id="terms" className="mb-10">
        <SectionBanner heading="Terms & Conditions" desc="" />
        {/* Introduction */}
        <div className="bg-section__bg_color text-brand__black__color">
          <div className="container px-4 py-[30px] md:py-[40px]">
            <h3 className="mt-1 mb-5 text-brand__font__size__md">
              Last Updated: {data?.data?.termsAndConditions?.lastUpdate}
            </h3>
            <p
              className="font-brand__font__light text-justify"
              dangerouslySetInnerHTML={{
                __html: data?.data?.termsAndConditions?.heading,
              }}
            />
          </div>
        </div>
        <div className="container px-4 py-[30px]">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.data?.termsAndConditions?.content,
            }}
          />
        </div>
      </section>
    </Layout>
  );
}
