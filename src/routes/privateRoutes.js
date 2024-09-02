const privateRoutes = [
  {
    path: "/profile",
    name: "/profile",
    Component: () => import("../pages/profile"),
  },
  {
    path: "/account-settings",
    name: "/account-settings",
    Component: () => import("../pages/account-settings"),
  },
  {
    path: "/dashboard",
    name: "/dashboard",
    Component: () => import("../pages/dashboard"),
  },
  {
    path: "/order/logo-design/checkout/:id",
    name: "/order/logo-design/checkout/:id",
    Component: () => import("../pages/order/logo-design/checkout"),
  },
  {
    path: "/order/logo-design/payment",
    name: "/order/logo-design/payment",
    Component: () => import("../pages/order/logo-design/payment"),
  },
  {
    path: "/order/web-design/checkout/:id",
    name: "/order/web-design/checkout/:id",
    Component: () => import("../pages/order/web-design/checkout"),
  },
  {
    path: "/order/web-design/payment",
    name: "/order/web-design/payment",
    Component: () => import("../pages/order/web-design/payment"),
  },
  {
    path: "/order/branding/checkout/:id",
    name: "/order/branding/checkout/:id",
    Component: () => import("../pages/order/branding/checkout"),
  },
  {
    path: "/order/branding/payment",
    name: "/order/branding/payment",
    Component: () => import("../pages/order/branding/payment"),
  },
  {
    path: "/order/personal-signature/checkout/:id",
    name: "/order/personal-signature/checkout/:id",
    Component: () => import("../pages/order/personal-signature/checkout"),
  },
  {
    path: "/order/personal-signature/payment",
    name: "/order/personal-signature/payment",
    Component: () => import("../pages/order/personal-signature/payment"),
  },
  {
    path: "/order/business-advertising/checkout/:id",
    name: "/order/business-advertising/checkout/:id",
    Component: () => import("../pages/order/business-advertising/checkout"),
  },
  {
    path: "/order/business-advertising/payment",
    name: "/order/business-advertising/payment",
    Component: () => import("../pages/order/business-advertising/payment"),
  },
  {
    path: "/order/social-media-service/checkout/:id",
    name: "/order/social-media-service/checkout/:id",
    Component: () => import("../pages/order/social-media-service/checkout"),
  },
  {
    path: "/order/social-media-service/payment",
    name: "/order/social-media-service/payment",
    Component: () => import("../pages/order/social-media-service/payment"),
  },
  {
    path: "/verify-email/:token",
    name: "/verify-email/:token",
    Component: () => import("../pages/verify-email"),
  },
  {
    path: "/order/order-activities/:id",
    name: "/order/order-activities/:id",
    Component: () => import("../pages/order/order-activities"),
  },
  {
    path: "/order/order-details/:id",
    name: "/order/order-details/:id",
    Component: () => import("../pages/order/order-details"),
  },
  {
    path: "/order/order-requirements/:id",
    name: "/order/order-requirements/:id",
    Component: () => import("../pages/order/order-requirements"),
  },
  {
    path: "/dashboard/chat/:id",
    name: "/dashboard/chat/:id",
    Component: () => import("../pages/dashboard/chat.jsx"),
  },
];

export default privateRoutes;
