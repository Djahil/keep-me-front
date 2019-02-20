import React, {Component, Fragment} from 'react';
import {Form as Formbs, Button, Jumbotron, Container, Alert, Modal, Row} from "react-bootstrap";

import {Formik} from 'formik';
import MapPropsToValues from './MapPropsToValues'
import YupValidator from './YupValidator'

class Contact extends Component {
    state = {
        show: false,
        msg: "You have an error in your form",
        modalheader: ""

    };

    showModal = (props) => {
        this.setState({show: true});
        let user = props;
        this.setState({msg: "Merci et à bientot " + user.prenom + " " + user.nom});
        this.setState({modalheader: "Votre message est bien envoyé "});
    };

    hideModal = () => {
        this.setState({show: false})
    };


    render() {
        return (
            <>
            <Formik
                initialValues={MapPropsToValues}
                validationSchema={YupValidator}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    setTimeout(() => {
                        this.showModal(values);
                        setSubmitting(false);
                    }, 300);
                }}
                render={
                    props => (
                        <Fragment>
                            <Modal show={this.state.show} onHide={this.hideModal} className="info">
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-sm">
                                        {this.state.modalheader}
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Container>
                                        <Alert variant="success">
                                            {this.state.msg}
                                        </Alert>
                                        <Row>
                                            {props.values.email}
                                        </Row>
                                        <Row>
                                            {props.values.objet}
                                        </Row>
                                        <Row>
                                            {props.values.message}
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
