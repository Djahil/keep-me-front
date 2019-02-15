import React from 'react';
import { Create, SimpleForm, TextInput, email, required, ArrayInput, SimpleFormIterator } from 'react-admin';

export const UserCreate = (props) => (
    <Create { ...props }>
        <SimpleForm>
            <TextInput source="email" label="Email" validate={ email() } />
            <ArrayInput source="roles" label="Roles">
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="password" label="Password" validate={ required() } />
            <TextInput source="nom" label="Nom"/>
            <TextInput source="prenom" label="Prénom"/>
            <TextInput source="nom_entreprise" label="Nom Entreprise"/>
            {/* <img src="logo" /> */}
            <TextInput source="adresse" label="Adresse"/>
            <TextInput source="code_postal" label="Code Postal"/>
            <TextInput source="site_web" label="Site Web"/>      
            <TextInput source="social" label="Social"/>         
        </SimpleForm>
    </Create>
);