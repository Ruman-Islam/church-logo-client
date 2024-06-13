const publicRoutes = [
  { path: "/", name: "home", Component: () => import("../pages/home") },
  {
    path: "/sign-in",
    name: "sign-in",
    Component: () => import("../pages/sign-in"),
  },
  {
    path: "/categories/:section",
    name: "categories",
    Component: () => import("../pages/categories"),
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
];

export default publicRoutes;
