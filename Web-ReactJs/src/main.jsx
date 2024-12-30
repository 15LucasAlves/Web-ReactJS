import ReactDOM from 'react-dom/client'
import './index.css'
import StateManager from './GameFiles/GameStateManager.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  StateManager("MainMenu")
)