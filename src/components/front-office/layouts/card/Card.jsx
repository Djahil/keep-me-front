import React, {Component} from 'react';

const Card = ({data}) => {
    const { nom, prenom, email, telephone, poste, entreprise } = data;
    return (
            <div className="text-center m-5">
                <h3>{nom}</h3>
                <h3>{prenom}</h3>
                <h3>{email}</h3>
                <h3>{telephone}</h3>
                <h3>{poste}</h3>
                <h3>{entreprise}</h3>
            </div>
    )
};

export default Card;
