import {Component} from "react";
import WhiteLogo from "../assets/KASA_white_transparent_LOGO.svg"
import "../style/Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <img src={WhiteLogo} alt="Kasa" className="footer-logo"/>
                <div className="footer-copyright">© 2020 Kasa. All rights reserved</div>
            </div>
        )
    }
}

export default Footer