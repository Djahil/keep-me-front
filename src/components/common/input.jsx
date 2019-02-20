import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                // value={value} // username n'a plus sont propre state, on utilise les props pour forcer sa value
                // onChange={onChange}
                // type={type}
                {...rest} // equivalent aux champs commentés ci-dessus
                name={name}
                id={name}
                className="form-control"/>

            {error && // si on a une erreur on affiche la div
            <div className="alert alert-danger">
                {error}
            </div>
            }
        </div>
    );
};

export default Input;
