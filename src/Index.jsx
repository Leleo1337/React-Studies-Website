import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js';
import './index.css' // tailwind css

import Home from './pages/Home.jsx';
import ChallengeOne from './pages/challenges/Challengeone.jsx';
import ChallengeTwo from './pages/challenges/ChallengeTwo.jsx';
import ChallengeThree from './pages/challenges/ChallengeThree.jsx';
import ChallengeFour from './pages/challenges/ChallengeFour.jsx';
import ChallengeFive from './pages/challenges/ChallengeFive.jsx';
import ChallengeSix from './pages/challenges/ChallengeSix.jsx';


const root = createRoot(document.querySelector('#root'))
root.render(
  <StrictMode>
    <BrowserRouter basename='/reactjs/'>
      <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/c1" element={<ChallengeOne />} />
            <Route path="/c2" element={<ChallengeTwo />} />
            <Route path="/c3" element={<ChallengeThree />} />
            <Route path="/c4" element={<ChallengeFour />} />
            <Route path="/c5" element={<ChallengeFive />} />
            <Route path="/c6" element={<ChallengeSix />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)