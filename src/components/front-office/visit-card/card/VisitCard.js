import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './VisitCard.scss';

const VisitCard = ({ logo, nom, prenom, poste, mail, phone, entreprise, urlBase, isLogoVisible }) => (
<Container className='visit-card'>
    <Row >
        { isLogoVisible ? <Col className='vcard-content-left'><img className='logo-corp' src={ urlBase + logo } alt="corpLogo" /></Col> : <></>}
        <Col className='vcard-content-right'>
            <h1 className='user-important'>{ prenom } { nom }</h1>
            <p>{ poste }</p>
            <p>{ mail }</p>
            <p>{ phone }</p>
        </Col>
    </Row>
    <Row>
        <h1 className='text-center user-important'>{ entreprise }</h1>
    </Row>
</Container>
)


export default VisitCard;