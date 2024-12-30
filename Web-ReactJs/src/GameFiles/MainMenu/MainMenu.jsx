import React, { useState } from 'react';
import Login from '../Login/Login';
import '../../index.css';


function MainMenu() {

  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <Login />;
  }

  return (
    <body>
      <div class = "retro-container">
        <div class = "bg-terminal">
          <h1 className='gameTitle'>77 73 83 83 73 79 78 32 88 88 73 10</h1>  

          <div className='menuButtons'>
            <button className='startButton'>Start Game</button>
            <button className='achivButton'>Achievements</button>
            <button className='loginButton' onClick={() => setShowLogin(true)}>Log In</button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default MainMenu;