import AOS from "aos";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import Loader from "./components/common/Loader";
import NotFoundScreen from "./pages/not-found";
import privateRoutes from "./routes/privateRoutes";
import publicRoutes from "./routes/publicRoutes";

function App() {
  AOS.init();
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<PersistLogin />}>
            {publicRoutes.map(({ path, name, Component }) => {
              const LazyComponent = lazy(Component);
              return (
                <Route key={name} path={path} element={<LazyComponent />} />
              );
            })}

            <Route element={<RequireAuth />}>
              {privateRoutes.map(({ path, name, Component }) => {
                const LazyComponent = lazy(Component);
                return (
                  <Route key={name} path={path} element={<LazyComponent />} />
                );
              })}
            </Route>

            <Route path="*" element={<NotFoundScreen />} />
          </Route>
        </Routes>
        <Toaster />
      </Suspense>
    </>
  );
}

export default App;
