import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css';
import Home from './containers/home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
