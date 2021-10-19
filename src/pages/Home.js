import {Component} from "react";
import HomeHeader from "../components/HomeHeader";
import HouseCard from "../components/HouseCard";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            housesArray : [],
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
                this.setState({housesArray : data})
                this.setState({loading : false})
            })
    }

    render() {
        if (this.state.loading) return (<div>Données en chargement</div>)

        return (
            <>
                <HomeHeader/>
                <div className="home-card-container">
                    {this.state.housesArray?.map(houseItem => (
                        <HouseCard
                            key={houseItem.id}
                            title={houseItem.title}
                            cover={houseItem.cover}
                            id={houseItem.id}
                        />
                    ))}
                </div>
            </>
        )
    }
}

export default Home