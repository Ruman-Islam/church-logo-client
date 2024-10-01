import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import Header from "../../Header";

export default function Layout({
  children,
  title,
  showHeader = true,
  showFooter = true,
  headerBgColor,
  sectionHeight,
}) {
  const height = sectionHeight || "140vh";

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? title + " - Church Logo" : "Church Logo"}</title>
        <link rel="canonical" href="https://churchlogo.co" />
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
