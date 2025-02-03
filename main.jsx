import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cbc from './Component/Cbc.jsx'
import Fbc from './Component/Fbc.jsx'
import Demo from './Component/Demo.jsx'
import Parent from './component/Parent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cbc />
    <Fbc />
    <Demo />
    <Parent />
  </StrictMode>,
)