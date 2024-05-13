import HomeScreen from "../pages/home";
import SignInScreen from "../pages/sign-in";

const publicRoutes = [
  { path: "/", name: "home", Component: HomeScreen },
  { path: "/sign-in", name: "sign-in", Component: SignInScreen },
];

export default publicRoutes;
