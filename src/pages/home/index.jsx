import Layout from "../../components/common/Layout";
import Categories from "./Categories";
import ContactBar from "./ContactBar";
import CustomersDoing from "./CustomersDoing";
import Hero from "./Hero";
import PersonalSignature from "./PersonalSignature";
import Portfolio from "./Portfolio";
import Services from "./Services";
import ShowCaseYouLogo from "./ShowCaseYouLogo";
import Testimonial from "./Testimonial";

export default function HomeScreen() {
  return (
    <Layout title="A handcrafted signature logo to suit your unique personality">
      <Hero />
      <Categories />
      <Portfolio />
      <Services />
      <ContactBar />
      <Testimonial />
      <ShowCaseYouLogo />
      <PersonalSignature />
      <CustomersDoing />
    </Layout>
  );
}
