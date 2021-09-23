import '../style/KasaHeader.css';
import Logo from '../assets/Kasa_logo.svg'
import {Link} from "react-router-dom";

const KasaHeader = () => {
    return (
        <header className="header-container">
            <img className="header-logo" src={Logo} alt="Kasa" />
            <nav className="header-nav"><Link to="/" className="header-link">Accueil</Link><Link to="/about" className="header-link">A Propos</Link></nav>
        </header>
    )
}

export default KasaHeader;