import React, {Component} from 'react';
import './EmployeeRow.scss';

import {FaEdit, FaShare, FaTrashAlt} from "react-icons/fa";

class EmployeeRow extends Component {

    render() {
        return (
            <React.Fragment>
                <tr className="cursor-pointer">
                    <td className="text-center" width="15%">
                                    <span>
                                        {this.props.employee.nom}
                                    </span>
                    </td>
                    <td className="text-center" width="15%">
                                    <span>
                                        {this.props.employee.prenom}
                                    </span>
                    </td>
                    <td className="text-center" width="30%">
                                    <span>
                                        {this.props.employee.email}
                                    </span>
                    </td>
                    <td className="text-center" width="15%">
                                    <span>
                                        {this.props.employee.telephone}
                                    </span>
                    </td>

                    <td className="text-center" width="25%">
                        <button className="btn btn-warning mr-2"
                                onClick={() => this.props.onEdit(this.props.employee.id)}>
                            <FaEdit style={{color: 'white'}} className="fa-edit"/>
                        </button>

                        <button className="btn btn-success mr-2"
                                onClick={() => this.props.onShare(this.props.employee.id)}>
                            <FaShare style={{color: 'white'}} className="fa-share"/>
                        </button>

                        <button className="btn btn-danger"
                                onClick={() => this.props.onDelete(this.props.employee.id)}>
                            <FaTrashAlt style={{color: 'white'}} className="fa-del"/>
                        </button>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
};

export default EmployeeRow;
