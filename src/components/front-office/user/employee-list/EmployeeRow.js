import React from 'react';

import Button from 'react-bootstrap/Button';
import { FaEdit, FaShare, FaTrashAlt } from "react-icons/fa";

const EmployeeRow = ({ employee, onEdit, onShare, onDelete }) => (
    <tr className="cursor-pointer">
        <td className="text-center" width="15%">
            <span>{employee.nom}</span>
        </td>
        <td className="text-center" width="15%">
            <span>{employee.prenom}</span>
        </td>
        <td className="text-center" width="30%">
            <span>{employee.email}</span>
        </td>
        <td className="text-center" width="15%">
            <span>{employee.telephone}</span>
        </td>
        <td className="text-center" width="25%">
            <Button href={`user/update/${employee.id}`}
                    variant="warning"  className="btn mr-2">
                <FaEdit style={{color: 'white'}} className="fa-edit"/>
            </Button>

            <Button variant="success"  className="btn mr-2" href=""
                    onClick={() => onShare(employee.id)}>
                <FaShare style={{color: 'white'}} className="fa-share"/>
            </Button>

            <Button variant="danger"  className="btn mr-2"
                    onClick={() => onDelete(employee.id)}>
                <FaTrashAlt style={{color: 'white'}} className="fa-del"/>
            </Button>
        </td>
    </tr>
);

export default EmployeeRow;
