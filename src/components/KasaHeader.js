import '../style/KasaHeader.css';
import {Component} from "react";
import Logo from '../assets/Kasa_logo.svg'
import {NavLink} from "react-router-dom";

class KasaHeader extends Component {
    render() {
        return (
            <header className="header-container">
                <img className="header-logo" src={Logo} alt="Kasa" />
                <nav className="header-nav"><NavLink exact to="/" className="header-link">Accueil</NavLink><NavLink to="/about" className="header-link">A Propos</NavLink></nav>
            </header>
        )
    }
}

export default KasaHeader;