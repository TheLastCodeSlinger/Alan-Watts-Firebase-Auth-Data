import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from './utils/globals'
import App from "./components/App";
import theme from "./utils/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
