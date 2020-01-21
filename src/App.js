import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Info from "./pages/Info";

function App() {
  return (
    <Fragment>
      <Search />
      <Switch>
        <Route path="/show/:id" component={Info} />
      </Switch>
    </Fragment>
  );
}

export default App;
