import {Component} from "react";
import '../style/CardLocation.css'

class CardLocation extends Component {
    render() {
        return (
            <div className="card-location">
                <div className="card-location-text">
                    Titre de la <br/>location
                </div>
            </div>
        )
    }
}

export default CardLocation