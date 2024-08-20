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
    path: "order/logo-design/checkout",
    name: "order/logo-design/checkout",
    Component: () => import("../pages/order/logo-design/checkout"),
  },
];

export default privateRoutes;
