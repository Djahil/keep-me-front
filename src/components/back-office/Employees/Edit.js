import React from 'react';
import { Edit, SimpleForm, TextInput, email } from 'react-admin';

export const EmployeeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nom" label="Nom"/>
            <TextInput source="prenom" label="Prénom"/>
            <TextInput source="poste" label="Poste"/>
            <TextInput source="email" label="Email" validate={ email() } />
            <TextInput source="telephone" label="Telephone"/>          
        </SimpleForm>
    </Edit>
);