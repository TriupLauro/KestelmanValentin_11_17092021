import {Component} from "react";
import WhiteLogo from "../assets/KASA_white_transparent_LOGO.svg"
import "../style/Footer.css"

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <img src={WhiteLogo} alt="Kasa" className="footer-logo"/>
                <div className="footer-copyright">© 2020 Kasa. All rights reserved</div>
            </footer>
        )
    }
}

export default Footer