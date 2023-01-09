import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ThemeProvider, StyledEngineProvider } from "./components/theme-provider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
