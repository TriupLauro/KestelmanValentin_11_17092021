import {Component} from "react";
import '../style/CardLocation.css'
import {Link} from "react-router-dom";

class CardLocation extends Component {

    render() {
        if (this.props.loading) return (
            <div className="card-location">
                <div className="card-location-text">
                    Titre de la <br/>location
                </div>
            </div>
        )

        const {title} = this.props

        return this.props.cover ?
            (
                <Link to="/" className="card-location">
                    <img src={this.props.cover} alt="Illustration de la location" className="card-thumbnail"/>
                    <div className="card-location-text">
                        {title}
                    </div>
                </Link>
            )
            :
            (
            <Link to="/" className="card-location">
                <div className="card-location-text">
                    {title}
                </div>
            </Link>
        )
    }
}

export default CardLocation