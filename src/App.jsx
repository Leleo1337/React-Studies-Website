import Home from "./pages/Home";
import ChallengeOne from './pages/ChallengeOne'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="reactjs/Home" element={<Home />} />
          <Route path="/reactjs" element={<Home />} />
          <Route path="/reactjs/c1" element={<ChallengeOne />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
