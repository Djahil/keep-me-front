import React, { Component } from 'react';
import VisitCard from './card/VisitCard';
import './VisitCardPage.scss';
import mockUser from '../../../assets/data/mockUser';
import Loader from 'react-loader-spinner';
import { apiGetCard } from '../../../services/ApiService';

const ep = process.env.REACT_APP_URL;

class VisitCardPage extends Component {
    state = {
        cardInfos: {},
        isMockMessageVisible: false,
        isCardVisible: false,
        urlBase: '',
        isLogoVisible: true
    }
    
    componentDidMount() {
        const {match: {params} } = this.props
        apiGetCard(params.slug)
            .then(
                res => {
                    this.setState({ isCardVisible: true })
                    this.setState({ cardInfos:res.data })
                    this.setState({ urlBase: ep })
                    if (!this.state.cardInfos.logo) {
                        this.setState({ isLogoVisible: false })
                    }
                }
            )
            .catch( 
                err => {
                    this.setState({ isCardVisible: true })
                    this.setState({ isMockMessageVisible: true })
                    this.setState({ cardInfos:mockUser })
                }
            )
    }

    render () {
        const { cardInfos, urlBase, isLogoVisible } = this.state

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
                        urlBase={urlBase}
                        isLogoVisible={isLogoVisible}
                    />
                    {this.state.isMockMessageVisible ? <p>Cette carte est un exemple avec un template par défaut.<br/>Nous n'avons pas pu récupérer les informations que vous recherchez.</p> : <></>}
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