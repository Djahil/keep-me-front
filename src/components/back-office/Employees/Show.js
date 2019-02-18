import React from 'react';
import { Show, SimpleShowLayout, TextField, email } from 'react-admin';

export const EmployeeShow = (props) => (
    <Show { ...props }>
        <SimpleShowLayout>
            <TextField source="nom" label="Nom"/>
            <TextField source="prenom" label="Prénom"/>
            <TextField source="poste" label="Poste"/>
            <TextField source="email" label="Email" validate={ email() } />
            <TextField source="telephone" label="Telephone"/>      
        </SimpleShowLayout>
    </Show>
);