import "../style/LocationDetails.css"
import Dropdown from "../components/Dropdown";
import {Redirect} from "react-router-dom";
import {useDetails} from "../utils/customHooks";
import DetailsCarousel from "../components/DetailsCarousel";
import DetailsRating from "../components/DetailsRating";

const LocationDetails = () => {
    const {isLoading, isError, data} = useDetails()

    if (isError) return <Redirect to='/404' />

    if (isLoading) return <div>Données en chargement</div>

    return (
        <>
            <DetailsCarousel pictures={data.pictures} title={data.title} />

            <div className="details-wrapper">

                <div className="details-title-container">
                    <h1 className="details-title">{data.title}</h1>
                    <h2 className="details-city">{data.location}</h2>
                    <div className="details-tag-container">
                        {data.tags?.map(tag => (<div key={tag} className="details-tag-item">{tag}</div> ))}
                    </div>
                </div>

                <div className="details-rating-container">
                    <DetailsRating rating={data.rating} />
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