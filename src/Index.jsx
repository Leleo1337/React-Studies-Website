import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'

import Home from './pages/Home.jsx'
import ChallengeOne from './pages/challenges/Challengeone.jsx'
import ChallengeTwo from './pages/challenges/ChallengeTwo.jsx'
import ChallengeThree from './pages/challenges/ChallengeThree.jsx'

const root = createRoot(document.querySelector('#root'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/c1",
    element: <ChallengeOne />
  },
  {
    path: "/c2",
    element: <ChallengeTwo />
  },
  {
    path: "/c3",
    element: <ChallengeThree />
  }
],
  {
    basename: "/reactjs/"
  },
)

root.render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)