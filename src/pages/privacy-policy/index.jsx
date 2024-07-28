import Layout from "../../components/common/Layout";
import data from "../../data/privacyPolicy.json";

export default function PrivacyPolicyScreen() {
  const replaceUrlWithAnchor = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, (url) => {
      return `<a class="text-blue-500 underline" href="${url}" target="_blank" rel="noopener noreferrer">Church Logo</a>`;
    });
  };

  return (
    <Layout title="Privacy Policy">
      <section id="privacy" className="mb-10">
        <div className="bg-page_bg h-[150px] lg:h-[200px] xl:h-[300px] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center text-white text-center leading-tight py-2">
          <h3 className="text-[37px]">Privacy Policy</h3>
        </div>
        {/* Introduction */}
        <div className="bg-section__bg_color text-brand__black__color">
          <div className="container px-4 py-[30px] md:py-[60px]">
            <h3 className="mt-1 mb-5 text-brand__font__size__md">
              Last Updated: Tue 02 July 2024
            </h3>
            <p className="font-brand__font__light text-justify">
              “Church Logo™” is committed to ensure Your privacy while providing
              the most unique services of its kind. If You want to become a user
              of the Service, You need to register and open Your personal
              account through Our website. At the time of registration, Church
              Logo will ask You to provide Us with a certain amount of personal
              information. Submission of such personal information is voluntary,
              but without it You may not be able to receive Our Services. Your
              submission of personal information in response to Our questions
              shall be voluntary, and Users may decline to answer Our questions
              at any time. However, by providing Your personal information, You
              consent to do so for the purpose of delivering to You the Service.
            </p>
          </div>
        </div>

        <div className="container px-4 py-[30px]">
          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy1?.title}
            </h2>
            {data?.policy1?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy2?.title}
            </h2>
            {data?.policy2?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy3?.title}
            </h2>
            {data?.policy3?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy4?.title}
            </h2>
            {data?.policy4?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy5?.title}
            </h2>
            {data?.policy5?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy6?.title}
            </h2>
            {data?.policy6?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy7?.title}
            </h2>
            {data?.policy7?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy8?.title}
            </h2>
            {data?.policy8?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy9?.title}
            </h2>
            {data?.policy9?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy10?.title}
            </h2>
            {data?.policy10?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy11?.title}
            </h2>
            {data?.policy11?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy12?.title}
            </h2>
            {data?.policy12?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>

          <div className="py-2">
            <h2 className="text-brand__font__size__lg font-brand__font__500">
              {data?.policy13?.title}
            </h2>
            {data?.policy13?.policies.map((d) => (
              <p
                key={d.id}
                className="mt-2 mb-5 font-brand__font__light text-justify"
                dangerouslySetInnerHTML={{
                  __html: replaceUrlWithAnchor(d?.text),
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
