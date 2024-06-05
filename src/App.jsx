import AOS from "aos";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import NotFoundScreen from "./pages/not-found";
import privateRoutes from "./routes/privateRoutes";
import publicRoutes from "./routes/publicRoutes";

function App() {
  AOS.init();
  return (
    <>
      <Routes>
        <Route element={<PersistLogin />}>
          {publicRoutes.map(({ path, name, Component }) => (
            <Route key={name} path={path} element={<Component />} />
          ))}

          <Route element={<RequireAuth />}>
            {privateRoutes.map(({ path, name, Component }) => (
              <Route key={name} path={path} element={<Component />} />
            ))}
          </Route>

          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
