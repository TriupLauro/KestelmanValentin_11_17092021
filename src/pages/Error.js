import {Component} from "react";
import "../style/Error.css"
import {Link} from "react-router-dom";

class Error extends Component {
    render() {
        return (
            <>
                <div className="error-code">404</div>
                <div className="error-message">Oups! La page que <br/>vous demandez n'existe pas.</div>
                <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
            </>
        )
    }
}

export default Error