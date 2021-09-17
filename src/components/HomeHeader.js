import {Component} from "react";
import '../style/Home.css'

class HomeHeader extends Component {
    render() {
        return (
            <>
                <header className="home-header">
                    <div className="home-header-text">
                        Chez vous, partout et ailleurs
                    </div>
                </header>
            </>
        )
    }
}

export default HomeHeader