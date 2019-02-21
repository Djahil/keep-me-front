import React, {Component} from 'react';
import Joi from "joi-browser";
import Button from 'react-bootstrap/Button';

import Input from "./input";

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    validate = () => {
        const options = {abortEarly: false};
        const res = Joi.validate(this.state.data, this.schema, options);
        if (!res.error) return null;

        const errors = {};
        res.error.details.map(item => errors[item.path[0]] = item.message);
        return errors;
    };

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]}; // schema de name
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        this.doSubmit();
    };

    // on inputs change
    handleChange = ({currentTarget: input}) => {
        // on recupere les errors a la volée
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) // si message d'erreur
            errors[input.name] = errorMessage; // on place ds le state (ex: errors.username = 'required')
        else delete errors[input.name]; // sinon on

        // on recupere les inputs
        let data = {...this.state.data};
        data[input.name] = input.value;

        // save inputs + errors
        this.setState({data, errors});
    };

    // renderButton(label) {
    //     return (
    //         <button disabled={this.validate()} // block submit button
    //                 className="btn btn-primary mb-4 float-right">
    //             {label}
    //         </button>
    //     )
    // }

    renderButton(variant, className, label, labelColor, href) {
        return (
            <Button disabled={this.validate()} // block submit button
                    variant={variant}
                    className={`btn ${className}`}
                    href={href}>
                <span style={{color: labelColor}}>
                    {label}
                </span>
            </Button>
        )
    }

    renderInput(name, label, type = 'text') {
        const {data, errors} = this.state;

        return (
            <Input type={type}
                   name={name}
                   value={data[name]}
                   label={label}
                   onChange={this.handleChange}
                   error={errors[name]}
            />
        )
    }
}

export default Form;
