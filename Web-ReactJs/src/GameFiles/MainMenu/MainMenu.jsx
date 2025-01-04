import React, { useState, useEffect } from 'react';
import { auth } from '../Login/fireBase';
import { signOut } from 'firebase/auth';
import '../../index.css';
import StateManager from '../GameStateManager';


function MainMenu() {
  const [user, setUser] = useState(null);
  const ascii = [77, 73, 83, 83, 73, 79, 78, 88, 88, 73, 10];
  const [headerText, setHeaderText] = useState('');

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleAscii = async()=>{
    let currentIndex = 0;
    let decodedText = '';
    while(currentIndex < ascii.length){
      decodedText += String.fromCharCode(ascii[currentIndex]);
      setHeaderText(decodedText); 
      currentIndex++;
      await new Promise(resolve=>setTimeout(resolve,100));
    }
    await new Promise(resolve=>setTimeout(resolve,1000));
  }


  return (
    <body>
      <div class="retro-container">
        <div class="bg-terminal">
          <h1 className='gameTitle'>{headerText || '77 73 83 83 73 79 78 88 88 73 10'}</h1>  

          <div className='menuButtons'>
            <button className='startButton' onClick={async() => { await handleAscii(); StateManager("GameLoop");}}>
              Start Game
            </button>

            <button className='achivButton' onClick={() => StateManager("Achievements")}>
              Achievements
            </button>
            
            {user ? (
              <div className='userBox'>
                <p>Logged as: {user.email}</p>
                <button className='logoutButton' onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            ) : (
              <button className='loginButton' onClick={() => StateManager("Login")}>
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </body>
  );
}

export default MainMenu;