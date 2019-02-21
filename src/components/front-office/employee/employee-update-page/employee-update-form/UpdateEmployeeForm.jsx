import React from 'react';

const UpdateEmployeeForm = (props) => {
        return (
            <div>
                <h1>{props.employee.nom}</h1>
                <h1>{props.employee.prenom}</h1>
                ${console.log(props)}
            </div>
        );
}

export default UpdateEmployeeForm;
