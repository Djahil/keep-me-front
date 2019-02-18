import React from 'react';
import {Card } from 'react-bootstrap';
import logo from '../../../../assets/img/logo/keep-me-logo-coral.svg'

import './Presentation.scss'

const Presentation = () => (
    <Card className="pres-card">
        <Card.Img variant="top" src={ logo } className="pres-card-img" alt="logo Keep Me"/>
        <Card.Body>
            <Card.Text>
            Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere efficiantur et tollit aliquip debitis mei. No deserunt mediocritatem mel. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu.
            </Card.Text>
        </Card.Body>
    </Card>
);

export default Presentation;