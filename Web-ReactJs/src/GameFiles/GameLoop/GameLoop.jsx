import 'react';
import '../../index.css';
import StateManager from '../GameStateManager';

function GameLoop() {
    return (
        <div>
            <h1>Game Loop</h1>
            <button onClick={ () => StateManager("MainMenu")}>Back to Main Menu</button>
        </div>
    );
}

export default GameLoop;
