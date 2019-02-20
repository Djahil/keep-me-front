import React, { Component } from 'react';
import './User.scss';
import * as userService from '../../front-office/services/UserService';

import EmployeeList from "./employee-list/EmployeeList";
import EmployeeSearch from './employee-header/EmployeeSearch';
import EmployeeCreate from './employee-header/EmployeeCreate';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: userService.getEmployees(),
            searchInput: ''
        };
    }

    handleDelete = employeeId => {
        this.setState({
            employees: userService.deleteEmployee(this.state.employees, employeeId)
        });
    };
    handleEdit = employeeId => { userService.editEmployee(employeeId); }
    handleShare = employeeId => { userService.shareEmployee(employeeId); }

    onSearchChange = e => {
        this.setState({
            searchInput: e.target.value
        })
    };

    render() {
        return (
            <div className="container pt-5">
                <div>
                    <h1 className="title">Mes cartes de visites H1</h1>
                    <EmployeeSearch input={this.state.searchInput} onChange={this.onSearchChange} />
                    <EmployeeCreate />
                </div>
                <EmployeeList
                    employees={this.state.employees.filter(emp =>
                        emp.nom.includes(this.state.searchInput) ||
                        emp.prenom.includes(this.state.searchInput)
                    )}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    handleShare={this.handleShare} />
            </div>
        );
    }
}

export default User;
