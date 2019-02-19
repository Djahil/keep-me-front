import React from 'react';

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
            <button className="btn btn-warning mr-2"
                onClick={() => onEdit(employee.id)}>
                <FaEdit style={{ color: 'white' }} className="fa-edit" />
            </button>

            <button className="btn btn-success mr-2"
                onClick={() => onShare(employee.id)}>
                <FaShare style={{ color: 'white' }} className="fa-share" />
            </button>

            <button className="btn btn-danger"
                onClick={() => onDelete(employee.id)}>
                <FaTrashAlt style={{ color: 'white' }} className="fa-del" />
            </button>
        </td>
    </tr>
);

export default EmployeeRow;
