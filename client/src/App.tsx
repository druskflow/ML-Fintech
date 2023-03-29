import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return <div className="app">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      hi
    </ThemeProvider>
  </div>;
}

export default App
