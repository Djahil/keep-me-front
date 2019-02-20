import React, { Component } from 'react';
import axios from 'axios';
import VisitCard from './card/VisitCard';
import './VisitCardPage.scss';
import mockUser from '../../../assets/data/mockUser';

class VisitCardPage extends Component {

    state = {
        cardInfos: {},
        isMockMessageVisible: false,
        isCardVisible: false
    }

    componentDidMount() {
        const {match: {params} } = this.props
        
        axios.get(`http://localhost:8000/employee/show/${params.slug}/`)
            // .then(res => res.json())
            .then(
                res => {
                    if(res.data) {
                        this.setState({cardInfos:res.data})
                        // ON force le logo en dur
                        // this.setState({cardInfos.logo})
                    } else {
                        this.setState({cardInfos:mockUser})
                    }
                    this.setState({isCardVisible: true})
                    console.log(res)
                }
            )
            .catch( 
                err => {
                    console.log(err)
                }
            )
    }

    render () {
        return (
            <div className="visit-card-page">
                <VisitCard
                    logo={this.state.cardInfos.logo}
                    nom={this.state.cardInfos.nom}
                    prenom={this.state.cardInfos.prenom}
                    poste={this.state.cardInfos.poste}
                    mail={this.state.cardInfos.mail}
                    entreprise={this.state.cardInfos.entreprise}
                />
            </div>
        )
    }
}

export default VisitCardPage;