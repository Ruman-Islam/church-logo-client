import { Helmet } from "react-helmet";
import { env } from "../../../config/env";
import {
  defaultDescription,
  defaultPreviewImage,
  defaultTitle,
} from "../../../constants/meta";
import Footer from "../../Footer";
import Header from "../../Header";

export default function Layout({
  children,
  headerBgColor,
  sectionHeight,
  customImage,
  showHeader = true,
  showFooter = true,
  title = defaultTitle,
  description = defaultDescription,
}) {
  const height = sectionHeight || "140vh";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Church Logo" />
        <meta property="og:url" content={env.app_self_url} />
        <meta
          property="og:image"
          content={
            customImage ? customImage : env.app_self_url + defaultPreviewImage
          }
        />
      </Helmet>

      <section
        className={`flex flex-col justify-between`}
        style={{ height: height }}
      >
        {showHeader && <Header topBarEnable="enable" bgColor={headerBgColor} />}
        <main className="mb-auto flex-1">{children}</main>
        {showFooter && <Footer />}
      </section>
    </>
  );
}
