import React from "react";
import NavBar from "./components/NavBar";
import PrivateRoute from './components/PrivateRoute';
import { useAuth0 } from "./react-auth0-spa";

import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
         <h1>Piirtoalias</h1>
        </header>
        <nav>
           <NavBar />
        </nav>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
