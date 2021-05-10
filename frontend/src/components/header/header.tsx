import react from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="links">
      <div className="loginLink">
        <Link to="/login">Login</Link>
      </div>
      <div className="registerLink">
        <Link to="/register">Sign up</Link>
      </div>
      <div className="articlesLink">
        <Link to="/articles">Articles</Link>
      </div>
      <div className="userprofileLink">
        <Link to="/profile">User-Profile</Link>
      </div>
      <div className="userList">
        <Link to="/users">User-List</Link>
      </div>
    </div>
  );
};

export default Header;
