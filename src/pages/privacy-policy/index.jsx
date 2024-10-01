import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import useTracking from "../../hooks/useTracking";
import { useGetSystemConfigQuery } from "../../services/features/system/systemApi";

export default function PrivacyPolicyScreen() {
  useTracking();

  const { data } = useGetSystemConfigQuery();

  return (
    <Layout title="Privacy Policy">
      <section id="privacy" className="mb-10">
        <SectionBanner heading="Privacy Policy" desc="" />
        {/* Introduction */}
        <div className="bg-section__bg_color text-brand__black__color">
          <div className="container px-4 py-[30px] md:py-[40px]">
            <h3 className="mt-1 mb-5 text-brand__font__size__md">
              Last Updated: {data?.data?.privacyPolicy?.lastUpdate}
            </h3>
            <p
              className="font-brand__font__light text-justify"
              dangerouslySetInnerHTML={{
                __html: data?.data?.privacyPolicy?.heading,
              }}
            />
          </div>
        </div>

        <div className="container px-4 py-[30px]">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.data?.privacyPolicy?.content,
            }}
          />
        </div>
      </section>
    </Layout>
  );
}
