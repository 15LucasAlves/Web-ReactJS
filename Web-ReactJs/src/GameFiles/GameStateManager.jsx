import React from "react";
import MainMenu from "./MainMenu/MainMenu.jsx";

//Set default state
currentState = "MainMenu";

//State manager
//This function will return the component that corresponds to the current state
function StateManager(currentState) {
    //If the current state is MainMenu, return the MainMenu component
    if (currentState === "MainMenu") {
        return (
                <MainMenu/>
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