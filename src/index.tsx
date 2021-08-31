import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-ui/styles";

import { App } from "./App";
import { apolloClient } from "./providers/apollo";
import { theme } from "./providers/theme";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root"),
);
