import '../style/KasaHeader.css';
import {Component} from "react";
import Logo from '../assets/Kasa_logo.svg'
import {Link} from "react-router-dom";

class KasaHeader extends Component {
    render() {
        return (
            <header className="header-container">
                <img className="header-logo" src={Logo} alt="Kasa" />
                <nav className="header-nav"><Link to="/" className="header-link">ACCUEIL</Link><Link to="/about" className="header-link">A PROPOS</Link></nav>
            </header>
        )
    }
}

export default KasaHeader;