import { Route, Routes, Navigate } from 'react-router-dom'
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
        <img className="background-blob" alt="" src={Blob}></img>
      </div>
      <div className="app-wrapper">
        <Navbar />
        <div className="app-routes">
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App