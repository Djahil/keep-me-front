import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
import { hydraClient, fetchHydra as baseFetchHydra  } from '@api-platform/admin';
import authProvider from './authProvider';
import { Redirect } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
// import Layout from './Component/Layout';
import { UserShow } from './Users/Show';
import { UserEdit } from './Users/Edit';
import { UserCreate } from './Users/Create';
import { UserList } from './Users/List';
import { EmployeeShow } from './Employees/Show';
import { EmployeeEdit } from './Employees/Edit';
import { EmployeeCreate } from './Employees/Create';
import { EmployeeList } from './Employees/List';


const theme = createMuiTheme({
    palette: {
        type: 'light'
    },
});

const entrypoint = 'http://localhost:8000/api';
const fetchHeaders = {'Authorization': `Bearer ${window.localStorage.getItem('token')}`};
const fetchHydra = (url, options = {}) => baseFetchHydra(url, {
    ...options,
    headers: new Headers(fetchHeaders),
});
const dataProvider = api => hydraClient(api, fetchHydra);
const apiDocumentationParser = entrypoint => parseHydraDocumentation(entrypoint, { headers: new Headers(fetchHeaders) })
    .then(
        ({ api }) => ({api}),
        (result) => {
            switch (result.status) {
                case 401:
                    return Promise.resolve({
                        api: result.api,
                        customRoutes: [{
                            props: {
                                path: '/',
                                render: () => <Redirect to={`/Admin`}/>,
                            },
                        }],
                    });

                default:
                    return Promise.reject(result);
            }
        },
    );

export default class extends Component {
    state = { api: null };

    componentDidMount() {
        apiDocumentationParser(entrypoint).then(({ api }) => {
            this.setState({ api });
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        if (null === this.state.api) return <div>Loading...</div>;
        return (
            <Admin api={ this.state.api }
                   apiDocumentationParser={ apiDocumentationParser }
                   dataProvider= { dataProvider(this.state.api) }
                   theme={ theme }
                //    appLayout={ Layout }
                   authProvider={ authProvider }          
            >    
                <Resource name="Users" list={ UserList } create={ UserCreate } show={ UserShow } edit={ UserEdit } title="Users"/>           
                <Resource name="Employees" list={ EmployeeList } create={ EmployeeCreate } show={ EmployeeShow } edit={ EmployeeEdit } title="Employees"/>                
            </Admin>
        )
    }
}