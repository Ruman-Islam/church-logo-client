import Categories from "../pages/categories";
import HomeScreen from "../pages/home";
import LogInScreen from "../pages/login";
import PrivacyPolicy from "../pages/privacy-policy";
import RegisterScreen from "../pages/register";
import TermsAndConditions from "../pages/terms-conditions";

const publicRoutes = [
  { path: "/", name: "home", Component: HomeScreen },
  { path: "/login", name: "login", Component: LogInScreen },
  { path: "/register", name: "register", Component: RegisterScreen },
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
