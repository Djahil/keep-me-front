import React, {Component, Fragment} from 'react';
import {Form as Formbs, Button, Jumbotron, Container, Alert, Modal, Row, Col} from "react-bootstrap";

import {Formik} from 'formik';
import MapPropsToValues from './MapPropsToValues'
import YupValidator from './YupValidator'
import axios from 'axios';
import capitalize from '../../../utils/Capitalizer'

const API = "http://localhost:8000/";
const uriContact = "contact/mail";

class Contact extends Component {
    state = {
        show: false,
        msg: 'Error',
        modalheader: '',
        status: 'danger'

    };

    showModal = (props) => {
        let user = props;
        this.setState({show: true});
        this.setState({msg: "Merci et à bientot " + capitalize(props.prenom) + " " + capitalize(props.nom)});
        this.setState({modalheader: "Votre message est bien envoyé "});
    };

    hideModal = () => {
        this.setState({show: false})
    };

    sendMsg = (props) => {
        axios({
            method: 'post',
            url:  API+uriContact,
            data: JSON.stringify(props)
        })
            .then((res) => {
            console.log(res);
                if (res.data === this.state.msg ) {

                    props.message = "Le serveur a répondu avec une erreur, veuillez vérifier vos informations et réessayer ultérieurement";
                    props.prenom ="";
                    props.email="";
                    props.entreprise="";
                    props.objet="";

                    this.setState({status:"danger"});
                    this.setState({modalheader: res.data });
                    this.setState({msg: "Votre message n'a pa pu être envoyé"});
                    this.showModal(props);
                }
                else{
                    this.setState({msg: "Votre message n'a pa pu être envoyé"});
                    this.setState({status:"success"});
                    console.log(this.state.status);
                    this.showModal(props)

                }
            })
            .catch(
                console.log("dedffqs")
            );
    };

    render() {
        return (
            <>
            <Formik
                initialValues={MapPropsToValues}
                validationSchema={YupValidator}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        this.sendMsg(values);
                        setSubmitting(false);
                    });
                }}
                render={
                    props => (
                        <Fragment>
                            <h2>{this.state.msg}</h2>

                            <Modal show={this.state.show} onHide={this.hideModal} className="info">
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-sm">
                                        {this.state.modalheader}
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Container>
                                        <Alert variant={this.state.status}>
                                            {this.state.msg}
                                        </Alert>
                                        <Row>
                                            <Col xs={12} md={6}>
                                                {props.values.entreprise}
                                            </Col>
                                            <Col xs={12} md={6}>
                                                {props.values.email}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                {(props.values.objet)}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                { (props.values.message)}</Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                            </Modal>

                            <Formbs onSubmit={props.handleSubmit} className="container justify-content-center">
                                <Jumbotron fluid>
                                    <Container>
                                        <h1>Nous contacter</h1>
                                        <p>
                                            This is a modified jumbotron that occupies the entire horizontal space of
                                            its parent.
                                        </p>
                                    </Container>
                                </Jumbotron>
                                <Formbs.Row>
                                    <Formbs.Group className="col">
                                        <Formbs.Label>Objet </Formbs.Label>
                                        <Formbs.Control
                                            type="text"
                                            placeholder="Entez l'objet de votre email"
                                            onSubmit={props.handleSubmit}
                                            onBlur={props.handleBlur}
                                            onChange={props.handleChange}
                                            value={props.values.objet}
                                            isValid={(props.touched.objet || props.dirty.prenom) && !props.errors.objet}
                                            name="objet"
                                        />
                                        {props.errors.objet &&
                                        <div id="feedback" className="alert-danger">{props.errors.objet}</div>}
                                    </Formbs.Group>
                                </Formbs.Row>
                                <Formbs.Row>
                                    <Formbs.Group className="col">
                                        <Formbs.Label>Prenom</Formbs.Label>
                                        <Formbs.Control
                                            type="text"
                                            placeholder="Entez votre Prenom"
                                            onSubmit={props.handleSubmit}
                                            onBlur={props.handleBlur}
                                            onChange={props.handleChange}
                                            value={props.values.prenom}
                                            isValid={(props.touched.prenom || props.dirty.prenom) && !props.errors.prenom}

                                            name="prenom"
                                        />
                                        {props.errors.prenom &&
                                        <div id="feedback" className="alert-danger">{props.errors.prenom}</div>}
                                    </Formbs.Group>

                                    <Formbs.Group className="col">
                                        <Formbs.Label>Nom</Formbs.Label>
                                        <Formbs.Control
                                            type="text"
                                            placeholder="Entez votre nom"
                                            onSubmit={props.handleSubmit}
                                            onBlur={props.handleBlur}
                                            onChange={props.handleChange}
                                            value={props.values.nom}
                                            isValid={props.touched.nom && !props.errors.nom}

                                            name="nom"
                                        />
                                        {props.errors.nom &&
                                        <div id="feedback" className="alert-danger">{props.errors.nom}</div>}
                                    </Formbs.Group>
                                </Formbs.Row>

                                <Formbs.Row>
                                    <Formbs.Group className="col">
                                        <Formbs.Label>Email</Formbs.Label>
                                        <Formbs.Control
                                            type="email"
                                            placeholder="email@box.ext"
                                            onSubmit={props.handleSubmit}
                                            onBlur={props.handleBlur}
                                            onChange={props.handleChange}
                                            value={props.values.email}
                                            name="email"
                                            aria-describedby="@"
                                            isValid={props.touched.email && !props.errors.email}
                                        />
                                        { props.touched.email &&
                                        props.errors.email &&
                                        <div id="feedback" className='alert-danger error'>{props.errors.email}</div>
                                        }
                                    </Formbs.Group>

                                    <Formbs.Group className="col">
                                        <Formbs.Label>entreprise</Formbs.Label>
                                        <Formbs.Control
                                            type="text"
                                            placeholder="Entez votre entreprise"
                                            onSubmit={props.handleSubmit}
                                            onBlur={props.handleBlur}
                                            onChange={props.handleChange}
                                            value={props.values.entreprise}
                                            isValid={props.touched.entreprise && !props.errors.entreprise}

                                            name="entreprise"
                                        />
                                        {props.errors.entreprise &&
                                        <div id="feedback" className="alert-danger">{props.errors.entreprise}</div>}
                                    </Formbs.Group>
                                </Formbs.Row>
                                <Formbs.Row>
                                    <Formbs.Group className="col">
                                        <Formbs.Label>Message</Formbs.Label>
                                        <Formbs.Control
                                            as="textarea" rows="3"
                                            placeholder="Entez votre entreprise"
                                            onSubmit={props.handleSubmit}
                                            onBlur={props.handleBlur}
                                            onChange={props.handleChange}
                                            value={props.values.message}
                                            isValid={props.touched.message && !props.errors.message}
                                            name="message"
                                        />
                                        {props.errors.message &&
                                        <div id="feedback" className="alert-danger">{props.errors.message}</div>}
                                    </Formbs.Group>
                                </Formbs.Row>
                                <Button variant="primary"
                                        type="submit"
                                        disabled={props.isSubmitting}
                                >
                                    {props.isSubmitting ? 'Ok vas y' : 'Pas si vite' }
                                </Button>

                            </Formbs>
                        </Fragment>

                    )}
            />

            </>

        );
    }
}
export default Contact;
