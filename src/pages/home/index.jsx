import Layout from "../../components/common/Layout";
import Categories from "./Categories";
import Hero from "./Hero";
import Portfolio from "./Portfolio";

export default function Home() {
  return (
    <Layout title="A handcrafted signature logo to suit your unique personality">
      <Hero />
      <Categories />
      <Portfolio />
    </Layout>
  );
}
