import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './VisitCard.scss';
import mockUser from '../../../../assets/data/mockUser';

const VisitCard = () => (
    <Container className='visit-card'>
        <Row >
            <Col className='vcard-content-left'>
                <img className='text-center logo-corp' src={ mockUser.logo } alt="corpLogo" />
                {/* <div style={{height: 100, width: 100, backgroundColor: 'red'}}></div> */}
            </Col>
            <Col className='vcard-content-right'>
                <div className='text-center'>
                    <h1 className='user-important'>{ mockUser.nom }</h1>
                    <h1 className='user-important'>{ mockUser.prenom }</h1>
                    <p>{ mockUser.poste }</p>
                    <p>{ mockUser.mail }</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className='vcard-footer'>
                <h1 className='text-center user-important'>{ mockUser.entreprise }</h1>
            </Col>
        </Row>
    </Container>
)

export default VisitCard;