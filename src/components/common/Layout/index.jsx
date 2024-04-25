import { Helmet } from "react-helmet";
import Footer from "../../Footer";
import Header from "../../Header";

export default function Layout({ children, title }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? "ChurchLogo - " + title : "ChurchLogo"}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Header topBarEnable="enable" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
