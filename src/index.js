import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { AuthProvider } from "./context/AuthContext";
import GlobalStyle from "./utils/globals";
import App from "./containers/App";
import theme from "./utils/theme";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
