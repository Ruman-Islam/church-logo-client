import Layout from "../../components/common/Layout";
import SectionBanner from "../../components/common/SectionBanner";
import data from "../../data/termsConditions.json";

export default function TermsAndConditionsScreen() {
  return (
    <Layout title="Term & Conditions">
      <section id="terms" className="mb-10">
        <SectionBanner heading="Terms & Conditions" desc="" />
        {/* Introduction */}
        <div className="bg-section__bg_color text-brand__black__color">
          <div className="container px-4 py-[30px] md:py-[60px]">
            <h3 className="mt-1 mb-5 text-brand__font__size__md">
              Last Updated: Tue 02 July 2024
            </h3>

            <p className="font-brand__font__light mb-4">
              When using our website please read the following terms and
              conditions
            </p>

            <p className="font-brand__font__light mb-4">
              The following terminology is applied for these terms and
              conditions, privacy statement as well as a disclaimer regarding
              all agreements that included customer (that refers to ‘you’/ any
              person accessing the website), “We” and “us” that refers to the
              company, and any third parties refers to our unique product or
              services that includes our commitment. All these terms refer to
              the offer, acceptance, and consideration of payment necessary to
              carry out the process of meeting the customer’s need by following
              the provision of the company’s stated service under the
              country&apos;s law. Any use of the above terminology or other
              words in singular/plural/capitalization, as well as he/she/they,
              will be taken as interchangeable and therefore will be considered
              as same.
            </p>

            <p className="font-brand__font__light ">
              ** All Rights Not Expressly Granted to You under These Terms and
              conditions Are Reserved to the Company.
            </p>
          </div>
        </div>

        <div className="container px-4 py-[30px]">
          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term1?.title}
            </h2>
            {data?.term1?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term2?.title}
            </h2>
            {data?.term2?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term3?.title}
            </h2>
            {data?.term3?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term4?.title}
            </h2>
            {data?.term4?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term5?.title}
            </h2>
            {data?.term5?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term6?.title}
            </h2>
            {data?.term6?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term7?.title}
            </h2>
            {data?.term7?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term8?.title}
            </h2>
            {data?.term8?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term9?.title}
            </h2>
            {data?.term9?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term10?.title}
            </h2>
            {data?.term10?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term11?.title}
            </h2>
            {data?.term11?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term12?.title}
            </h2>
            {data?.term12?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.term13?.title}
            </h2>
            {data?.term13?.policies.map((d) => (
              <p key={d.id} className="mt-2 mb-5 font-brand__font__light">
                {d?.text}
              </p>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
