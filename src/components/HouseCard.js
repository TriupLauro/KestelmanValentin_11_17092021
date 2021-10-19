import {Component} from "react";
import '../style/HouseCard.css'
import {Link} from "react-router-dom";

class HouseCard extends Component {

    render() {
        return this.props.cover ?
            (
                <Link to={`/locationDetails/${this.props.id}`} className="card-location">
                    <img src={this.props.cover} alt="Illustration de la location" className="card-thumbnail"/>
                    <div className="card-location-text">
                        {this.props.title}
                    </div>
                </Link>
            )
            :
            (
            <Link to={`/locationDetails/${this.props.id}`} className="card-location">
                <div className="card-location-text">
                    {this.props.title}
                </div>
            </Link>
        )
    }
}

export default HouseCard