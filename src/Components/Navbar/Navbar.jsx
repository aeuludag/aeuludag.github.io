import { Link, NavLink } from "react-router-dom"
import Logo from "../../assets/logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <div className="navbar">
                <NavLink className="navbar-item navbar-logo-and-title-wrapper" to="/">
                    <div className="navbar-item navbar-logo-and-title">
                        <img className="navbar-logo" src={Logo} />
                        <h1 className="navbar-title" >Ahmet Emir's Site</h1>
                    </div>
                </NavLink>
                <div className="navbar-links">
                    <NavLink className="navbar-item navbar-link" to="/projects">Projects</NavLink>
                    <NavLink className="navbar-item navbar-link" to="/gallery">Designs</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar;