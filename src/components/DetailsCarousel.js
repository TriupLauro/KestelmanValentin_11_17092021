import "../style/DetailsCarousel.css"
import {useState} from "react";

const DetailsCarousel = (props) => {
    //Needs two props : The pictures array and the location title

    const [pictureIndex, setPictureIndex] = useState(0)

    const changeIndex = (newValue) => {
        setPictureIndex(newValue)
    }

    const picturesArray = props.pictures
    const needArrows = picturesArray.length > 1
    const currentPicture = picturesArray[pictureIndex]
    const previousIndex = pictureIndex === 0 ? picturesArray.length - 1 : pictureIndex - 1
    const nextIndex = pictureIndex === picturesArray.length - 1 ? 0 : pictureIndex + 1

    return (
        <div className="details-carousel">
            {needArrows && <button className="details-carousel-previous-button" onClick={() => changeIndex(previousIndex)}> </button> }
            <img src={currentPicture} alt={props.title} className="details-carousel-picture" />
            {needArrows && <button className="details-carousel-next-button" onClick={() => changeIndex(nextIndex)}> </button> }
        </div>
    )
}

export default DetailsCarousel