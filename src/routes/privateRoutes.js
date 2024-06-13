const privateRoutes = [
  {
    path: "/profile",
    name: "home",
    Component: () => import("../pages/profile"),
  },
];

export default privateRoutes;
