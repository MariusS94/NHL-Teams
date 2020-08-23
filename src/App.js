import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AllTeams from "./pages/AllTeams";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/teams/:name">
          <Details></Details>
        </Route>
        <Route exact path="/teams">
          <AllTeams></AllTeams>
        </Route>
        <Route path="/">
          <Redirect to="/teams"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
