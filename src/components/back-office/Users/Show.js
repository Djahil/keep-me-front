import React from 'react';
import { Show, SimpleShowLayout, TextField, email } from 'react-admin';

export const UserShow = (props) => (
    <Show { ...props }>
        <SimpleShowLayout>
            <TextField source="email" label="Email" validate={ email() } />
            <TextField  source="nom" label="Lastname"/>
            <TextField  source="prenom" label="Firstname"/>
            <TextField  source="nom_entreprise" label="Nom Entreprise"/>
            <TextField  source="adresse" label="Adresse"/>
            <TextField  source="code_postal" label="Code Postal"/>
            <TextField  source="site_web" label="Site Web"/>      
            <TextField  source="social" label="Social"/>       
        </SimpleShowLayout>
    </Show>
);