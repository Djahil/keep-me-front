import React from 'react';
import { List, Datagrid, TextField, ShowButton, EditButton, Filter, ReferenceInput, AutocompleteInput, SelectInput, TextInput } from 'react-admin';
// import { CustomPagination } from '../Pagination/CustomPagination';

const autocomplete = [
    {
        firstName: 'prenom',
        lastName: 'nom'
    }
];

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="nom" alwaysOn />
        <ReferenceInput label="User" source="id" reference="users" allowEmpty>
            {/* <AutocompleteInput source="user" choices={autocomplete.firstName + autocomplete.lastName} /> */}
            <SelectInput optionText="nom" />
        </ReferenceInput>
    </Filter>
);

export const UserList = (props) => (
    <List {...props} title="Users" filters={ <UserFilter /> }>
        <Datagrid>
            <TextField source="nom" label="Nom"/>
            <TextField source="prenom" label="Prénom"/>
            <TextField source="nomEntreprise" label="Nom Entreprise"/>
            <TextField source="email" label="Email" /> 
            <TextField source="siteWeb" label="Site Web" /> 
            <ShowButton />
            <EditButton />   
        </Datagrid>
    </List>
);