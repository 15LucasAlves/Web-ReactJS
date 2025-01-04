import 'react';
import '../../index.css';
import StateManager from '../GameStateManager';
import scene from './story.json';

const getJson = () => {
    texto = scene.dialogs[1].text;
}

function GameLoop() {
    return (
        <body>
            <div class='bg-terminal'>
                <div class='text-container'>
                    <div class='images'>

                    </div>
                    <div class='boxcontain'>
                        <div class='buttonsGame'> 
                            <button class='mainMenuGame' onClick={() => StateManager("MainMenu")}>
                                <img src="src/GameFiles/GameLoop/icons/menu.png" class="menuImage" />
                                Main Menu
                            </button>
                            <button class='terminalButton'>
                                <img src="src/GameFiles/GameLoop/icons/terminal.png" class="terminalImage" />
                                Terminal
                            </button>
                            <button class='logGame'>
                                <img src="src/GameFiles/GameLoop/icons/folder.png" class="folderImage" />
                                Mission Log
                            </button>
                        </div>
                    </div>
                    <div class='inputcontain'>
                        <button class='send'>
                            <img src="src/GameFiles/GameLoop/icons/folder.png" class="folderImage" />
                        </button>
                        <input class='input'></input>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default GameLoop;
