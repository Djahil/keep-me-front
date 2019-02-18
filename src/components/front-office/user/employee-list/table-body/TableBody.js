import React from 'react';
import './TableBody.scss'
import EmployeeRow from "./employee-row/EmployeeRow";

const TableBody = props => (
    <React.Fragment>
        <tbody>
        {props.employees.map(employee =>
            (
                <EmployeeRow key={employee.id}
                             employee={employee}
                             onEdit={() => props.onEdit(employee.id)}
                             onShare={() => props.onShare(employee.id)}
                             onDelete={() => props.onDelete(employee.id)}
                />
            )
        )
        }
        </tbody>
    </React.Fragment>
);

export default TableBody;
