import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './GameFiles/GameStateManager.jsx'
import './GameFiles/MainMenu/MainMenu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    StateManager();
  </StrictMode>,
)
