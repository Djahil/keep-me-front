import React, {Component} from 'react';
import './User.scss';

import EmployeeHeader from "./employee-header/EmployeeHeader";
import EmployeeList from "./employee-list/EmployeeList";

class User extends Component {
    render() {
        return (
            <div className="container pt-5">
                <EmployeeHeader />
                <EmployeeList />
            </div>
        );
    }
}

export default User;
