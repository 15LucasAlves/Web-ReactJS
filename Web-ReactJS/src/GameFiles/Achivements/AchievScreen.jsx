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
            setText("Date: xx / xx / 2125 <br />Remaining active time: 000 days 3 hours 23 min 35 sec <br />Oxygen levels: Rapidly depleting Contact to base: Error... Failed to connect <br />Retrying... <br />Retrying... <br />Retrying... <br />Contact to base: Error... Failed to connect <br />Reviewing Mission Protocol  <br />Codename: Dies Irae <br />Investigate deviations of asteroids to Earth [Priority] <br />Study other Celestial Bodies <br />Contact Shadow Garden and disable the magnetic field [High Risk] <br />Report to base<br /> <br />Mission Log <br />Mission Status: Failed <br />Personnel Status... <br />Retrieving... <br />Izumi: Status(Alive) <br />Celeste: Status(Alive) <br /> <br />You decided a peaceful solution was better than an aggressive one even in light of threats, as a result your friend lived, even if he did end up imprisoned on a colony in Mars only to never see his family and friends again... Well... Such is the weight of decisions...At least he has you...<br />Right? <br />As for you and Celeste, you get to live your peaceful lives with the rest of the residents...Until the company sends another crew that is.<br /><br />You showed compassion and kindness, you lived to fight another day!");
        }else if (buttonclass === 'achievement3'){
            setText("Date: xx / xx / 2125 <br />Remaining active time: 000 days 3 hours 23 min 35 sec <br />Oxygen levels: Rapidly depleting Contact to base: Error... Failed to connect <br />Retrying... <br />Retrying... <br />Retrying... <br />Contact to base: Error... Failed to connect <br />Reviewing Mission Protocol  <br />Codename: Dies Irae <br />Investigate deviations of asteroids to Earth [Priority] <br />Study other Celestial Bodies <br />Contact Shadow Garden and disable the magnetic field [High Risk] <br />Report to base<br /> <br />Mission Log <br />Mission Status: Failed <br />Personnel Status... <br />Retrieving... <br />Izumi: Status(Alive) <br />Celeste: Status(Alive) <br /> <br />So...You betrayed your friend...Incompetence or bold choice?<br />Well be as it may, you escaped, leaving your two only friends behind, running back to the arms of the company...little do you know all that awaits you is a cold embrace and a ringing in your ears...Have you forgotten what happens to commanders who come back empty handed?<br />Failed mission? Lost crew?<br />Have you forgotten you are just a pawn in their game?<br />Well...<br /> <br />Player: Status(Dead)");
        }else if (buttonclass === 'achievement4'){
            setText("Date: xx / xx / 2125 <br />Remaining active time: 000 days 3 hours 23 min 35 sec <br />Oxygen levels: Rapidly depleting Contact to base: Error... Failed to connect <br />Retrying... <br />Retrying... <br />Retrying... <br />Contact to base: Error... Failed to connect <br />Reviewing Mission Protocol  <br />Codename: Dies Irae <br />Investigate deviations of asteroids to Earth [Priority] <br />Study other Celestial Bodies <br />Contact Shadow Garden and disable the magnetic field [High Risk] <br />Report to base<br /> <br />Mission Log <br />Mission Status: Failed <br />Personnel Status... <br />Retrieving... <br />Izumi: Status(Dead) <br />Celeste: Status(Dead) <br /> <br />You wanted to protect the people from the colony, your intentions were surely good, however you forgot your role as a commander along the way and as such paid the price...<br />Your crew and friends are gone, you get to stay and live with the rest of the residents peacefully...or until a new crew arrives.<br /> <br />Have you made peace with your choices or have your regrets begun?");
        }else if (buttonclass === 'achievement5'){
            setText("Date: xx / xx / 2125 <br />Remaining active time: 000 days 3 hours 23 min 35 sec <br />Oxygen levels: Rapidly depleting Contact to base: Error... Failed to connect <br />Retrying... <br />Retrying... <br />Retrying... <br />Contact to base: Error... Failed to connect <br />Reviewing Mission Protocol  <br />Codename: Dies Irae <br />Investigate deviations of asteroids to Earth [Priority] <br />Study other Celestial Bodies <br />Contact Shadow Garden and disable the magnetic field [High Risk] <br />Report to base<br /> <br />Mission Log <br />Mission Status: Failed <br />Personnel Status... <br />Retrieving... <br />Izumi: Status(Alive) <br />Celeste: Status(Alive) <br /> <br />Is it a peaceful resolution if we are resorting to kicking someone out?<br />Maybe as peaceful as it gets in a situation like this...<br />You protected the people in the colony, even when it meant choosing them over one of your own, choosing them over the company...<br />While Izumi's destiny is uncertain it belongs to him and only him.");
        }else if (buttonclass === 'achievement6'){
            setText("Date: xx / xx / 2125 <br />Remaining active time: 000 days 3 hours 23 min 35 sec <br />Oxygen levels: Rapidly depleting Contact to base: Error... Failed to connect <br />Retrying... <br />Retrying... <br />Retrying... <br />Contact to base: Error... Failed to connect <br />Reviewing Mission Protocol  <br />Codename: Dies Irae <br />Investigate deviations of asteroids to Earth [Priority] <br />Study other Celestial Bodies <br />Contact Shadow Garden and disable the magnetic field [High Risk] <br />Report to base<br /> <br />Mission Log <br />Mission Status: Failed <br />Personnel Status... <br />Retrieving... <br />Izumi: Status(Dead) <br />Celeste: Status(Alive) <br /> <br />Could some lives have been spared, some conflict avoided if you had intervened?<br />Well no point thinking about it now...<br />Izumi is gone, always too eager, too willing to accomplish the objective at any cost... <br />Do you regret it?<br />One life for the many in the colony?<br />Was there a better way?");
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