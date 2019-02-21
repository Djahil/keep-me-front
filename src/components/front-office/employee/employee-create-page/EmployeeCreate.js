import React from 'react';

import Joi from 'joi-browser';
import Button from 'react-bootstrap/Button';
import {FaEdit} from "react-icons/fa";

import Form from "../../../common/form"
import Card from "../../layouts/card/Card"

class EmployeeCreate extends Form {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                nom: '',
                prenom: '',
                email: '',
                telephone: '',
                poste: '',
                entreprise: '',
            },
            errors: {}
        };
    }

    schema = {
        nom: Joi.string()
            .required()
            .label('Nom'),
        prenom: Joi.string()
            .required()
            .label('Prenom'),
        email: Joi.string()
            .required()
            .email({minDomainAtoms: 2})
            .label('Email'),
        telephone: Joi.string()
            .required()
            .label('Telephone'),
        poste: Joi.string()
            .required()
            .label('Poste'),
        entreprise: Joi.string()
            .required()
            .label('Entreprise'),
    };

    render() {
        return (
            <div className="container pt-5">
                <Button href={"/user"} variant="warning" className="btn mb-5 align-content-center">
                    <FaEdit style={{color: 'white'}} className="fa-edit mr-2"/>
                    <span style={{fontWeight: 'bold', color: 'white'}}>Retour</span>
                </Button>

                <h1>Nouvelle carte</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            {this.renderInput(
                                'nom',
                                'Nom')}
                        </div>
                        <div className="col-md-6">
                            {this.renderInput(
                                'prenom',
                                'Prenom')}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            {this.renderInput(
                                'email',
                                'Email',
                                'email')}
                        </div>
                        <div className="col-md-6">
                            {this.renderInput(
                                'telephone',
                                'Telephone')}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            {this.renderInput(
                                'poste',
                                'Poste occupé')}
                        </div>
                        <div className="col-md-6">
                            {this.renderInput(
                                'entreprise',
                                'Entreprise')}
                        </div>
                    </div>

                    {this.renderButton(
                        "success",
                        "btn-alert ml-4 float-right",
                        "Enregistrer",
                        "white",
                        "/user"
                    )}
                </form>

                <Card data={this.state.data}/>
            </div>
        )
    }

    doSubmit = () => {
        // Call to the server
        console.log('Submitted');
    };
}

export default EmployeeCreate;
