import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './VisitCard.scss';

const VisitCard = ({ logo, nom, prenom, poste, mail, entreprise }) => (
    <Container className='visit-card'>
        <Row >
            <Col className='vcard-content-left'>
                <img className='text-center logo-corp' src={ logo } alt="corpLogo" />
            </Col>
            <Col className='vcard-content-right'>
                <div className='text-center'>
                    <h1 className='user-important'>{ nom }</h1>
                    <h1 className='user-important'>{ prenom }</h1>
                    <p>{ poste }</p>
                    <p>{ mail }</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className='vcard-footer'>
                <h1 className='text-center user-important'>{ entreprise }</h1>
            </Col>
        </Row>
    </Container>
)


export default VisitCard;