import Layout from "../../components/common/Layout";
import Categories from "./components/Categories";
import ContactBar from "./components/ContactBar";
import CustomersDoing from "./components/CustomersDoing";
import Hero from "./components/Hero";
import OtherPromotionalSpace from "./components/OtherPromotionalSpace";
import PersonalSignature from "./components/PersonalSignature";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import ShowCaseYouLogo from "./components/ShowCaseYouLogo";
import Testimonial from "./components/Testimonial";
import ZeroPlacePromotionalSpace from "./components/ZeroPlacePromotionalSpace";

export default function HomeScreen() {
  return (
    <Layout title="A handcrafted signature logo to suit your unique personality">
      <Hero />
      <Categories />
      <Services />
      <Portfolio />
      <ContactBar />
      <Testimonial />
      <ShowCaseYouLogo />
      <ZeroPlacePromotionalSpace />
      <OtherPromotionalSpace />
      <CustomersDoing />
      <PersonalSignature />
    </Layout>
  );
}
