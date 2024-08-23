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
  {
    path: "order/logo-design/payment",
    name: "order/logo-design/payment",
    Component: () => import("../pages/order/logo-design/payment"),
  },
  {
    path: "order/web-design/checkout",
    name: "order/web-design/checkout",
    Component: () => import("../pages/order/web-design/checkout"),
  },
  {
    path: "order/web-design/payment",
    name: "order/web-design/payment",
    Component: () => import("../pages/order/web-design/payment"),
  },
  {
    path: "order/branding/checkout",
    name: "order/branding/checkout",
    Component: () => import("../pages/order/branding/checkout"),
  },
  {
    path: "order/branding/payment",
    name: "order/branding/payment",
    Component: () => import("../pages/order/branding/payment"),
  },
  {
    path: "order/personal-signature/checkout",
    name: "order/personal-signature/checkout",
    Component: () => import("../pages/order/personal-signature/checkout"),
  },
  {
    path: "order/personal-signature/payment",
    name: "order/personal-signature/payment",
    Component: () => import("../pages/order/personal-signature/payment"),
  },
  {
    path: "order/business-advertising/checkout",
    name: "order/business-advertising/checkout",
    Component: () => import("../pages/order/business-advertising/checkout"),
  },
  {
    path: "order/business-advertising/payment",
    name: "order/business-advertising/payment",
    Component: () => import("../pages/order/business-advertising/payment"),
  },
  {
    path: "order/social-media-service/checkout",
    name: "order/social-media-service/checkout",
    Component: () => import("../pages/order/social-media-service/checkout"),
  },
  {
    path: "order/social-media-service/payment",
    name: "order/social-media-service/payment",
    Component: () => import("../pages/order/social-media-service/payment"),
  },
];

export default privateRoutes;
