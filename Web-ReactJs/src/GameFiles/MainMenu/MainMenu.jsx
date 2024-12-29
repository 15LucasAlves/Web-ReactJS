import './MainMenu.css';

function MainMenu() {
  return (
    <div className='main-menu'>
      <h1 className='game-title'>Game Title</h1>
      <div className='menu-buttons'>
        <button className='menu-button start-game'>Start Game</button>
        <button className='menu-button achievements'>Achievements</button>
        <button className='menu-button login'>Log In</button>
      </div>
    </div>
  );
}

export default MainMenu;