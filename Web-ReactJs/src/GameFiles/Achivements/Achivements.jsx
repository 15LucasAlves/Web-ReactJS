import 'react'
import '../../index.css';
import StateManager from '../GameStateManager';

function Achievements() {
    return (
        <div className='bg-terminal'>
            <div className='text-container'>
                <button className="backButton" onClick={() => StateManager("MainMenu")}>
                ← Back to Menu
                </button>
                <h1 className='achievements'> Achievements </h1> 
                <div className='box'>
                    <div className='contains'>
                        <button className='achievement3' onClick={() => StateManager("AchievScreen") }> 
                            <img src="src/GameFiles/Achivements/achievements/acowardsway.PNG" className="cowards_way"/>
                        </button>
                        <small className='name'>'A Coward's Way'</small>
                    </div>
                    <div className='contains'>
                        <button className='achievement4'> 
                            <img src="src/GameFiles/Achivements/achievements/afriendsway.PNG" className="friends_way"/>
                        </button>
                        <small className='name'>'A Friend's Way'</small>
                    </div>
                    <div className='contains-container'>
                        <div className='contains'>
                            <button className='achievement6'> 
                                <img src="src/GameFiles/Achivements/achievements/alambtotheslaughter.PNG" className="lamb"/>
                            </button>
                            <small className='name'>'A Lamb to the </small>
                        </div>
                        <small className='name'>Slaughter'</small>
                    </div>
                    <div className='contains'>
                        <button className='achievement1'> 
                            <img src="src/GameFiles/Achivements/achievements/missioncomplete.PNG" className="mission"/>
                        </button>
                        <small className='name'>'Mission Complete'</small>
                    </div>
                    <div className='contains'>
                        <button className='achievement5'> 
                            <img src="src/GameFiles/Achivements/achievements/peaceinspace.PNG" className="space"/>
                        </button>
                        <small className='name'>'Peace in Space'</small>
                    </div>
                    <div className='contains'>
                        <button className='achievement2'> 
                            <img src="src/GameFiles/Achivements/achievements/unfairsentence.PNG" className="sentence"/>
                        </button>
                        <small className='name'>'Unfair Sentence'</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;