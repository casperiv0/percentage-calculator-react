import { ThemeProvider as MuiTheme, StyledEngineProvider, createTheme } from "@mui/material/styles";
import type * as React from "react";

const theme = createTheme();

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MuiTheme theme={theme}>{children}</MuiTheme>;
}

export { StyledEngineProvider };
