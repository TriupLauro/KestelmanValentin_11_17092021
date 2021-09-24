import '../style/KasaHeader.css';
import Logo from '../assets/Kasa_logo.svg'
import {NavLink} from "react-router-dom";

const KasaHeader = () => {
    return (
        <header className="header-container">
            <img className="header-logo" src={Logo} alt="Kasa" />
            <nav className="header-nav"><NavLink exact to="/" className="header-link">Accueil</NavLink><NavLink to="/about" className="header-link">A Propos</NavLink></nav>
        </header>
    )
}

export default KasaHeader;