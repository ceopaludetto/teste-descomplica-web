import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Poppins300 from "../assets/fonts/poppins-300.woff2";
import Poppins400 from "../assets/fonts/poppins-400.woff2";
import Poppins500 from "../assets/fonts/poppins-500.woff2";
import Poppins600 from "../assets/fonts/poppins-600.woff2";

export const useFonts = makeStyles((theme: Theme) => ({
  "@global": {
    "::selection": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  "@font-face": [
    {
      fontFamily: "Poppins",
      fontDisplay: "swap",
      fontWeight: 300,
      src: `local(Poppins-Light), local(Poppins Light), url(${Poppins300})`,
    },
    {
      fontFamily: "Poppins",
      fontDisplay: "swap",
      fontWeight: 400,
      src: `local(Poppins-Regular), local(Poppins Regular), url(${Poppins400})`,
    },
    {
      fontFamily: "Poppins",
      fontDisplay: "swap",
      fontWeight: 500,
      src: `local(Poppins-Medium), local(Poppins Medium), url(${Poppins500})`,
    },
    {
      fontFamily: "Poppins",
      fontDisplay: "swap",
      fontWeight: 600,
      src: `local(Poppins-Bold), local(Poppins Bold), url(${Poppins600})`,
    },
  ] as any,
}));
