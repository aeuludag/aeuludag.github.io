import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-item navbar-logo-and-title">
                    <img className="navbar-logo" src={Logo}></img>
                    <h1 className="navbar-title" >Ahmet Emir's Site</h1>
                </div>
                <div className="navbar-links">
                    <Link className="navbar-item navbar-link" to="">Homepage</Link>
                    <Link className="navbar-item navbar-link" to="/projects">Projects</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;