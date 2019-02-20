import React from 'react';
import sadFace from '../../../assets/img/icons/error/sadFace.svg';
import { Card } from 'react-bootstrap';
import './ErrorPage.scss';

const ErrorPage = () => (
    <Card className="err-card">
        <Card.Img variant="left" src={ sadFace } className="err-card-img" alt="Page introuvable"/>
        <Card.Body className="err-card-body">
            <Card.Text>
            Oups, il semblerait que cette page n'existe pas...
            </Card.Text>
        </Card.Body>
    </Card>
)

export default ErrorPage;