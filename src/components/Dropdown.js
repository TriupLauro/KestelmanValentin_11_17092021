import "../style/Dropdown.css"
import {useState} from "react";

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        isOpen ?
            <div className="dropdown-container">
                <button className="dropdown-button" onClick={toggleDropdown}>{props.title}<div className="dropdown-button-chevron"> </div></button>
                <div className="dropdown-content">{props.description}</div>
            </div>
            :
            <div className="dropdown-container">
                <button className="dropdown-button" onClick={toggleDropdown}>{props.title}
                    <div className="dropdown-button-chevron dropdown-button-chevron--face-down"> </div>
                </button>
            </div>
    )
}

export default Dropdown;