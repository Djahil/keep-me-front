import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
import { hydraClient, fetchHydra as baseFetchHydra  } from '@api-platform/admin';
import  authProvider from './authProvider';
import { Redirect } from 'react-router-dom';
import { UserShow } from './Users/Show';
import { UserEdit } from './Users/Edit';
import { UserCreate } from './Users/Create';
import { UserList } from './Users/List';
import { EmployeeShow } from './Employees/Show';
import { EmployeeEdit } from './Employees/Edit'
import { EmployeeCreate } from './Employees/Create';
import { EmployeeList } from './Employees/List';
import UserIcon from '@material-ui/icons/Book';
import EmployeeIcon from '@material-ui/icons/Group';
import Loader from './Loader/Loader';
import MyLayout from './Layout/MyLayout';
import Dashboard from './Dashboard/Dashboard';

const entrypoint = process.env.REACT_APP_API_URL;
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
                                render: () => <Redirect to={`/admin/login`}/>,
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
            console.log("error :", e);
        });
    }

    render() {
        if (null === this.state.api) return <Loader />;    
        return (
            <React.Fragment>
                    <Admin api={ this.state.api }
                        dashboard={ Dashboard }
                        apiDocumentationParser={ apiDocumentationParser }
                        dataProvider={ dataProvider(this.state.api) }     
                        authProvider={ authProvider }
                        appLayout={MyLayout}                                 
                    >    
                        <Resource name="users" list={ UserList } create={ UserCreate } show={ UserShow } edit={ UserEdit } title="Users" icon={UserIcon} />
                        <Resource name="employees" list={ EmployeeList } create={ EmployeeCreate } show={ EmployeeShow } edit={ EmployeeEdit } title="Employees" icon={EmployeeIcon}/> 
                    </Admin>
                    
            </React.Fragment>     
        )
    }
}