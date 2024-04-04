import Blob from "../../assets/blob.svg"
import ProjectLinks from '../ProjectLinks/ProjectLinks'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import Navbar from '../Navbar/Navbar'
import './App.css'
import Sparkles from "../Sparkles/Sparkles"
import Gallery from "../Gallery/Gallery"

function App() {

  return (
    <>
      <div className="background-content">
        <img className="background-blob" src={Blob}></img>
        {/* <div className="background-sparkles">
          <Sparkles sparkleCount={3} sparkleClass="background-sparkle" />
        </div>  */}
      </div>
      <Navbar />
      <br />
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/projects" element={<ProjectLinks />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App
