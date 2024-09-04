const privateDashboardRoutes = [
  {
    name: "orders",
    Component: () => import("../pages/dashboard/components/Orders"),
  },
  {
    path: "orders",
    name: "orders",
    Component: () => import("../pages/dashboard/components/Orders"),
  },
  {
    path: "inbox/:id",
    name: "inbox/:id",
    Component: () => import("../pages/dashboard/components/ChatBox.jsx"),
  },
];

export default privateDashboardRoutes;
