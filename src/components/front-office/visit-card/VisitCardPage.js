import React, { Component } from 'react';
import VisitCard from './card/VisitCard';
import './VisitCardPage.scss';
import mockUser from '../../../assets/data/mockUser';
import Loader from 'react-loader-spinner';
import { apiGetCard } from '../../../services/ApiService';


const ep = process.env.REACT_APP_API_URL_CARD

class VisitCardPage extends Component {
    state = {
        cardInfos: {},
        isMockMessageVisible: false,
        isCardVisible: false
    }

    componentDidMount() {
        const {match: {params} } = this.props
        apiGetCard(ep, params.slug)
            .then(
                res => {
                    this.setState({ isCardVisible: true })
                    this.setState({ cardInfos:res.data })
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
                    {this.state.isMockMessageVisible ? <p>Nous n'avons pas pu récupérer les informations.<br />Cette carte avec un template par défaut s'affiche.</p> : <></>}
                </div>
            )
        }
        // if (this.state.isCardVisible && this.state.isMockMessageVisible) {
        //     return (
        //         <div className="visit-card-page">
        //             <VisitCard
        //                 logo={cardInfos.logo}
        //                 nom={cardInfos.nom}
        //                 prenom={cardInfos.prenom}
        //                 poste={cardInfos.poste}
        //                 mail={cardInfos.email}
        //                 phone={cardInfos.telephone}
        //                 entreprise={cardInfos.entreprise}
        //             />
        //             <p>MESSAGE</p>
        //         </div>
        //     )
        // }
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