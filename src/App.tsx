import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";

import { Footer, Page } from "./components";
import { useFonts } from "./hooks/use-fonts";

const StudentList = lazy(() => import("./pages/student-list"));
const AddStudent = lazy(() => import("./pages/add-student"));

export function App() {
  useFonts();

  return (
    <BrowserRouter>
      <Helmet>
        <title>Desafio | Descomplica</title>
        <meta name="description" content="Desafio Tech Descomplica" />
        <link rel="preconnect" href={process.env.REACT_APP_ENVIROMENT_URL} />
      </Helmet>
      <CssBaseline />
      <Suspense fallback={<Page.Skeleton />}>
        <Switch>
          <Route path="/" exact component={StudentList} />
          <Route path="/add/:id?" exact component={AddStudent} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
