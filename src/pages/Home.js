import {Component} from "react";
import HomeHeader from "../components/HomeHeader";
import CardLocation from "../components/CardLocation";

class Home extends Component {
    render() {
        return (
            <>
                <HomeHeader/>
                <CardLocation/>
            </>
        )
    }
}

export default Home