import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer';

import Home from "./pages/Home";
import ChallengeOne from './pages/challenges/ChallengeOne'
import ChallengeTwo from "./pages/challenges/ChallengeTwo";



function App() {
  return (
    <>
      <Header />
      <BrowserRouter basename="/reactjs">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/c1" element={<ChallengeOne />}/>
          <Route path="/c2" element={<ChallengeTwo />}/>
          <Route path="/c3" element={<ChallengeOne />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
