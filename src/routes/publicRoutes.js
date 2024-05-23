import CategoriesScreen from "../pages/categories";
import FAQScreen from "../pages/faq";
import GalleryScreen from "../pages/gallery";
import HomeScreen from "../pages/home";
import PrivacyPolicyScreen from "../pages/privacy-policy";
import SignInScreen from "../pages/sign-in";
import TermsAndConditionsScreen from "../pages/terms-conditions";

const publicRoutes = [
  { path: "/", name: "home", Component: HomeScreen },
  { path: "/sign-in", name: "sign-in", Component: SignInScreen },
  {
    path: "/categories/:section",
    name: "categories",
    Component: CategoriesScreen,
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    Component: PrivacyPolicyScreen,
  },
  {
    path: "/terms-conditions",
    name: "terms-conditions",
    Component: TermsAndConditionsScreen,
  },
  {
    path: "/faq",
    name: "faq",
    Component: FAQScreen,
  },
  {
    path: "/gallery",
    name: "gallery",
    Component: GalleryScreen,
  },
];

export default publicRoutes;
