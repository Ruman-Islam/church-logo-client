import Layout from "../../components/common/Layout";
import Categories from "./Categories";
import CustomersDoing from "./CustomersDoing";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Services from "./Services";
import ShowCaseYouLogo from "./ShowCaseYouLogo";

export default function Home() {
  return (
    <Layout title="A handcrafted signature logo to suit your unique personality">
      <Hero />
      <Categories />
      <Portfolio />
      <Services />
      <ShowCaseYouLogo />
      <CustomersDoing />
    </Layout>
  );
}
