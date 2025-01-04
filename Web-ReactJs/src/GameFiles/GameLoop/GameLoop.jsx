import 'react';
import '../../index.css';
import StateManager from '../GameStateManager';
import scene from './story.json';

const getJson = () => {

}

function GameLoop() {
    return (
        <body>
            <div class='text-container'>

            </div>

            <div class='rightSide'>
                <div class='images'>

                </div>

                <div class='buttonsGame'> 
                    <button class='logGame'>Mission Log</button>
                    <button class='mainMenuGame' onClick={() => StateManager("MainMenu")}>Main Menu</button>
                </div>
            </div>

        </body>
    );
}

export default GameLoop;
