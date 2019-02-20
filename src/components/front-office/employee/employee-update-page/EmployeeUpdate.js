import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import './EmployeeUpdate.scss';

import mock from "../../user/employee-list/employees.mock";
import UpdateEmployeeForm from "./employee-update-form/UpdateEmployeeForm";

class EmployeeUpdate extends Component {

    constructor(props) {
        super(props);

        let employeeId = parseInt(this.props.match.params.id);
        let x = mock.find(i => i.id === employeeId);
        const employee = x !== undefined ? x : null; // Recup employee a partir de : id de l'url + list employees

        this.state = {employee};
    }

    render() {
        if (this.state.employee !== null) {
            return (
                <div className="container pt-5">
                    <UpdateEmployeeForm
                        employee={this.state.employee}
                        onSubmit={this.handleSubmit}
                    />
                    <Button variant="success" className="mr-2" href={'/user'}>
                        Enregister
                    </Button>
                </div>
            )
        }
        return (
            <div className="container mt-4">
                <h1>Pas d'utilisateur pour cet id</h1>
            </div>
        )
    }

    handleSubmit = employeeUpdated => {
        console.log('Nouvel employee : ', employeeUpdated)
    }
}

export default EmployeeUpdate;
