import 'react'
import '../../index.css';
import StateManager from '../GameStateManager';
import React, { useState } from 'react';

function AchievScreen(){

    //https://codepen.io/tjezidzic/pen/LLWoLw
    
    var data = [
        {
          AboutDevTypeText: "<span>A Coward's Way<br/><br/>It's funny how things turn out, one minute you are out in the clear, one second u have a riffle against your forehead...</span><br/><br/><br/><span>Well...<br/>Truly</span><br/>"
        }
      ];
      
      var allElements = document.getElementsByClassName("typeing");
      for (var j = 0; j < allElements.length; j++) {
        var currentElementId = allElements[j].id;
        var currentElementIdContent = data[0][currentElementId];
        var element = document.getElementById(currentElementId);
        var devTypeText = currentElementIdContent;
      
        var i = 0, isTag, text;
        (function type() {
          text = devTypeText.slice(0, ++i);
          if (text === devTypeText) return;
          element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
          var char = text.slice(-1);
          if (char === "<") isTag = true;
          if (char === ">") isTag = false;
          if (isTag) return type();
          setTimeout(type, 60);
        })();
      }
      

    return(
        <body>
            <div className='bg-terminal'>
                <div className='text-container'>
                    <span id="AboutDevTypeText" class="typeing"></span><span class='blinker'>&#32;</span>
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