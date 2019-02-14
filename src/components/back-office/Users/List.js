import React from 'react';
import { List, Datagrid, TextField, email, ShowButton, EditButton } from 'react-admin';
// import { CustomPagination } from '../Pagination/CustomPagination';

export const UserList = (props) => (
    <List {...props} title="Users">
        <Datagrid>
            <TextField source="email" label="Email" validate={ email() } />
            <TextField  source="nom" label="Lastname"/>
            <TextField  source="prenom" label="Firstname"/>
            <TextField  source="nom_entreprise" label="Nom Entreprise"/>
            <TextField  source="adresse" label="Adresse"/>
            <TextField  source="code_postal" label="Code Postal"/>
            <TextField  source="site_web" label="Site Web"/>      
            <TextField  source="social" label="Social"/>      
            <ShowButton />
            <EditButton />   
        </Datagrid>
    </List>
);