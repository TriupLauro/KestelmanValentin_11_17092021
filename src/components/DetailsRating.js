import "../style/DetailsRating.css"
import FullStar from "../assets/star_full.svg";
import EmptyStar from "../assets/star_empty.svg";

const DetailsRating = (props) => {
    const score = parseInt(props.rating)

    const stars = []
    for(let i = 1; i<=5; i++) {
        i <= score ? stars.push(true) : stars.push(false)
    }

    return (
        <div className="details-rating">
            {stars.map((level,index) => (level ?
                <img key={`level-${index}`} src={FullStar} alt="étoile remplie"/> :
                <img key={`level-${index}`} src={EmptyStar} alt="étoile vide"/>))
            }
        </div>
    )
}

export default DetailsRating