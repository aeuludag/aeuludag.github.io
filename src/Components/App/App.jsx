import Blob from "../../assets/blob.svg"
import ProjectLinks from '../ProjectLinks/ProjectLinks'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import Navbar from '../Navbar/Navbar'
import './App.css'

function App() {

  return (
    <>
      <img className="blob" src={Blob}></img>
      <Navbar />
      <Routes>
        <Route path='' element={<Homepage />} />
        <Route path='/projects' element={<ProjectLinks />} />
      </Routes>
    </>
  )
}

export default App
