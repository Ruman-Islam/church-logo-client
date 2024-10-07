import Layout from "../../components/common/Layout";
import Categories from "./components/Categories";
import ContactBar from "./components/ContactBar";
import CustomersDoing from "./components/CustomersDoing";
import Hero from "./components/Hero";
// import OtherPromotionalSpace from "./components/OtherPromotionalSpace";
import useTracking from "../../hooks/useTracking";
import { useAppSelector } from "../../services/hook";
import PersonalSignature from "./components/PersonalSignature";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import ShowCaseYouLogo from "./components/ShowCaseYouLogo";
import Testimonial from "./components/Testimonial";
import ZeroPlacePromotionalSpace from "./components/ZeroPlacePromotionalSpace";

export default function HomeScreen() {
  useTracking();

  const {
    system: { homeSettings, isLoading },
  } = useAppSelector((state) => state);

  return (
    <Layout title="Church Logos, Web Design, Branding & More – Your Complete Church Branding Partner">
      <Hero data={homeSettings} loading={isLoading} />
      <Categories data={homeSettings} loading={isLoading} />
      <Services data={homeSettings} loading={isLoading} />
      <Portfolio data={homeSettings} loading={isLoading} />
      <ContactBar />
      <ZeroPlacePromotionalSpace data={homeSettings} loading={isLoading} />
      <Testimonial />
      <ShowCaseYouLogo data={homeSettings} loading={isLoading} />
      {/* <OtherPromotionalSpace /> */}
      <CustomersDoing data={homeSettings} loading={isLoading} />
      <PersonalSignature data={homeSettings} loading={isLoading} />
    </Layout>
  );
}
