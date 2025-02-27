import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/index.css'
import App from './App.jsx'

const root = createRoot(document.querySelector('#root'))

root.render(
  <StrictMode>
    <App/>
  </StrictMode>,
)