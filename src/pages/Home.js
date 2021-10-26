import {Component} from "react";
import HomeHeader from "../components/HomeHeader";
import HouseCard from "../components/HouseCard";
import '../style/Home.css'
import LayoutHeaderFooter from "../layouts/LayoutHeaderFooter";

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
        if (this.state.loading) return (
            <LayoutHeaderFooter>
                <div>Données en chargement</div>
            </LayoutHeaderFooter>
        )

        return (
            <LayoutHeaderFooter>
                <div className="home-wrapper">
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
                </div>
            </LayoutHeaderFooter>
        )
    }
}

export default Home