import { Route, Routes } from "react-router-dom";
import NotFoundScreen from "./pages/not-found";
import publicRoutes from "./routes/publicRoutes";

function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map(({ path, name, Component }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}

        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </>
  );
}

export default App;
