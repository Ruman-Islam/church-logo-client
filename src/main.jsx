const rootElement = document.getElementById("root");
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "react-photo-view/dist/react-photo-view.css";
import "react-quill/dist/quill.snow.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App.jsx";
import { env } from "./config/env.js";
import "./index.css";
import store from "./services/store.js";
import "./styles/cross.css";

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <GoogleOAuthProvider clientId={env.google_client_id}>
              <App />
            </GoogleOAuthProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
