import {useState} from "react";
import "../style/LocationDetails.css"
import FullStar from "../assets/star_full.svg"
import EmptyStar from "../assets/star_empty.svg"
import Dropdown from "../components/Dropdown";
import {Redirect} from "react-router-dom";
import {useDetails} from "../utils/customHooks";

const LocationDetails = () => {
    const [pictureIndex, setPictureIndex] = useState(0)

    const {isLoading, isError, data} = useDetails()

    const changeIndex = (newValue) => {
        setPictureIndex(newValue)
    }

    if (isError) return <Redirect to='/404' />

    if (isLoading) return <div>Données en chargement</div>

    const picturesArray = data?.pictures
    const needArrows = picturesArray.length > 1
    const currentPicture = picturesArray[pictureIndex]
    const previousIndex = pictureIndex === 0 ? picturesArray.length - 1 : pictureIndex - 1
    const nextIndex = pictureIndex === picturesArray.length - 1 ? 0 : pictureIndex + 1

    const rating = parseInt(data?.rating)

    const stars = []
    for(let i = 1; i<=5; i++) {
        i <= rating ? stars.push(true) : stars.push(false)
    }

    return (
        <>
            <div className="details-carousel">
                {needArrows && <button className="details-carousel-previous-button" onClick={() => changeIndex(previousIndex)}> </button> }
                <img src={currentPicture} alt={data.title} className="details-carousel-picture" />
                {needArrows && <button className="details-carousel-next-button" onClick={() => changeIndex(nextIndex)}> </button> }
            </div>

            <div className="details-wrapper">

                <div className="details-title-container">
                    <h1 className="details-title">{data.title}</h1>
                    <h2 className="details-city">{data.location}</h2>
                    <div className="details-tag-container">
                        {data.tags?.map(tag => (<div key={tag} className="details-tag-item">{tag}</div> ))}
                    </div>
                </div>

                <div className="details-rating-container">
                    <div className="details-rating">
                        {stars.map((level,index) => (level ?
                            <img key={`level-${index}`} src={FullStar} alt="étoile remplie"/> :
                            <img key={`level-${index}`} src={EmptyStar} alt="étoile vide"/>))
                        }
                    </div>
                    <div className="details-profile-container">
                        <div className="details-profile-name">{data.host.name}</div>
                        <img className="details-profile-picture"
                             src={data.host.picture} alt={data.host.name}
                        />
                    </div>
                </div>

            </div>

            <div className="details-dropdown-container">
                <Dropdown title="Description" description={data.description} />
                <Dropdown title="Équipements" description={data.equipments?.map((item,index) => (<span key={`${item}-${index}`}>{item}<br/></span>))} />
            </div>
        </>
    )
}

export default LocationDetails