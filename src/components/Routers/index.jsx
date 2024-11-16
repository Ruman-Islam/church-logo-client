import { Fragment, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../../auth/RequireAuth";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PersistLogin from "../../components/PersistLogin";
import DashboardScreen from "../../pages/dashboard";
import NotFoundScreen from "../../pages/not-found";
import privateDashboardRoutes from "../../routes/privateDashboardRoutes";
import privateRoutes from "../../routes/privateRoutes";
import publicRoutes from "../../routes/publicRoutes";
import LoadInitialData from "../LoadInitialData";
import CrossLoader from "../common/CrossLoader";

export default function Routers() {
  return (
    <Fragment>
      <Suspense
        fallback={
          <Fragment>
            <Header topBarEnable="enable" />
            <CrossLoader />
            <Footer />
          </Fragment>
        }
      >
        <Routes>
          <Route element={<LoadInitialData />}>
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
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}
