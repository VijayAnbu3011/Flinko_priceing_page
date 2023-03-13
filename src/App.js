import "./styles/color.scss";
import "./styles/font.scss";
import "./styles/global.scss";
import "./styles/width.scss";

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LayoutComponent from "./components/organisms/LayoutComponent";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutComponent />
    </ThemeProvider>
  );
};

export default App;