import HomeScreen from "../pages/home";
import LogInScreen from "../pages/login";
import RegisterScreen from "../pages/register";

const publicRoutes = [
  { path: "/", name: "home", Component: HomeScreen },
  { path: "/login", name: "login", Component: LogInScreen },
  { path: "/register", name: "register", Component: RegisterScreen },
];

export default publicRoutes;
