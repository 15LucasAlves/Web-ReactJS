import React from "react";
import MainMenu from "./MainMenu/MainMenu.jsx";
import GameLoop from "./GameLoop/GameLoop.jsx";
import Achievements from "./Achivements/Achivements.jsx";
import Login from "./Login/Login.jsx";

//Set default state
currentState = "MainMenu";

//State manager
//This function will return the component that corresponds to the current state
function StateManager(currentState) {
    if (currentState === "MainMenu") {
        return (
            <MainMenu/>
        );
    }
    else if (currentState === "Achievements") {
        return (
            <Achievements/>
        );
    }
    else if (currentState === "LogIn") {
        return (
            <Login/>
        );
    }
    else if (currentState === "GameLoop") {
        return (
            <GameLoop/>
        );
    }
    //If the current state null or doesn´t exist, return an error message to the console and return main menu
    else {
        console.log("Error: State not found")
        return (
            currentState = "MainMenu"
        );
    }
}

export default StateManager;