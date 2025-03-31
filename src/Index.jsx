import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop.js';
import './index.css' // tailwind css

import Home from './pages/Home.jsx';
import ChallengeOne from './pages/challenges/Challengeone.jsx';
import ChallengeTwo from './pages/challenges/ChallengeTwo.jsx';
import ChallengeThree from './pages/challenges/ChallengeThree.jsx';
import ChallengeFour from './pages/challenges/ChallengeFour.jsx';
import ChallengeFive from './pages/challenges/ChallengeFive.jsx';
import ChallengeSix from './pages/challenges/ChallengeSix.jsx';
import ChallengeSeven from './pages/challenges/ChallengeSeven.jsx';
import ChallengeEight from './pages/challenges/ChallengeEight.jsx';
import ChallengeNine from './pages/challenges/ChallengeNine.jsx';

const root = createRoot(document.querySelector('#root'))
root.render(
    <BrowserRouter basename='/React-Studies-Website/'>
      <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/c1" element={<ChallengeOne />} />
            <Route path="/c2" element={<ChallengeTwo />} />
            <Route path="/c3" element={<ChallengeThree />} />
            <Route path="/c4" element={<ChallengeFour />} />
            <Route path="/c5" element={<ChallengeFive />} />
            <Route path="/c6" element={<ChallengeSix />} />
            <Route path="/c7" element={<ChallengeSeven />} />
            <Route path="/c8" element={<ChallengeEight />} />
            <Route path="/c9" element={<ChallengeNine />} />
        </Routes>
    </BrowserRouter>
)