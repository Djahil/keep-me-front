import React from 'react';
import './EmployeeCreate.scss'
import {FaPlus} from "react-icons/fa";

const EmployeeCreate = () => (
    <div>
        {/*CREER UN NOUVEL EMPLOYEE*/}
        {/*<span className="add float-right fa-plus" onClick={createEmployee}>*/}
        <span className="add float-right fa-plus">
                <FaPlus/><span className=" pl-2">Nouvelle carte</span>
            </span>
    </div>
);

export default EmployeeCreate;
