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
    path: "/gallery/others",
    name: "/gallery/others",
    Component: () => import("../pages/gallery/others"),
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
    path: "/categories/others",
    name: "/categories/others",
    Component: () => import("../pages/categories/others"),
  },
  {
    path: "/logo-design/logo-design-pack",
    name: "/logo-design/logo-design-pack",
    Component: () => import("../pages/packages/logo-design/logo-design-pack"),
  },
];

export default publicRoutes;
