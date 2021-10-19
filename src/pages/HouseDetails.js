import {Component} from "react";
import "../style/HouseDetails.css"
import FullStar from "../assets/star_full.svg"
import EmptyStar from "../assets/star_empty.svg"
import Dropdown from "../components/Dropdown";
import {Redirect} from "react-router-dom";

class HouseDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details : {},
            isLoading : true,
            pictureIndex : 0,
            redirect : null
        }
    }

    componentDidMount() {
        const {idQuery} = this.props.match.params

        fetch(`http://localhost:8000/kasaData/${idQuery}`)
            .then(response => {
                if (!response.ok) throw response.status
                return response.json()
            })
            .then(data => {
                this.setState({details : data})
                this.setState({isLoading : false})
            })
            .catch(error => {
                if (error === 404) {
                    this.setState({redirect : '/404'})
                }else{
                    //If the code reaches here, we don't know what kind of error happened
                    throw error
                }
            })
    }

    changeIndex = (newValue) => {
        this.setState({pictureIndex : newValue})
    }

    render() {
        if (this.state.redirect) return <Redirect to={this.state.redirect} />

        if (this.state.isLoading) return <div className="details-content">Données en chargement</div>

        const picturesArray = this.state.details?.pictures
        const needArrows = picturesArray.length > 1
        const currentPicture = picturesArray[this.state.pictureIndex]
        const previousIndex = this.state.pictureIndex === 0 ? picturesArray.length - 1 : this.state.pictureIndex - 1
        const nextIndex = this.state.pictureIndex === picturesArray.length - 1 ? 0 : this.state.pictureIndex + 1

        const rating = parseInt(this.state.details?.rating)
        const stars = []
        for(let i = 1; i<=5; i++) {
            i <= rating ? stars.push(true) : stars.push(false)
        }

        const [firstName, lastName] = this.state.details.host.name.split(' ')

        if (this.state.details) {
            return (
                <div className="details-content">
                    <div className="details-carousel">
                        {needArrows && <button className="details-carousel-previous-button" onClick={() => this.changeIndex(previousIndex)}> </button> }
                        <img src={currentPicture} alt={this.state.details.title} className="details-carousel-picture" />
                        {needArrows && <button className="details-carousel-next-button" onClick={() => this.changeIndex(nextIndex)}> </button> }
                    </div>

                    <div className="details-wrapper">

                        <div className="details-title-container">
                            <h1 className="details-title">{this.state.details.title}</h1>
                            <h2 className="details-city">{this.state.details.location}</h2>
                            <div className="details-tag-container">
                                {this.state.details.tags?.map(tag => (<div key={tag} className="details-tag-item">{tag}</div> ))}
                            </div>
                        </div>

                        <div className="details-rating-container">
                            <div className="details-rating">
                                {stars.map((level,index) => (level ?
                                    <img key={`level-${index}`} src={FullStar} alt="étoile remplie"/> :
                                    <img key={`level-${index}`} src={EmptyStar} alt="étoile vide"/>))
                                }
                            </div>
                            <div className="details-profile-container">
                                <div className="details-profile-name">{firstName}<br/>{lastName}</div>
                                <img className="details-profile-picture"
                                    src={this.state.details.host.picture} alt={this.state.details.host.name}
                                />
                            </div>
                        </div>

                    </div>

                    <div className="details-dropdown-container">
                        <Dropdown title="Description" description={this.state.details.description} />
                        <Dropdown title="Équipements" description={this.state.details.equipments?.map((item,index) => (<span key={`${item}-${index}`}>{item}<br/></span>))} />
                    </div>
                </div>
            )
        }
    }
}

export default HouseDetails