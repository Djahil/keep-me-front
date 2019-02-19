import React from 'react';

import Joi from 'joi-browser';
import Form from "../../../common/form"

class LoginForm extends Form {
    state = {
        data: {username: '', password: ''},
        errors: {}
    };

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password').min(3).max(30) //.regex(/^[a-zA-Z0-9]{3,30}$/),
    };

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}

                    {this.renderButton("Login")}
                </form>
            </div>
        )
    }

    doSubmit = () => {
        // Call to the server
        console.log('Submitted');
    };
}

export default LoginForm;
