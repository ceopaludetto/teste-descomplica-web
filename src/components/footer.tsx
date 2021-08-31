import { Link } from "react-router-dom";

import { Box, Grid } from "@material-ui/core";

import logo from "../assets/logo.png";
import webpLogo from "../assets/logo.webp";

export function Footer() {
  return (
    <Box mt={6} mb={4}>
      <Grid container justifyContent="center">
        <Grid item>
          <Link to="/">
            <picture>
              <source srcSet={webpLogo} type="image/webp" />
              <img width={150} height={45} src={logo} alt="Logo Descomplica" />
            </picture>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
