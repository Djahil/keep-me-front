import React from 'react';
import { List, Datagrid, TextField, ShowButton, EditButton, Filter, ReferenceInput, SelectInput, TextInput, Responsive, SimpleList } from 'react-admin';
// import { CustomPagination } from '../Pagination/CustomPagination';

// const choices = [
//     {
//         firstName: 'prenom',
//         lastName: 'nom'
//     }
// ];

// const optionRenderer = choice => `${choices.firstName} ${choices.lastName}`;

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="nom" alwaysOn />
        <ReferenceInput label="User" source="id" reference="users" allowEmpty>
            {/* <AutocompleteInput source="users" choices={choices} optionText={optionRenderer} /> */}
            <SelectInput optionText="nom" />
        </ReferenceInput>
    </Filter>
);

export const UserList = (props) => (
    <List {...props} title="Users" filters={ <UserFilter /> }>
        <Responsive 
            small = {
                <TextField label="ta chatte" />
                // <SimpleList
                    // reference="users"
                    // primaryText = {users => users.nom}
                    // <ShowButton />
                    // <EditButton /> 
                // />
            }
            medium = {
                <Datagrid>
                    <TextField source="nom" label="Nom"/>
                    <TextField source="prenom" label="Prénom"/>
                    <TextField source="nomEntreprise" label="Nom Entreprise"/>
                    <TextField source="email" label="Email" /> 
                    <TextField source="siteWeb" label="Site Web" /> 
                    <ShowButton />
                    <EditButton />   
                </Datagrid>
            }
        />
    </List>
);