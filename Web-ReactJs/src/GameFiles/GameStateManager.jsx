import React from "react";
import ReactDOM from "react-dom/client";
import MainMenu from "./MainMenu/MainMenu.jsx";
import GameLoop from "./GameLoop/GameLoop.jsx";
import Achievements from "./Achivements/Achivements.jsx";
import Login from "./Login/Login.jsx";
import Achievs from "./Achivements/AchievScreen.jsx"

var currentState;

//State manager
//This function will return the component that corresponds to the current state
//added buttonclass so i could show each achievement based on which button was pressed
function StateManager(currentState, buttonclass = null) {
    var changeState;

    if (currentState === "MainMenu") {
        changeState = <MainMenu/>
    }
    else if (currentState === "Achievements") {
        changeState = <Achievements/>
    }
    else if (currentState === "GameLoop") {
        changeState = <GameLoop/>
    }
    else if (currentState === "Login") {
        changeState = <Login/>
    }else if (currentState === "AchievScreen") {
        changeState = <Achievs buttonclass={buttonclass} />;
    }
    //If the current state null or doesn´t exist, return an error message to the console and return main menu
    else {
        console.log("Error: State not found")
        changeState = <MainMenu/>
    }

    document.getElementById('root').innerHTML = '';
    ReactDOM.createRoot(document.getElementById('root')).render(changeState)
}
    


export default StateManager;