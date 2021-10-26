import {Component} from "react";
import KasaHeader from "../components/KasaHeader";

class LayoutHeaderOnly extends Component {
    render() {
        return(
            <>
                <KasaHeader/>
                {this.props.children}
            </>
        )
    }
}

export default LayoutHeaderOnly