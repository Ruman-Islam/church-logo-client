import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import 'react-photo-view/dist/react-photo-view.css';
import App from "./App.jsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
