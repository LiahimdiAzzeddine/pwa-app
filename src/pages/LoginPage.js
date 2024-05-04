// LoginPage.js
import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/dashboard?username=${username}&password=${password}`);
  };

  return (
    <>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      </header>
    </>
  );
};
