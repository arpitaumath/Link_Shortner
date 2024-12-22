import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ShorternProvider } from './context/Shorterncontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ShorternProvider>
    <App/>
  </ShorternProvider>
    
  </StrictMode>,
)
