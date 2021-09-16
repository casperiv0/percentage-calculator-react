import { ThemeProvider as MuiTheme, createTheme } from "@mui/material/styles";

const theme = createTheme();

export function ThemeProvider({ children }) {
  return <MuiTheme theme={theme}>{children}</MuiTheme>;
}
