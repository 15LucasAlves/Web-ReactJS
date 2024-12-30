import React from 'react';
import '../../index.css';

function MainMenu() {
  return (
    <div>
      <h1 className='gameTitle'>[XXXXX]</h1>  

      <div className='menuButtons'>
        <button className='startButton'>Start Game</button>
        <button className='achivButton'>Achievements</button>
        <button className='loginButton'>Log In</button>
      </div>
    </div>
  );
}

export default MainMenu;