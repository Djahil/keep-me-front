import React, {Component} from 'react';
import './EmployeeList.scss';

import TableHeader from "./table-header/TableHeader";
import TableBody from "./table-body/TableBody";

import mock from "./employees.mock";

class EmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: mock};
    }

    render() {
        return (
            <div className="container mt-lg-5">
                <div className=" admin-projets">
                    <table id=" table-xs" className=" table table-bordered table-hover table-xs">
                        <TableHeader onCreate=""/>
                        <TableBody onEdit={this.handleEdit}
                                   onShare={this.handleShare}
                                   onDelete={this.handleDelete}
                                   employees={this.state.employees}/>
                    </table>
                </div>
            </div>
        );
    };

    handleDelete = (employeeId) => {
        let employees = this.state.employees.filter(index => index.id !== employeeId);
        this.setState({employees});
    };

    handleEdit = (employeeId) => {
        console.log('Editer l\'employee', employeeId);
    };

    handleShare = (employeeId) => {
        console.log('Partager l\'employee ', employeeId);
    };
}

export default EmployeeList;
