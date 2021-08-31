import { ReactNode } from "react";

import { Box, Grid, Typography, Container } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

interface PageProps {
  title: ReactNode;
  subTitle: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
}

export function Page({ children, title, subTitle, actions }: PageProps) {
  return (
    <Container>
      <Box my={3}>
        <Grid spacing={3} alignItems="center" container>
          <Grid item xs>
            <Typography color="primary" variant="subtitle1">
              {subTitle}
            </Typography>
            <Typography component="h1" variant="h4">
              {title}
            </Typography>
          </Grid>
          {actions && <Grid item>{actions}</Grid>}
        </Grid>
      </Box>
      {children}
    </Container>
  );
}

Page.Skeleton = () => (
  <Container>
    <Box my={3}>
      <Typography color="primary" variant="subtitle1">
        <Skeleton width={200} />
      </Typography>
      <Typography component="h1" variant="h4">
        <Skeleton width={300} />
      </Typography>
    </Box>
  </Container>
);

Page.defaultProps = {
  actions: undefined,
};
