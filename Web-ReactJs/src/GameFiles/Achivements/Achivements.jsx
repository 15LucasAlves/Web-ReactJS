import 'react'
import '../../index.css';
import StateManager from '../GameStateManager';
import React, { useState, useEffect } from 'react';
import { auth, db } from "../Login/fireBase";
import { doc, setDoc, getDoc } from "firebase/firestore"; 

function Achievements() {

    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = auth.onAuthStateChanged((user) => {
          setUser(user);
        });
    
        // Cleanup subscription
        return () => unsubscribe();
    }, []);

    // Gets achievements (endings) the player has unlocked from database depending on the player logged in
    useEffect(() => {
        if(user && user.email){
            const currentUserEmail = user.email;
            const Ref = doc(db, 'users', currentUserEmail);
            getDoc(Ref)
                .then(docSnapshot => {
                    if (docSnapshot.exists) {
                        setUserData(docSnapshot.data());
                        //console.log("Document data:", docSnapshot.data());
                    } else {
                        console.log("no document");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    }, [user]);

    useEffect(() => {
        if (userData) {
            // Disable all buttons first
            document.getElementById("achievement1").disabled = true;
            document.getElementById("achievement2").disabled = true;
            document.getElementById("achievement3").disabled = true;
            document.getElementById("achievement4").disabled = true;
            document.getElementById("achievement5").disabled = true;
            document.getElementById("achievement6").disabled = true;

            // Enable the achievement button based on userData (assuming the structure contains these keys)
            if (userData.ending === 1) {
                document.getElementById("achievement1").disabled = false;
            }
            if (userData.ending=== 2) {
                document.getElementById("achievement2").disabled = false;
            }
            if (userData.ending=== 3) {
                document.getElementById("achievement3").disabled = false;
            }
            if (userData.ending=== 4) {
                document.getElementById("achievement4").disabled = false;
            }
            if (userData.ending=== 5) {
                document.getElementById("achievement5").disabled = false;
            }
            if (userData.ending=== 6) {
                document.getElementById("achievement6").disabled = false;
            }
        }
    }, [userData]);

    return (
        <div className='bg-terminal'>
            <div className='text-container'>
                <button className="backButton" onClick={() => StateManager("MainMenu")}>
                ← BACK TO MENU
                </button>
                <h1 className='achievements'> ACHIEVEMENTS </h1> 
                <div className='box'>
                    <div className='contains'>
                        <button id = "achievement3" className='achievement3' onClick={() => StateManager("AchievScreen", 'achievement3') }> 
                            <img src="src/GameFiles/Achivements/achievements/acowardsway.PNG" className="cowards_way"/>
                        </button>
                        <small className='name'>'A COWARD'S WAY'</small>
                    </div>
                    <div className='contains'>
                        <button id = "achievement4" className='achievement4' onClick={() => StateManager("AchievScreen", 'achievement4') }> 
                            <img src="src/GameFiles/Achivements/achievements/afriendsway.PNG" className="friends_way"/>
                        </button>
                        <small className='name'>'A FRIEND'S WAY'</small>
                    </div>
                    <div className='contains-container'>
                        <div className='contains'>
                            <button id = "achievement6" className='achievement6' onClick={() => StateManager("AchievScreen", 'achievement6') }> 
                                <img src="src/GameFiles/Achivements/achievements/alambtotheslaughter.PNG" className="lamb"/>
                            </button>
                            <small className='name'>'A LAMB TO THE</small>
                        </div>
                        <small className='name'>SLAUGHTER'</small>
                    </div>
                    <div className='contains'>
                        <button id = "achievement1" className='achievement1' onClick={() => StateManager("AchievScreen", 'achievement1') }> 
                            <img src="src/GameFiles/Achivements/achievements/missioncomplete.PNG" className="mission"/>
                        </button>
                        <small className='name'>'MISSION COMPLETE'</small>
                    </div>
                    <div className='contains'>
                        <button id = "achievement5" className='achievement5' onClick={() => StateManager("AchievScreen", 'achievement5') }> 
                            <img src="src/GameFiles/Achivements/achievements/peaceinspace.PNG" className="space"/>
                        </button>
                        <small className='name'>'PEACE IN SPACE'</small>
                    </div>
                    <div className='contains'>
                        <button id = "achievement2" className='achievement2' onClick={() => StateManager("AchievScreen", 'achievement2') }> 
                            <img src="src/GameFiles/Achivements/achievements/unfairsentence.PNG" className="sentence"/>
                        </button>
                        <small className='name'>'UNFAIR SENTENCE'</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;