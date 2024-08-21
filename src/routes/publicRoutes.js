const publicRoutes = [
  { path: "/", name: "home", Component: () => import("../pages/home") },
  {
    path: "/sign-in",
    name: "sign-in",
    Component: () => import("../pages/sign-in"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    Component: () => import("../pages/privacy-policy"),
  },
  {
    path: "/terms-conditions",
    name: "terms-conditions",
    Component: () => import("../pages/terms-conditions"),
  },
  {
    path: "/reviews",
    name: "/reviews",
    Component: () => import("../pages/reviews"),
  },
  {
    path: "/faq",
    name: "faq",
    Component: () => import("../pages/faq"),
  },
  {
    path: "/gallery/logo-design",
    name: "/gallery/logo-design",
    Component: () => import("../pages/gallery/logo-design"),
  },
  {
    path: "/gallery/web-design",
    name: "/gallery/web-design",
    Component: () => import("../pages/gallery/web-design"),
  },
  {
    path: "/gallery/branding",
    name: "/gallery/branding",
    Component: () => import("../pages/gallery/branding"),
  },
  {
    path: "/gallery/personal-signature",
    name: "/gallery/personal-signature",
    Component: () => import("../pages/gallery/personal-signature"),
  },
  {
    path: "/gallery/business-advertising",
    name: "/gallery/business-advertising",
    Component: () => import("../pages/gallery/business-advertising"),
  },
  {
    path: "/gallery/social-media-service",
    name: "/gallery/social-media-service",
    Component: () => import("../pages/gallery/social-media-service"),
  },
  {
    path: "/categories/logo-design",
    name: "/categories/logo-design",
    Component: () => import("../pages/categories/logo-design"),
  },
  {
    path: "/categories/web-design",
    name: "/categories/web-design",
    Component: () => import("../pages/categories/web-design"),
  },
  {
    path: "/categories/branding",
    name: "/categories/branding",
    Component: () => import("../pages/categories/branding"),
  },
  {
    path: "/categories/personal-signature",
    name: "/categories/personal-signature",
    Component: () => import("../pages/categories/personal-signature"),
  },
  {
    path: "/categories/business-advertising",
    name: "/categories/business-advertising",
    Component: () => import("../pages/categories/business-advertising"),
  },
  {
    path: "/categories/social-media-service",
    name: "/categories/social-media-service",
    Component: () => import("../pages/categories/social-media-service"),
  },
  {
    path: "package/:id",
    name: "package/:id",
    Component: () => import("../pages/packages"),
  },
  {
    path: "order/logo-design/brief/:id",
    name: "order/logo-design/brief/:id",
    Component: () => import("../pages/order/logo-design/brief"),
  },
  {
    path: "order/logo-design/design",
    name: "order/logo-design/design",
    Component: () => import("../pages/order/logo-design/design"),
  },
  {
    path: "order/logo-design/color",
    name: "order/logo-design/color",
    Component: () => import("../pages/order/logo-design/color"),
  },
  {
    path: "order/logo-design/add-ons",
    name: "order/logo-design/add-ons",
    Component: () => import("../pages/order/logo-design/add-ons"),
  },
  {
    path: "order/logo-design/review",
    name: "order/logo-design/review",
    Component: () => import("../pages/order/logo-design/review"),
  },
  {
    path: "order/web-design/brief/:id",
    name: "order/web-design/brief/:id",
    Component: () => import("../pages/order/web-design/brief"),
  },
  {
    path: "order/web-design/design",
    name: "order/web-design/design",
    Component: () => import("../pages/order/web-design/design"),
  },
  {
    path: "order/web-design/color",
    name: "order/web-design/color",
    Component: () => import("../pages/order/web-design/color"),
  },
  {
    path: "order/web-design/add-ons",
    name: "order/web-design/add-ons",
    Component: () => import("../pages/order/web-design/add-ons"),
  },
  {
    path: "order/web-design/review",
    name: "order/web-design/review",
    Component: () => import("../pages/order/web-design/review"),
  },
  {
    path: "order/branding/brief/:id",
    name: "order/branding/brief/:id",
    Component: () => import("../pages/order/branding/brief"),
  },
  {
    path: "order/branding/design",
    name: "order/branding/design",
    Component: () => import("../pages/order/branding/design"),
  },
  {
    path: "order/branding/color",
    name: "order/branding/color",
    Component: () => import("../pages/order/branding/color"),
  },
  {
    path: "order/branding/add-ons",
    name: "order/branding/add-ons",
    Component: () => import("../pages/order/branding/add-ons"),
  },
  {
    path: "order/branding/review",
    name: "order/branding/review",
    Component: () => import("../pages/order/branding/review"),
  },
];

export default publicRoutes;
