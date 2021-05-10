import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import Article from "./pages/articles/article";
import LoginForm from "./pages/login/login";
import RegisterForm from "./pages/register/register";
import Users from "./pages/userList/userList";
import ProfileData from "./pages/userprofile/userprofile";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/articles" component={Article} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/profile" component={ProfileData} />
      </Switch>
    </Router>
  );
}

export default App;
