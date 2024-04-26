import { Route, Routes } from 'react-router-dom'
import Blob from "../../assets/blob.svg"
import Projects from '../Projects/Projects'
import Homepage from '../Homepage/Homepage'
import Navbar from '../Navbar/Navbar'
import Gallery from "../Gallery/Gallery"
import './App.css'

function App() {

  return (
    <>
      <div className="background-content">
        <img className="background-blob" src={Blob}></img>
        {/* <div className="background-sparkles">
          <Sparkles sparkleCount={3} sparkleClass="background-sparkle" />
        </div>  */}
      </div>
      <div className="app-wrapper">
        <Navbar />
        <div className="app-routes">
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
