import { Route, Routes } from "react-router-dom";
import publicRoutes from "./routes/publicRoutes";

function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map(({ path, name, Component }) => (
          <Route key={name} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
