import React from 'react';
import { Show, SimpleShowLayout, TextInput, email } from 'react-admin';

export const EmployeeShow = (props) => (
    <Show { ...props }>
        <SimpleShowLayout>
            <TextInput source="nom" label="Nom"/>
            <TextInput source="prenom" label="Prénom"/>
            <TextInput source="email" label="Email" validate={ email() } />
            <TextInput source="poste" label="Poste"/>
            <TextInput source="telephone" label="Telephone"/>      
        </SimpleShowLayout>
    </Show>
);