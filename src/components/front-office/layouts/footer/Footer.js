import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialIcon from './SocialIcon';

import './Footer.scss';

import social from '../../../../assets/data/socialMedias';
import logo from '../../../../assets/img/logo/keep-me-logo-white.svg'

const socialList = social.map(( { id, logo, url, alt } ) => (
    <SocialIcon key={id}
                icon={logo}
                url={url}
                altText={alt}/>
));

const Footer = () => (
    <Container fluid id="footer">
        <Row>
            <Col className="content">
                <a href="/">
                    <img id="foot-logo" src={logo} alt="logo Keep Me white" />
                </a>
            </Col>
            <Col className="content">
                <Container>
                    <Row>
                        {socialList}
                    </Row>
                </Container>
            </Col>
        </Row>
        <Row>
            <Col className="credits">
                <p className='foot-par'>© Keep Me by HOC - 36 Rue du Sergent Michel Berthet, 69337 Lyon </p>
            </Col>
        </Row>
    </Container>
);

export default Footer;