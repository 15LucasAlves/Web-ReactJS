import React from 'react';
import '../Components/buttonComponent.jsx'

function MainMenu() {
  return (
    <div className='mainMenu'>

      <h1 className='gameTitle'>[XXXXX]</h1> // This is a placeholder for the game title

      <div className='menuButtons'>
        <buttonComponent>Start Game</buttonComponent>
        <buttonComponent>Achievements</buttonComponent>
        <buttonComponent>Log In</buttonComponent>
      </div>
    </div>
  );
}

export default MainMenu;