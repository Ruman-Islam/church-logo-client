import Categories from "../pages/categories";
import HomeScreen from "../pages/home";
import PrivacyPolicy from "../pages/privacy-policy";
import SignInScreen from "../pages/sign-in";
import TermsAndConditions from "../pages/terms-conditions";

const publicRoutes = [
  { path: "/", name: "home", Component: HomeScreen },
  { path: "/sign-in", name: "sign-in", Component: SignInScreen },
  {
    path: "/categories/:section",
    name: "categories",
    Component: Categories,
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    Component: PrivacyPolicy,
  },
  {
    path: "/terms-conditions",
    name: "terms-conditions",
    Component: TermsAndConditions,
  },
];

export default publicRoutes;
