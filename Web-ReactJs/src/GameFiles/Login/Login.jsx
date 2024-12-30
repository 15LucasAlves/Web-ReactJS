import React from 'react';
import LoginEmail from './LoginEmail';
import LoginGoogle from './LoginGoogle';
import './Login.css';

function Login({ onBackToMenu, onLoginSuccess }) {
  return (
    <div className="loginContainer">
      <button className="backButton" onClick={onBackToMenu}>← Back to Menu</button>
      <h1>Login</h1>
      <LoginEmail onLoginSuccess={onLoginSuccess} />
      <div className="divider">
        <span>OR</span>
      </div>
      <LoginGoogle onLoginSuccess={onLoginSuccess} />
    </div>
  );
}

export default Login; 