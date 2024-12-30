import React from 'react';
import LoginEmail from './LoginEmail';
import LoginGoogle from './LoginGoogle';
import './Login.css';

function Login({ onBackToMenu, onLoginSuccess }) {
  return (
    <body>
      <div class = "retro-container">
        <div class = "bg-terminal">
          <div className="loginContainer">
            <button className="backButton" onClick={onBackToMenu}>← Back to Menu</button>
            <LoginEmail onLoginSuccess={onLoginSuccess} />
            <div className="divider">
              <span class = "or">OR</span>
            </div>
            <LoginGoogle onLoginSuccess={onLoginSuccess} />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login; 