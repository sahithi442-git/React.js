import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cbc from './component/Cbc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cbc />
  </StrictMode>,
)
