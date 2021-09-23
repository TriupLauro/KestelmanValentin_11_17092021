import {useQuery} from "react-query";
import {fetchDetails, fetchLocations} from "./functions";
import {useParams} from "react-router-dom";

export const useLocations = () => {
    return useQuery('locations', fetchLocations)
}

export const useDetails = () => {
    const params = useParams()
    const {idQuery} = params

    return useQuery(['details', idQuery], () => fetchDetails(idQuery))
}