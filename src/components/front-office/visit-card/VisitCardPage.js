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
        const { cardInfos } = this.state

        if (this.state.isCardVisible) {
            return (
                <div className="visit-card-page">
                    <VisitCard
                        logo={cardInfos.logo}
                        nom={cardInfos.nom}
                        prenom={cardInfos.prenom}
                        poste={cardInfos.poste}
                        mail={cardInfos.email}
                        phone={cardInfos.telephone}
                        entreprise={cardInfos.entreprise}
                    />
                </div>
            )
        }
        return(
            <div className="visit-card-page">
                <div className="loadingCard">
                <Loader type="Circles" color="rgb(222, 222, 222)" height={80} width={80}/>
                </div>
            </div>
        )
    }
}

export default VisitCardPage;