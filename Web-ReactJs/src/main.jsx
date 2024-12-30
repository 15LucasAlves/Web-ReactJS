import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import './GameFiles/GameStateManager.jsx'
import StateManager from './GameFiles/GameStateManager.jsx'

createRoot(document.getElementById('root')).render(
  <>
  
    <h1>Game Title</h1>
    <button type="button">Start Game</button>
    <StateManager />

  </>
)
