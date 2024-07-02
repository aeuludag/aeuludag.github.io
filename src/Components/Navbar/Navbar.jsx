import { Link, NavLink } from "react-router-dom"
import Logo from "../../assets/logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <NavLink className="navbar-item navbar-logo-and-title-wrapper" to="/" tabIndex={"0"}>
                    <div className="navbar-item navbar-logo-and-title">
                        <img alt="Ahmet Emir's Logo" className="navbar-logo" src={Logo} />
                        <h1 className="navbar-title" >Ahmet Emir's Site</h1>
                    </div>
                </NavLink>
                <div className="navbar-links">
                    <NavLink className="navbar-item navbar-link" to="/projects">Projects</NavLink>
                    <NavLink className="navbar-item navbar-link" to="/gallery">Designs</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar;