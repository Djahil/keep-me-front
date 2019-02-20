import React from 'react';

import Joi from 'joi-browser';
import Form from "../../common/form"

class Signin extends Form {
    state = {
        data: {
            nom: '',
            prenom: '',
            email: '',
            telephone: '',
            business: '',
            rue: '',
            codePostal: '',
            ville: '',
            site: '',
            social: '',
            password: ''
        },
        errors: {}
    };

    schema = {
        nom: Joi.string().required().label('Nom'),
        prenom: Joi.string().required().label('Prenom'),
        email: Joi.string().required().email({minDomainAtoms: 2}).label('Email'),
        telephone: Joi.string().required().label('Telephone'),
        business: Joi.string().required().label('Entreprise'),
        rue: Joi.string().required().label('Rue'),
        codePostal: Joi.string().required().regex(/^[0-9]{5}$/).label('Code Postal'),
        ville: Joi.string().required().label('Ville'),
        site: Joi.string().required().label('Site'),
        social: Joi.string().label('Reseaux sociaux'),
        password: Joi.string().required().label('Password').min(3).max(30) //.regex(/^[a-zA-Z0-9]{3,30}$/),
    };

    render() {

        return (
            <div className="container pt-5">
                <h1>Inscription</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                        <div className="col-md-6">
                            {this.renderInput('nom', 'Nom')}
                        </div>
                        <div className="col-md-6">
                            {this.renderInput('prenom', 'Prenom')}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            {this.renderInput('email', 'Email', 'email')}
                        </div>
                        <div className="col-md-6">
                            {this.renderInput('telephone', 'Telephone')}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            {this.renderInput('business', 'Entreprise')}
                        </div>
                        <div className="col-md-6">
                            <span>Logo</span>
                            <input type="file" className="form-control-file mt-3" id="logo"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            {this.renderInput('rue', 'rue')}
                        </div>
                        <div className="col-md-4">
                            {this.renderInput('ville', 'Ville')}
                        </div>
                        <div className="col-md-2">
                            {this.renderInput('codePostal', 'code Postal')}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            {this.renderInput('site', 'Site')}
                        </div>
                        <div className="col-md-6">
                            {this.renderInput('social', 'Reseaux Sociaux')}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            {this.renderInput('password', 'Mot de passe', 'password')}
                        </div>
                    </div>

                    {/*<div className="row">*/}
                    {/*<div className="col-md-6">*/}
                    {/*{this.renderInput('password', 'Confirmer le mot de passe', 'password')}*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    {this.renderButton("Enregister")}
                </form>
            </div>
        )
    }

    doSubmit = () => {
        // Call to the server
        console.log('Submitted');
    };
}

export default Signin;
