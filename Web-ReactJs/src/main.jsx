import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './GameFiles/GameStateManager.jsx'
import './GameFiles/Components/buttonComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Game Title</h1>
    <buttonComponent>Start Game</buttonComponent>
    <StateManager />
  </StrictMode>
)
