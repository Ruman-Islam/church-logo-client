const publicRoutes = [
  { path: "/", name: "home", Component: () => import("../pages/home") },
  {
    path: "/sign-in",
    name: "sign-in",
    Component: () => import("../pages/sign-in"),
  },
  {
    path: "/forget-password",
    name: "forget-password",
    Component: () => import("../pages/forget-password"),
  },
  {
    path: "/reset-password/:token",
    name: "reset-password/:token",
    Component: () => import("../pages/reset-password"),
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
    path: "order/logo-design/design/:id",
    name: "order/logo-design/design/:id",
    Component: () => import("../pages/order/logo-design/design"),
  },
  {
    path: "order/logo-design/color/:id",
    name: "order/logo-design/color/:id",
    Component: () => import("../pages/order/logo-design/color"),
  },
  {
    path: "order/logo-design/add-ons/:id",
    name: "order/logo-design/add-ons/:id",
    Component: () => import("../pages/order/logo-design/add-ons"),
  },
  {
    path: "order/logo-design/review/:id",
    name: "order/logo-design/review/:id",
    Component: () => import("../pages/order/logo-design/review"),
  },
  {
    path: "order/web-design/brief/:id",
    name: "order/web-design/brief/:id",
    Component: () => import("../pages/order/web-design/brief"),
  },
  {
    path: "order/web-design/add-ons/:id",
    name: "order/web-design/add-ons/:id",
    Component: () => import("../pages/order/web-design/add-ons"),
  },
  {
    path: "order/web-design/review/:id",
    name: "order/web-design/review/:id",
    Component: () => import("../pages/order/web-design/review"),
  },
  {
    path: "order/branding/brief/:id",
    name: "order/branding/brief/:id",
    Component: () => import("../pages/order/branding/brief"),
  },
  {
    path: "order/branding/design/:id",
    name: "order/branding/design/:id",
    Component: () => import("../pages/order/branding/design"),
  },
  {
    path: "order/branding/color/:id",
    name: "order/branding/color/:id",
    Component: () => import("../pages/order/branding/color"),
  },
  {
    path: "order/branding/add-ons/:id",
    name: "order/branding/add-ons/:id",
    Component: () => import("../pages/order/branding/add-ons"),
  },
  {
    path: "order/branding/review/:id",
    name: "order/branding/review/:id",
    Component: () => import("../pages/order/branding/review"),
  },
  {
    path: "order/personal-signature/brief/:id",
    name: "order/personal-signature/brief/:id",
    Component: () => import("../pages/order/personal-signature/brief"),
  },
  {
    path: "order/personal-signature/design/:id",
    name: "order/personal-signature/design/:id",
    Component: () => import("../pages/order/personal-signature/design"),
  },
  {
    path: "order/personal-signature/color/:id",
    name: "order/personal-signature/color/:id",
    Component: () => import("../pages/order/personal-signature/color"),
  },
  {
    path: "order/personal-signature/add-ons/:id",
    name: "order/personal-signature/add-ons/:id",
    Component: () => import("../pages/order/personal-signature/add-ons"),
  },
  {
    path: "order/personal-signature/review/:id",
    name: "order/personal-signature/review/:id",
    Component: () => import("../pages/order/personal-signature/review"),
  },
  {
    path: "order/business-advertising/brief/:id",
    name: "order/business-advertising/brief/:id",
    Component: () => import("../pages/order/business-advertising/brief"),
  },
  {
    path: "order/business-advertising/color/:id",
    name: "order/business-advertising/color/:id",
    Component: () => import("../pages/order/business-advertising/color"),
  },
  {
    path: "order/business-advertising/add-ons/:id",
    name: "order/business-advertising/add-ons/:id",
    Component: () => import("../pages/order/business-advertising/add-ons"),
  },
  {
    path: "order/business-advertising/review/:id",
    name: "order/business-advertising/review/:id",
    Component: () => import("../pages/order/business-advertising/review"),
  },
  {
    path: "order/social-media-service/brief/:id",
    name: "order/social-media-service/brief/:id",
    Component: () => import("../pages/order/social-media-service/brief"),
  },
  {
    path: "order/social-media-service/add-ons/:id",
    name: "order/social-media-service/add-ons/:id",
    Component: () => import("../pages/order/social-media-service/add-ons"),
  },
  {
    path: "order/social-media-service/review/:id",
    name: "order/social-media-service/review/:id",
    Component: () => import("../pages/order/social-media-service/review"),
  },
  {
    path: "how-to-use-your-churchlogo",
    name: "how-to-use-your-churchlogo",
    Component: () => import("../pages/how-to-use-your-church-logo/index"),
  },
  {
    path: "blog",
    name: "blog",
    Component: () => import("../pages/blog/index"),
  },
  {
    path: "blog/analyzing-spotify-music-ui-ux",
    name: "blog/analyzing-spotify-music-ui-ux",
    Component: () => import("../pages/blog/pages/blog1"),
  },
];

export default publicRoutes;
