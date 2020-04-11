import React from "react";
import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Home from "./component/Home";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Message from "./component/Message";
function App() {

  return (
    <Router>
      <div>
        

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      );
}

export default App;
