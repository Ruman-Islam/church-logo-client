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
    Component: () =>
      import("../pages/packages"),
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
    path: "package/web-design/website-builders",
    name: "package/web-design/website-builders",
    Component: () => import("../pages/packages/web-design/website-builders"),
  },
  {
    path: "package/web-design/website-design",
    name: "package/web-design/website-design",
    Component: () => import("../pages/packages/web-design/website-design"),
  },
  {
    path: "package/web-design/website-development",
    name: "package/web-design/website-development",
    Component: () => import("../pages/packages/web-design/website-development"),
  },
  {
    path: "package/web-design/website-redesign",
    name: "package/web-design/website-redesign",
    Component: () => import("../pages/packages/web-design/website-redesign"),
  },
  {
    path: "package/web-design/custom-website-development",
    name: "package/web-design/custom-website-development",
    Component: () =>
      import("../pages/packages/web-design/custom-website-development"),
  },
  {
    path: "package/web-design/existing-bug-fix",
    name: "package/web-design/existing-bug-fix",
    Component: () => import("../pages/packages/web-design/existing-bug-fix"),
  },
  {
    path: "package/web-design/landing-page-design",
    name: "package/web-design/landing-page-design",
    Component: () => import("../pages/packages/web-design/landing-page-design"),
  },
  {
    path: "package/web-design/blog",
    name: "package/web-design/blog",
    Component: () => import("../pages/packages/web-design/blog"),
  },
  {
    path: "package/web-design/full-service",
    name: "package/web-design/full-service",
    Component: () => import("../pages/packages/web-design/full-service"),
  },
  {
    path: "package/branding/logo-and-brand",
    name: "package/branding/logo-and-brand",
    Component: () => import("../pages/packages/branding/logo-and-brand"),
  },
  {
    path: "package/branding/logo-and-brand-guide",
    name: "package/branding/logo-and-brand-guide",
    Component: () => import("../pages/packages/branding/logo-and-brand-guide"),
  },
  {
    path: "package/branding/logo-and-brand-identity",
    name: "package/branding/logo-and-brand-identity",
    Component: () =>
      import("../pages/packages/branding/logo-and-brand-identity"),
  },
  {
    path: "package/branding/brand-identity-stationary-design",
    name: "package/branding/brand-identity-stationary-design",
    Component: () =>
      import("../pages/packages/branding/brand-identity-stationary-design"),
  },
  {
    path: "package/branding/brand-identity-and-website-design",
    name: "package/branding/brand-identity-and-website-design",
    Component: () =>
      import("../pages/packages/branding/brand-identity-and-website-design"),
  },
  {
    path: "package/branding/full-service-logo-design",
    name: "package/branding/full-service-logo-design",
    Component: () =>
      import("../pages/packages/branding/full-service-logo-design"),
  },
  {
    path: "package/personal-signature/signature-logo-design-source-pack",
    name: "package/personal-signature/signature-logo-design-source-pack",
    Component: () =>
      import(
        "../pages/packages/personal-signature/signature-logo-design-source-pack"
      ),
  },
  {
    path: "package/personal-signature/signature-logo-design",
    name: "package/personal-signature/signature-logo-design",
    Component: () =>
      import("../pages/packages/personal-signature/signature-logo-design"),
  },
  {
    path: "package/personal-signature/full-service-signature-logo-design",
    name: "package/personal-signature/full-service-signature-logo-design",
    Component: () =>
      import(
        "../pages/packages/personal-signature/full-service-signature-logo-design"
      ),
  },
  {
    path: "package/business-advertising/flyer-design",
    name: "package/business-advertising/flyer-design",
    Component: () =>
      import("../pages/packages/business-advertising/flyer-design"),
  },
  {
    path: "package/business-advertising/leaflet-design",
    name: "package/business-advertising/leaflet-design",
    Component: () =>
      import("../pages/packages/business-advertising/leaflet-design"),
  },
  {
    path: "package/business-advertising/poster-design",
    name: "package/business-advertising/poster-design",
    Component: () =>
      import("../pages/packages/business-advertising/poster-design"),
  },
  {
    path: "package/business-advertising/infographic-design",
    name: "package/business-advertising/infographic-design",
    Component: () =>
      import("../pages/packages/business-advertising/infographic-design"),
  },
  {
    path: "package/business-advertising/brochure-design",
    name: "package/business-advertising/brochure-design",
    Component: () =>
      import("../pages/packages/business-advertising/brochure-design"),
  },
  {
    path: "package/business-advertising/website-header-design",
    name: "package/business-advertising/website-header-design",
    Component: () =>
      import("../pages/packages/business-advertising/website-header-design"),
  },
  {
    path: "package/business-advertising/other-business-advertising",
    name: "package/business-advertising/other-business-advertising",
    Component: () =>
      import(
        "../pages/packages/business-advertising/other-business-advertising"
      ),
  },
  {
    path: "order/brief/:id",
    name: "order/brief",
    Component: () => import("../pages/order/brief"),
  },
  {
    path: "order/color",
    name: "order/color",
    Component: () => import("../pages/order/color"),
  },
];

export default publicRoutes;
