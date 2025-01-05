import 'react'
import '../../index.css';
import StateManager from '../GameStateManager';
import React, { useState, useEffect } from 'react';

function AchievScreen({ buttonclass }){

    console.log('buttonclass:', buttonclass);

    const [Text, setText] = useState('');
    
    useEffect(() => {
        if(buttonclass === 'achievement1'){
            setText("Date: xx / xx / 2125 <br />Remaining active time: 000 days 3 hours 23 min 35 sec <br />Oxygen levels: Rapidly depleting Contact to base: Error... Failed to connect <br />Retrying... <br />Retrying... <br />Retrying... <br />Contact to base: Error... Failed to connect <br />Reviewing Mission Protocol  <br />Codename: Dies Irae <br />Investigate deviations of asteroids to Earth [Priority] <br />Study other Celestial Bodies <br />Contact Shadow Garden and disable the magnetic field [High Risk] <br />Report to base<br /> <br />Mission Log <br />Mission Status: Complete <br />Personnel Status... <br />Retrieving... <br />Izumi: Status(Alive) <br />Celeste: Status(Presumed dead) <br /> <br />You decided completing the mission and following orders was more important than the lives on the colony, as such, you have received the promotion you so eagerly awaited for. <br />Both you and Izumi were congratulated unrelentingly by the company, with the colony and their magnetic field gone the asteroids were no longer on route to Earth. <br />Even then, you live as a dog on a leash, unable to fight, unable to flee, forever haunted by the lives you took in the pursuit of glory. <br /> <br />Was it all worth it in the end? <br />");
        }else if (buttonclass === 'achievement2'){
            setText("achievement2");
        }else if (buttonclass === 'achievement3'){
            setText("achievement3");
        }else if (buttonclass === 'achievement4'){
            setText("achievement4");
        }else if (buttonclass === 'achievement5'){
            setText("achievement5");
        }else if (buttonclass === 'achievement6'){
            setText("achievement6");
        }
    }, [buttonclass]);
    
    return(
        <body>
            <div className='bg-terminal'>
                <div className='text-container'>
                <div className='contains-textfr'>
                        <h1 className="text" 
                            dangerouslySetInnerHTML={{ __html: Text }} 
                            style={{
                            whiteSpace: 'pre-wrap',  
                            wordWrap: 'break-word',  
                            maxHeight: '70vh',     
                            verflowY: 'auto',  
                            }}
                        />
                    </div>
                    <div className='log-container'>
                        <div className='boxcontain'>
                            <div className='buttonsGame'>
                                <button 
                                    className= 'mainMenuGame' onClick={() => {StateManager("Achievements");}}>
                                    <img src="src/GameFiles/GameLoop/icons/menu.png" className="menuImage" />
                                    Achievements
                                </button>
                                <button 
                                    className='terminalButton2'>
                                    <img src="src/GameFiles/GameLoop/icons/terminal.png" className="terminalImage" />
                                    Terminal
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default AchievScreen;