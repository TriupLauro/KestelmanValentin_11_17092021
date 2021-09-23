import {Component} from "react";
import "../style/Dropdown.css"

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggleDropdown = () => {
        this.setState({open : !this.state.open})
    }


    render() {
        return (
            this.state.open ?
                <div className="dropdown-container">
                    <button className="dropdown-button" onClick={this.toggleDropdown}>{this.props.title}<div className="dropdown-button-chevron"> </div></button>
                    <div className="dropdown-content">{this.props.description}</div>
                </div>
                :
                <div className="dropdown-container">
                    <button className="dropdown-button" onClick={this.toggleDropdown}>{this.props.title}
                        <div className="dropdown-button-chevron dropdown-button-chevron--face-down"> </div>
                    </button>
                </div>
        )
    }
}

export default Dropdown;