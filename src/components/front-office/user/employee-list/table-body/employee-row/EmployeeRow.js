import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
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
                        <Button href={`user/update/${this.props.employee.id}`}
                                variant="warning"  className="mr-2">
                            <FaEdit style={{color: 'white'}} className="fa-edit"/>
                        </Button>

                        <Button variant="success"  className="mr-2" href=""
                                onClick={() => this.props.onShare(this.props.employee.id)}>
                            <FaShare style={{color: 'white'}} className="fa-share"/>
                        </Button>

                        <Button variant="danger"  className="mr-2"
                                onClick={() => this.props.onDelete(this.props.employee.id)}>
                            <FaTrashAlt style={{color: 'white'}} className="fa-del"/>
                        </Button>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
};

export default EmployeeRow;
