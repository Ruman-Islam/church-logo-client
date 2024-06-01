import AOS from "aos";
import { Route, Routes } from "react-router-dom";
import NotFoundScreen from "./pages/not-found";
import privateRoutes from "./routes/privateRoutes";
import publicRoutes from "./routes/publicRoutes";
import PersistLogin from "./components/PersistLogin";

function App() {
  AOS.init();
  return (
    <>
      <Routes>
        <Route element={<PersistLogin />}>
          {publicRoutes.map(({ path, name, Component }) => (
            <Route key={name} path={path} element={<Component />} />
          ))}

          {privateRoutes.map(({ path, name, Component }) => (
            <Route key={name} path={path} element={<Component />} />
          ))}
        </Route>
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
}

export default App;
