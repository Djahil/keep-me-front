import React from 'react';
import { Create, SimpleForm, TextInput, email } from 'react-admin';

export const EmployeeCreate = (props) => (
    <Create { ...props }>
        <SimpleForm>
            <TextInput source="nom" label="Nom"/>
            <TextInput source="prenom" label="Prénom"/>
            <TextInput source="email" label="Email" validate={ email() } />
            <TextInput source="poste" label="Poste"/>
            <TextInput source="telephone" label="Telephone"/>     
        </SimpleForm>
    </Create>
);