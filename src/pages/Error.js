import {Component} from "react";
import "../style/Error.css"
import {Link} from "react-router-dom";
import LayoutHeaderOnly from "../layouts/LayoutHeaderOnly";

class Error extends Component {
    render() {
        return (
            <LayoutHeaderOnly>
                <div className="error-code">404</div>
                <div className="error-message">Oups! La page que vous demandez n'existe pas.</div>
                <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
            </LayoutHeaderOnly>
        )
    }
}

export default Error