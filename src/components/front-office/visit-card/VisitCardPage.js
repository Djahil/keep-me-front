import React, { Component } from 'react';
import VisitCard from './card/VisitCard';
import './VisitCardPage.scss';
import mockUser from '../../../assets/data/mockUser';

class VisitCardPage extends Component {

    state = {
        cardInfos: {},
        isMockMessageVisible: false,
        isCardVisible: false
    }

    test = {
        'logo': 'test',
        'nom': 'test',
        'prenom': 'test',
        'poste': 'test',
        'mail': 'test',
        'entreprise': 'test',        
    }

    componentDidMount() {
        const {match: {params} } = this.props
        
        fetch(`https://localhost:8001/api/${params.slug}/`)
            .then(res => res.json())
            .then(
                res => {
                    const isCardVisible = true
                    this.setState({isCardVisible})
                    const cardInfos = res;
                    this.setState({cardInfos})
                    console.log(res)
                },
                err => {
                    const cardInfos = mockUser;
                    this.setState({cardInfos})
                    console.log(err)
                    const isMockMessageVisible = true;
                    this.setState({isMockMessageVisible})
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