import React, { useState, useEffect } from 'react';
import Login from '../Login/Login';
import { auth } from '../Login/fireBase';
import { signOut } from 'firebase/auth';
import '../../index.css';


function MainMenu() {

  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

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

  if (showLogin) {
    return (
      <Login 
        onBackToMenu={() => setShowLogin(false)}
        onLoginSuccess={() => setShowLogin(false)}
      />
    );
  }

  return (
    <body>
      <div class = "retro-container">
        <div class = "bg-terminal">

          <h1 className='gameTitle'>77 73 83 83 73 79 78 32 88 88 73 10</h1>  

          <div className='menuButtons'>

            <button className='startButton'>Start Game</button>
            <button className='achivButton'>Achievements</button>
            
            {user ? (
              <div className='userBox'>
                <p>Logged as: {user.email}</p>
                <button className='logoutButton' onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            ) : (
              <button className='loginButton' onClick={() => setShowLogin(true)}>
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
    </body>
  );
}


export default MainMenu;