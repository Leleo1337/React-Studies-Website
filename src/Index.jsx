import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css' // tailwind css

import BrowserRoutes from './BrowserRoutes.jsx'

const root = createRoot(document.querySelector('#root'))

root.render(
  <StrictMode>
      <RouterProvider router={BrowserRoutes} />
  </StrictMode>,
)