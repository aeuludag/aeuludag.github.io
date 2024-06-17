import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link className="navbar-item" to="/">
                    <div className="navbar-item navbar-logo-and-title">
                        <img className="navbar-logo" src={Logo} />
                        <h1 className="navbar-title" >Ahmet Emir's Site</h1>
                    </div>
                </Link>
                <div className="navbar-links">
                    <Link className="navbar-item navbar-link" to="/projects">Projects</Link>
                    <Link className="navbar-item navbar-link" to="/gallery">Designs</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;