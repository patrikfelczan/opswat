import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserInput from '../../components/userinput/userinput';

function RegisterForm() {
  const history = useHistory();
  const getResponse = (response: any) => {
    return new Promise(() => {
      setMessage(response);
      setShowMessage(true);
    });
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const submit = async (e: any) => {
    e.preventDefault();
    try {
      const postUser = await fetch(
        `http://localhost:8080/api/users`,
        {
          method: 'POST',
          body: JSON.stringify({ username, email, password }),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (postUser.status === 201) {
        history.push('/login');
      }
      const response = await postUser.json();
      await getResponse(response.message);
    } catch (error) {
      console.log(error.message);
      getResponse('Connection failed.');
    }
  };

  return (
    <form id="register-form" onSubmit={submit}>
      <div>
        <UserInput
          divClass="register-input"
          labelClass="form-label"
          inputClass="form-input"
          title="Username"
          id="input-username"
          type="text"
          required="required"
          value={username}
          whenChange={e => {
            setUsername(e.target.value);
          }}
        />
        <UserInput
          divClass="register-input"
          labelClass="form-label"
          inputClass="form-input"
          title="E-mail"
          id="input-email"
          type="email"
          required="required"
          value={email}
          whenChange={e => setEmail(e.target.value)}
        />
        <UserInput
          divClass="register-input"
          labelClass="form-label"
          inputClass="form-input"
          title="Password"
          id="input-password"
          type="password"
          required="required"
          value={password}
          whenChange={e => setPassword(e.target.value)}
        />
      </div>
      <div id="register-button-div">
        {showMessage ? (
          <div id="register-form-message">{message}</div>
        ) : (
          <div> </div>
        )}
        <button id="register-button" type="submit">
          {' '}
          REGISTER{' '}
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
