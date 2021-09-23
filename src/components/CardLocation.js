import '../style/CardLocation.css'
import {Link} from "react-router-dom";

const CardLocation = (props) => {

    if (props.loading) return (
        <div className="card-location">
            <div className="card-location-text">
                Titre de la <br/>location
            </div>
        </div>
    )

    const {title} = props

    return props.cover ?
        (
            <Link to={`/locationDetails/${props.id}`} className="card-location">
                <img src={props.cover} alt="Illustration de la location" className="card-thumbnail"/>
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

export default CardLocation