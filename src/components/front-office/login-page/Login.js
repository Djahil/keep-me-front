import React from 'react';

import LoginForm from "./login-form/LoginForm";

const Login = () => (
    <div className="container pt-5" >
        <h1>LOGIN</h1>
        <LoginForm />
        <a href="/forgot-password">Mot de passe oublie ?</a>
    </div>
);

export default Login;
