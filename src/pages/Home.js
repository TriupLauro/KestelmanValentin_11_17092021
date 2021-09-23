import HomeHeader from "../components/HomeHeader";
import CardLocation from "../components/CardLocation";
import {useLocations} from "../utils/customHooks";

function Home()  {

    const locations = useLocations()

    if (locations.isLoading) return (<div>Données en chargement</div>)

    return (
        <>
            <HomeHeader/>
            <div className="home-card-container">
                {locations.data?.map(locationItem => (
                    <CardLocation
                        key={locationItem.id}
                        title={locationItem.title}
                        cover={locationItem.cover}
                        id={locationItem.id}
                    />
                ))}
            </div>
        </>
    )

}

export default Home