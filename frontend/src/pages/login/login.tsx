import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserInput from "../../components/userinput/userinput";
import "./login.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const submit = async (e: any) => {
    e.preventDefault();

    if (email && password !== "") {
      try {
        const loginUser = await fetch(`http://localhost:8080/api/login`, {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const response = await loginUser.json();
        console.log(response);

        if (loginUser.status === 201) {
          setToken(response);
          history.push("/");
        } else {
          console.log(response);
          setShowMessage(true);
          setMessage("Email or password incorrect");
          setEmail("");
          setPassword("");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setShowMessage(true);
      setMessage(
        "All fields are required, please fill out the missing fields."
      );
    }
  };

  return (
    <form className="loginForm" onSubmit={submit}>
      <div className="loginFormInput">
        <UserInput
          divClass="login-input"
          labelClass="form-label"
          inputClass="form-input"
          title="Email adress"
          id="input-email"
          type="text"
          required="required"
          value={email}
          whenChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <UserInput
          divClass="login-input"
          labelClass="form-label"
          inputClass="form-input"
          title="Password"
          id="input-password"
          type="password"
          required="required"
          value={password}
          whenChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="buttonContainer">
        <div>
          {showMessage ? (
            <div className="login-form-message">{message}</div>
          ) : (
            <div> </div>
          )}
        </div>
        <button className="loginButton" type="submit">
          SIGN IN
        </button>
      </div>
    </form>
  );
}

function setToken(response: any) {
  localStorage.setItem("token", response.user.token);
  localStorage.setItem("userid", response.user.id);
  /* localStorage.setItem("useremail", response.user.email);
  localStorage.setItem("userbio", response.user.bio);
  localStorage.setItem("userimage", response.user.image);
  localStorage.setItem("username", response.user.username); */
};

export default LoginForm;
