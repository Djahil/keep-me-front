import React, { Component } from 'react';
import axios from 'axios';
import VisitCard from './card/VisitCard';
import './VisitCardPage.scss';
import mockUser from '../../../assets/data/mockUser';
import Loader from 'react-loader-spinner';

class VisitCardPage extends Component {

    state = {
        cardInfos: {},
        isMockMessageVisible: false,
        isCardVisible: false
    }

    componentDidMount() {
        const {match: {params} } = this.props
        
        axios.get(`http://localhost:8000/card/${params.slug}/`)
            .then(
                res => {
                    this.setState({ isCardVisible: true })
                    this.setState({ cardInfos:res.data })
                }
            )
            .catch( 
                err => {
                    this.setState({ isCardVisible: true })
                    this.setState({ cardInfos:mockUser })
                }
            )
    }

    render () {
        if (this.state.isCardVisible === true) {
            return (
                <div className="visit-card-page">
                    <VisitCard
                        logo={this.state.cardInfos.logo}
                        nom={this.state.cardInfos.nom}
                        prenom={this.state.cardInfos.prenom}
                        poste={this.state.cardInfos.poste}
                        mail={this.state.cardInfos.email}
                        phone={this.state.cardInfos.telephone}
                        entreprise={this.state.cardInfos.entreprise}
                    />
                </div>
            )
        }
        return(
            <div className="visit-card-page">
                <div className="loadingCard">
                <Loader type="Circles" color="rgb(0, 101, 107)" height={80} width={80}/>
                </div>
            </div>
        )
    }
}

export default VisitCardPage;