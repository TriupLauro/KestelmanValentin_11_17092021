import {Component} from "react";
import '../style/HouseCard.css'
import {Link} from "react-router-dom";

class HouseCard extends Component {

    render() {
        return this.props.cover ?
            (
                <Link to={`/houseDetails/${this.props.id}`} className="card-house">
                    <img src={this.props.cover} alt="Illustration de la location" className="card-thumbnail"/>
                    <div className="card-house-text">
                        {this.props.title}
                    </div>
                </Link>
            )
            :
            (
            <Link to={`/houseDetails/${this.props.id}`} className="card-house">
                <div className="card-house-text">
                    {this.props.title}
                </div>
            </Link>
        )
    }
}

export default HouseCard