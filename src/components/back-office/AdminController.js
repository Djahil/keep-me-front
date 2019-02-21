import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
import { hydraClient, fetchHydra as baseFetchHydra  } from '@api-platform/admin';
import authProvider from './authProvider';
import { Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { UserShow } from './Users/Show';
import { UserEdit } from './Users/Edit';
import { UserCreate } from './Users/Create';
import { UserList } from './Users/List';
import { EmployeeShow } from './Employees/Show';
import { EmployeeEdit } from './Employees/Edit';
import { EmployeeCreate } from './Employees/Create';
import { EmployeeList } from './Employees/List';
import Loader from './Loader/Loader';
import UserIcon from '@material-ui/icons/Person';
import EmployeeIcon from '@material-ui/icons/Contacts';
// import CssBaseline from '@material-ui/core/CssBaseline';
import './AdminController.scss';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: purple,
        secondary: green,
      },
      status: {
        danger: 'orange',
    },
});

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
                <MuiThemeProvider theme={theme}>
            <Admin api={ this.state.api }
                   apiDocumentationParser={ apiDocumentationParser }
                   dataProvider= { dataProvider(this.state.api) }
                   theme={ theme }
                   authProvider={ authProvider }          
            >    
                  <Resource name="users" list={ UserList } create={ UserCreate } show={ UserShow } edit={ UserEdit } title="Users" icon={UserIcon} />
                  <Resource name="employees" list={ EmployeeList } create={ EmployeeCreate } show={ EmployeeShow } edit={ EmployeeEdit } title="Employees" icon={EmployeeIcon}/> 
            </Admin>
                </MuiThemeProvider>
            </React.Fragment>     
        )
    }
}
