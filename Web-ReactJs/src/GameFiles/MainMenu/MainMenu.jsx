import React from 'react';
import './MainMenu.css';

function MainMenu() {
  return (
    <div className='mainMenu'>

      <h1 className='gameTitle'>[XXXXX]</h1> // This is a placeholder for the game title

      <div className='menuButtons'>
        <button className='menuButton StartGame'>Start Game</button>
        <button className='menuButton Achievements'>Achievements</button>
        <button className='menuButton Login'>Log In</button>
      </div>
    </div>
  );
}

export default MainMenu;