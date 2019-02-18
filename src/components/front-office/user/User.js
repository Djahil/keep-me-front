import React, {Component} from 'react';
import './User.scss';

import mock from '../employee/employee-list/employees.mock'
import EmployeeList from '../employee/employee-list/EmployeeList'

class User extends Component {

    constructor(props) {
        super(props);
        this.state = { employees: mock };
    }

    render() {
        return (
            <div>
                <EmployeeList employees={this.state.employees}/>
            </div>
        );
    }
}

export default User;
