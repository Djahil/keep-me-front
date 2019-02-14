import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss';

import logo from '../../../../assets/img/logo/keep-me-logo-white.svg'
import instaLogo from '../../../../assets/img/logo/Instagram_simple_icon.svg';
import twtrLogo from '../../../../assets/img/logo/Twitter_Bird.svg';

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
                        <Col className="content">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img className="social-logo" src={instaLogo} alt="logo Keep Me white" />
                            </a>          
                        </Col>
                        <Col className="content">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img className="social-logo" src={twtrLogo} alt="logo Keep Me white" />
                            </a>
                        </Col>
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