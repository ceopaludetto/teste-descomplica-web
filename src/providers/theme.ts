import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  shape: { borderRadius: 6 },
  palette: {
    type: "dark",
    background: {
      default: "#111827",
      paper: "#1F2937",
    },
    primary: {
      light: "#a3ffe9",
      main: "#6EE7B7",
      dark: "#35b487",
      contrastText: "#000",
    },
    error: {
      light: "#ffd7d6",
      main: "#FCA5A5",
      dark: "#c77576",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  props: {
    MuiButton: {
      variant: "contained",
      color: "primary",
      disableElevation: true,
    },
    MuiTextField: {
      variant: "outlined",
      fullWidth: true,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "capitalize",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 34,
      },
    },
  },
});
