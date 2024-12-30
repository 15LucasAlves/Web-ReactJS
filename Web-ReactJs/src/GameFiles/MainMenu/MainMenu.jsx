import React, { useState } from 'react';
import Login from '../Login/Login';
import '../../index.css';

function MainMenu() {
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <Login />;
  }

  return (
    <div>
      <h1 className='gameTitle'>[XXXXX]</h1>  

      <div className='menuButtons'>
        <button className='startButton'>Start Game</button>
        <button className='achivButton'>Achievements</button>
        <button className='loginButton' onClick={() => setShowLogin(true)}>Log In</button>
      </div>
    </div>
  );
}

export default MainMenu;