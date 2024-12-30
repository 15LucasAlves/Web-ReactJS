import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import StateManager from './GameFiles/GameStateManager.jsx'

createRoot(document.getElementById('root')).render(
      StateManager("MainMenu")
)
