import { Link } from "react-router-dom"
import "../assets/css/Footer.css"
import logoFooter from "../assets/images/LOGOFOOTER.png"

function Footer() {
    return (
    <div className="footer">
        <Link to="/"><img className="logo-footer" src={logoFooter} alt="logo-footer"></img></Link>
        <div className="kasa-footer"><h2>© 2020 Kasa. All rights reserved</h2></div>
    </div>
    )
}

export default Footer
