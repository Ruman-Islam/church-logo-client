import Layout from "../../components/common/Layout";
import Categories from "./Categories";
import Hero from "./Hero";

export default function Home() {
  return (
    <Layout title="A handcrafted signature logo to suit your unique personality">
      <Hero />
      <Categories />
    </Layout>
  );
}
