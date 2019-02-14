import React from 'react';
import { Col } from 'react-bootstrap';

const SocialIcon = ({icon, url, altText}) => (
    <Col className="content">
        <a href={ url } target="_blank" rel="noopener noreferrer">
            <img className="social-logo" src={ icon } alt={ altText } />
        </a>          
    </Col>
)

export default SocialIcon;