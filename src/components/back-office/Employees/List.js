import React from 'react';
import { List, Datagrid, TextField, email } from 'react-admin';
// import { CustomPagination } from '../Pagination/CustomPagination';

export const EmployeeList = (props) => (
    <List {...props} title="Employees">
        <Datagrid>
            <TextField source="nom" label="Nom"/>
            <TextField source="prenom" label="Prénom"/>
            <TextField source="email" label="Email" validate={ email() } />
            <TextField source="poste" label="Poste"/>
            <TextField source="telephone" label="Telephone"/>         
        </Datagrid>
    </List>
);