import Home from "./pages/Home";
import ChallengeOne from './pages/ChallengeOne'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter basename="/reactjs">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Home" element={<Home />} />
          <Route path="c1" element={<ChallengeOne />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
