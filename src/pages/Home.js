import {Component} from "react";
import HomeHeader from "../components/HomeHeader";
import CardLocation from "../components/CardLocation";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationsArray : {},
            loading: true
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/kasaData')
            .then(response => {
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then(data => {
                this.setState({locationsArray : data})
                this.setState({loading : false})
            })
    }

    render() {
        if (this.state.loading) return (<div>Données en chargement</div>)

        return (
            <>
                <HomeHeader/>
                {this.state.locationsArray?.map(locationItem => (
                    <CardLocation
                        title={locationItem.title}
                        cover={locationItem.cover}
                    />
                ))}
            </>
        )
    }
}

export default Home