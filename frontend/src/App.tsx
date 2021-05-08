import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import LoginForm from "./pages/login/login";
import RegisterForm from "./pages/register/register";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </Switch>
    </Router>
  );
}

export default App;
