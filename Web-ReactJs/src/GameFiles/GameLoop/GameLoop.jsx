import React, { useState, useEffect } from "react";
import '../../index.css';
import StateManager from '../GameStateManager';
//import scene from './story.json';
import dialogsData from "./story.json"; // Importa o JSON



function GameLoop() {
    //sets constant to behave like tab instead of button, terminal is the default one
    const [activeTab, setActiveTab] = useState("Terminal");

    /*const toggleTab = (tab) => {
        setActiveTab(tab);
    };*/

    const dialogs = dialogsData.dialogs; // Lista de diálogos
    const [currentDialog, setCurrentDialog] = useState(dialogs[0]); // Primeiro diálogo
    const [mensagem, setMensagem] = useState(""); // Texto acumulado
    const [typingText, setTypingText] = useState(""); // Texto sendo digitado
    const [showDecisions, setShowDecisions] = useState(false); // Exibe as decisões
    const [decisions, setDecisions] = useState([]); // Lista de decisões disponíveis
    const [inputValue, setInputValue] = useState(""); // Valor do input do usuário

    const typingSpeed = 1; // Velocidade de typing em milissegundos
  
  useEffect(() => {
    if (!currentDialog) return;

    // Verifica se o diálogo atual tem decisões
    if (currentDialog.hasDecisions) {
      setShowDecisions(true);
      setDecisions(currentDialog.decisions || []);
      return;
    }

    // Simula o "typing" do texto do diálogo
    const dialogText = currentDialog.text || ""; // Garante que seja uma string válida
    let charIndex = 0;

    const intervalo = setInterval(() => {
      if (charIndex < dialogText.length) {
        setTypingText((prev) => prev + dialogText[charIndex]); // Adiciona caractere por caractere
        charIndex++;
      } else {
        clearInterval(intervalo); // Para o intervalo ao terminar
        setMensagem((prevMensagem) =>
          prevMensagem +
          `<strong>${currentDialog.speaker}:</strong> ${dialogText}<br />`
        );
        setTypingText(""); // Limpa o texto temporário

        // Avança para o próximo diálogo automaticamente
        const nextDialog = dialogs.find(
          (d) => d.id === currentDialog.nextDialogId
        );
        setCurrentDialog(nextDialog);
      }
    }, typingSpeed); // Usa a variável typingSpeed para o intervalo

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, [currentDialog]);

  const handleDecisionInput = (event) => {
    if (event.key === "Enter") {
      const decisionId = parseInt(inputValue, 10); // Converte o valor para número
      const chosenDecision = decisions.find((decision) => decision.id === decisionId);

      if (chosenDecision) {
        // Adiciona a decisão escolhida ao texto acumulado
        setMensagem((prevMensagem) =>
          prevMensagem +
          `<strong>Player:</strong> ${chosenDecision.text}<br />`
        );

        // Avança para o próximo diálogo com base na decisão escolhida
        const nextDialog = dialogs.find(
          (d) => d.id === chosenDecision.nextDialogId
        );
        setCurrentDialog(nextDialog);
        setShowDecisions(false); // Esconde as decisões
        setDecisions([]); // Limpa as decisões
        setInputValue(""); // Reseta o valor do input
      } else {
        alert("Invalid choice. Type a valid number.");
        setInputValue(""); // Reseta o valor do input
      }
    }
  };

    return (
        <body>
            <div className='bg-terminal'>
                <div className='text-container'>
                
                <div
      style={{
        padding: "10px",
        fontFamily: "Share Tech Mono, monospace",
        lineHeight: "1.5",
        position: "absolute",
        top: 60,
        left: 10,
        maxHeight: "72vh",
        boxSizing: "border-box",
        overflowY: "auto",
        color: "rgb(var(--fg-pb-green))", 
        display: "flex",  
        flexDirection: "column", 
        justifyContent: "flex-end",
      }}
    >
      {/* Texto acumulado com <br /> já tratado no JSON */}
      <div
        style={{
          marginBottom: "50px", // Espaço para a caixa de input
        }}
        dangerouslySetInnerHTML={{
          __html: mensagem,
        }}
      />

      {/* Texto sendo digitado */}
      {typingText && (
        <div>
          <span>
            <strong>{currentDialog.speaker}:</strong> {typingText}
          </span>
        </div>
      )}

      {/* Mostra as decisões logo abaixo do último diálogo */}
      {showDecisions && (
        <div>
          <p>Choose one of the options below:</p>
          <ul style={{ marginLeft: "20px" }}>
            {decisions.map((decision) => (
              <li key={decision.id}>
                <strong>{decision.id}:</strong> {decision.text}
              </li>
            ))}
          </ul>
        </div>
      )}

      
    </div>
                    <div className='boxcontain'>
                        <div className='buttonsGame'>
                            <button 
                                className= 'mainMenuGame' onClick={() => {StateManager("MainMenu");}}>
                                <img src="src/GameFiles/GameLoop/icons/menu.png" className="menuImage" />
                                Main Menu
                            </button>
                            <button 
                                className={`terminalButton ${activeTab === "Terminal" ? "selected" : ""}`} 
                                onClick={() => toggleTab("Terminal")}>
                                <img src="src/GameFiles/GameLoop/icons/terminal.png" className="terminalImage" />
                                Terminal
                            </button>
                            <button 
                                className={`logGame ${activeTab === "MissionLog" ? "selected" : ""}`} 
                                onClick={() => toggleTab("MissionLog")}>
                                <img src="src/GameFiles/GameLoop/icons/folder.png" className="folderImage" />
                                MissionLog
                            </button>
                        </div>
                    </div>
                    {activeTab === "Terminal" && (

                        
                        <div className='inputcontain'>
                            {/* Caixa de input para escolhas */}
                            {showDecisions && (
       
                            <input placeholder=">....." className='input'
                                    type="text"
                                     value={inputValue}
                                     onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleDecisionInput}
                            style={{
                            width: "99%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #444",
                            fontSize: "16px",
                            backgroundColor: "#222", // Fundo do input escuro
                            color: "rgb(var(--fg-pb-green))", 
                        }}
                     />
        
                )}
                            
                        </div>
                    )}
                    {activeTab === "MissionLog" && (
                        <div className='missionLog'>
                        </div>
                    )}
                </div>
            </div>
        </body>
    );
}

export default GameLoop;
