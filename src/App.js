import { useEffect, useState } from "react";
import "./App.css";
import Locate from "./pages/Locate/Locate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/locate">
            <Locate />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
