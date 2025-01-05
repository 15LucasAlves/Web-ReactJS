import React, { useState } from 'react';
import '../../index.css';
import StateManager from '../GameStateManager';
import scene from './story.json';

const getJson = () => {
    texto = scene.dialogs[1].text;
}

function GameLoop() {
    //sets constant to behave like tab instead of button, terminal is the default one
    const [activeTab, setActiveTab] = useState("Terminal");

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <body>
            <div className='bg-terminal'>
                <div className='text-container'>
                    <div className='images'>
                    </div>
                    <div className='boxcontain'>
                        <div className='buttonsGame'>
                            <button 
                                className= 'mainMenuGame' onClick={() => {StateManager("MainMenu");}}>
                                <img src="src/GameFiles/GameLoop/icons/menu.png" className="menuImage" />
                                Main Menu
                            </button>
                            <button 
                                className={`terminalButton ${activeTab === "Terminal" ? "selected" : ""}`} 
                                onClick={() => toggleTab("Terminal")}>
                                <img src="src/GameFiles/GameLoop/icons/terminal.png" className="terminalImage" />
                                Terminal
                            </button>
                            <button 
                                className={`logGame ${activeTab === "MissionLog" ? "selected" : ""}`} 
                                onClick={() => toggleTab("MissionLog")}>
                                <img src="src/GameFiles/GameLoop/icons/folder.png" className="folderImage" />
                                MissionLog
                            </button>
                        </div>
                    </div>
                    {activeTab === "Terminal" && (
                        <div className='inputcontain'>
                            <input placeholder=">....." className='input' />  
                        </div>
                    )}

                    {activeTab === "MissionLog" && (
                        <div className='missionLog'>
                        </div>
                    )}
                </div>
            </div>
        </body>
    );
}

export default GameLoop;
