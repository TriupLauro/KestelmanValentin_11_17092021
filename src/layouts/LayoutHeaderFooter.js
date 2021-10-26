import {Component} from "react";
import KasaHeader from "../components/KasaHeader";
import Footer from "../components/Footer";

class LayoutHeaderFooter extends Component {
    render() {
        return(
            <>
                <KasaHeader/>
                {this.props.children}
                <Footer />
            </>

        )
    }
}

export default  LayoutHeaderFooter