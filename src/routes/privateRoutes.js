const privateRoutes = [
  {
    path: "/profile",
    name: "profile",
    Component: () => import("../pages/profile"),
  },
  {
    path: "/profile/account-setting",
    name: "profile/account-setting",
    Component: () => import("../pages/profile/account-setting"),
  },
  {
    path: "/profile/chat",
    name: "profile/chat",
    Component: () => import("../pages/profile/chat"),
  },
];

export default privateRoutes;
