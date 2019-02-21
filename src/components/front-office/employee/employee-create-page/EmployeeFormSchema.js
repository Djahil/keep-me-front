import Joi from 'joi-browser';

const schema = {
    nom: Joi.string()
        .required()
        .label('Nom'),
    prenom: Joi.string()
        .required()
        .label('Prenom'),
    email: Joi.string()
        .required()
        .email({ minDomainAtoms: 2 })
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

export default schema;