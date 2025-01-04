import React from 'react';
import LoginEmail from './LoginEmail';
import LoginGoogle from './LoginGoogle';
import '../../index.css';
import StateManager from '../GameStateManager';

function Login() {
  return (
    <body>
      <div className="bg-terminal">
        <div className="retro-container">
          <div className="loginContainer">
            <button className="backButton" onClick={() => StateManager("MainMenu")}>
              ← Back to Menu
            </button>
            <LoginEmail onLoginSuccess={() => StateManager("MainMenu")} />
            <div className="divider">
              <span class="or">OR</span>
            </div>
            <LoginGoogle onLoginSuccess={() => StateManager("MainMenu")} />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login; 