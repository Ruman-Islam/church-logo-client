import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersistLogin from "./components/PersistLogin";
import JumpToTopBtn from "./components/common/JumpToTopBtn";
import Loader from "./components/common/Loader";
import DashboardScreen from "./pages/dashboard";
import NotFoundScreen from "./pages/not-found";
import privateDashboardRoutes from "./routes/privateDashboardRoutes";
import privateRoutes from "./routes/privateRoutes";
import publicRoutes from "./routes/publicRoutes";

export default function Routers() {
  return (
    <>
      <Suspense
        fallback={
          <>
            <Header topBarEnable="enable" />
            <Loader />
            <Footer />
          </>
        }
      >
        <Routes>
          <Route element={<PersistLogin />}>
            {publicRoutes.map(({ path, Component }) => {
              const LazyComponent = lazy(Component);
              return (
                <Route key={path} path={path} element={<LazyComponent />} />
              );
            })}

            <Route element={<RequireAuth />}>
              {privateRoutes.map(({ path, Component }) => {
                const LazyComponent = lazy(Component);
                return (
                  <Route key={path} path={path} element={<LazyComponent />} />
                );
              })}

              <Route path="/dashboard" element={<DashboardScreen />}>
                {privateDashboardRoutes.map(({ path, name, Component }) => {
                  const LazyComponent = lazy(Component);
                  return (
                    <Route
                      key={name}
                      path={path}
                      index={name === "orders"}
                      element={<LazyComponent />}
                    />
                  );
                })}
              </Route>
            </Route>

            <Route path="*" element={<NotFoundScreen />} />
          </Route>
        </Routes>

        <JumpToTopBtn />
        <Toaster position="bottom-center" />
      </Suspense>
    </>
  );
}
