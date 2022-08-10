import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArrayShow from "./pages/ArrayShow";
import FullReduxComponents from "./pages/FullReduxComponents";
import Home from "./pages/Home";
import SecondReduxPage from "./pages/SecondReduxPage";
const App = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={FullReduxComponents} />
      <Route exact path="/second" component={SecondReduxPage} />
      <Route exact path="/array" component={ArrayShow} />
    </Switch>
  );
};

export default App;
