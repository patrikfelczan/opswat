import react from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="links">
      <div className="loginLink">
        <Link to="/login">Login</Link>
      </div>
      <div className="registerLink">
        <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
};

export default Header;
