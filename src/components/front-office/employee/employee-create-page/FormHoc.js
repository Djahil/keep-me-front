import React, { Component } from 'react';
import Joi from 'joi-browser';

// withForm est un HOC (Higher Order Component)
// https://reactjs.org/docs/higher-order-components.html
// On va lui passer un composant, auquel on souhaite rajouter des fonctionnalités
// Ainsi que des valeurs initiales, et un schéma de validation
const withForm = (
    WrappedComponent,
    initialValues,
    validationSchema,
    submitFn = () => { console.log('Submitted'); }) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: initialValues,
                errors: {}
            };
        }

        validateProperty = ({ name, value }) => {
            const obj = { [name]: value };
            const propSchema = { [name]: validationSchema[name] }; // schema de name
            const { error } = Joi.validate(obj, propSchema);
            return error ? error.details[0].message : null;
        };

        handleSubmit = e => {
            e.preventDefault();

            const errors = {};
            const res = Joi.validate(this.state.data, validationSchema, { abortEarly: false });
            if (res.error) {
                res.error.details.map(item => errors[item.path[0]] = item.message);
                this.setState({ errors: errors || {} });
                return;
            }

            submitFn();
        };

        // on inputs change
        handleChange = ({ currentTarget: input }) => {
            // on recupere les errors a la volée
            const errors = { ...this.state.errors };
            const errorMessage = this.validateProperty(input);
            if (errorMessage) // si message d'erreur
                errors[input.name] = errorMessage; // on place ds le state (ex: errors.username = 'required')
            else delete errors[input.name]; // sinon on

            // on recupere les inputs
            let data = { ...this.state.data };
            data[input.name] = input.value;

            // save inputs + errors
            this.setState({ data, errors });
        };

        render() {
            // On extrait les possibles enfants
            const { children } = this.props;
            // Et on leur injecte la propriété "data" (pour les besoins de notre composant Card en l'occurence)
            const childrenWithData = React.Children.map(children, child =>
                React.cloneElement(child, { data: this.state.data })
            );

            // On rend donc notre composant wrappé, suivi de ses enfants
            // auxquels on a injecté la propriété data
            return (
                <>
                    <WrappedComponent
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        data={this.state.data}
                        errors={this.state.errors}
                    />
                    {childrenWithData}
                </>
            )
        }
    };
}

export default withForm;
