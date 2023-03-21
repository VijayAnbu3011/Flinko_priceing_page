import "./styles/color.scss";
import "./styles/font.scss";
import "./styles/global.scss";
import "./styles/width.scss";

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LayoutComponent from "./components/organisms/LayoutComponent";
import { ToastProvider } from "react-toast-notifications";
import CustomToast from "./components/atoms/CustomToast";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider
        components={{ Toast: CustomToast }}
        placement="top-right"
        autoDismiss
        autoDismissTimeout={2000}
      >
        <LayoutComponent />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
