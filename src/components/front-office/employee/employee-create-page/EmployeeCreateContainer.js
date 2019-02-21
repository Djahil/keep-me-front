import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { FaEdit } from "react-icons/fa";

import Card from "../../layouts/card/Card"
import schema from './EmployeeFormSchema'
import withForm from './FormHoc';
import EmployeeForm from './EmployeeForm';

// Les valeurs initiales sont vides lors d'une création
const initialValues = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    poste: '',
    entreprise: ''
};

// Le container va créer l'instance de classe formulaire
// à l'aide du HOC
class EmployeeCreateContainer extends Component {
    render() {
        // On transmet à notre HOC le formulaire employé
        // les valeurs initiales et le schéma de validation
        const EmployeeCreate = withForm(
            EmployeeForm, initialValues, schema
        );

        // On construit notre page (boutons, titres...)
        // Puis on rend notre HOC en l'utilisant comme une balise JSX
        // Au passage on lui transmet le composant Card dans lequel seront injectées les datas
        return (
            <div className="container pt-5">
                <Button href={"/user"} variant="warning" className="btn mb-5 align-content-center">
                    <FaEdit style={{ color: 'white' }} className="fa-edit mr-2" />
                    <span style={{ fontWeight: 'bold', color: 'white' }}>Retour</span>
                </Button>

                <h1>Nouvelle carte</h1>

                <EmployeeCreate>
                    <Card />
                </EmployeeCreate>
            </div>
        )
    }
}

export default EmployeeCreateContainer;