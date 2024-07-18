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
    path: "package/logo-design/logo-design-source-pack",
    name: "package/logo-design/logo-design-source-pack",
    Component: () =>
      import("../pages/packages/logo-design/logo-design-source-pack"),
  },
  {
    path: "package/logo-design/logo-design",
    name: "package/logo-design/logo-design",
    Component: () => import("../pages/packages/logo-design/logo-design"),
  },
  {
    path: "package/logo-design/logo-design-and-all",
    name: "package/logo-design/logo-design-and-all",
    Component: () =>
      import("../pages/packages/logo-design/logo-design-and-all"),
  },
  {
    path: "package/logo-design/stationery-design",
    name: "package/logo-design/stationery-design",
    Component: () => import("../pages/packages/logo-design/stationery-design"),
  },
  {
    path: "package/logo-design/business-card",
    name: "package/logo-design/business-card",
    Component: () => import("../pages/packages/logo-design/business-card"),
  },
  {
    path: "package/logo-design/social-media",
    name: "package/logo-design/social-media",
    Component: () => import("../pages/packages/logo-design/social-media"),
  },
  {
    path: "package/logo-design/logo-and-website",
    name: "package/logo-design/logo-and-website",
    Component: () =>
      import("../pages/packages/logo-design/logo-and-website-design"),
  },
  {
    path: "package/logo-design/full-service",
    name: "package/logo-design/full-service",
    Component: () => import("../pages/packages/logo-design/full-service"),
  },
  {
    path: "/reviews",
    name: "/reviews",
    Component: () => import("../pages/reviews"),
  },
];

export default publicRoutes;
