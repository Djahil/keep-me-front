import React from 'react';

import './EmployeeList.scss';
import {FaEdit, FaPlus, FaShare, FaTrashAlt} from "react-icons/fa";

const EmployeeList = props => {
    return (
        <div className="container mt-lg-5">
            {/*/!*TITRE*!/*/}
            <h1 className="title">Mes cartes de visites H1</h1>

            {/*RECHERCHE DES EMPLOYEE (BONUS)*/}
            <div className="form-group">
                <div className="form-control-wrapper form-control-icon-left">
                    <input type="text" className="form-control"
                           placeholder="Rechercher ... "/>
                </div>
            </div>

            {/*CREER UN NOUVEL EMPLOYEE*/}
            {/*<span className="add float-right fa-plus" onClick={createEmployee}>*/}
            <span className="add float-right fa-plus">
                <FaPlus/><span className=" pl-2">Nouvelle carte</span>
            </span>

            <div className=" admin-projets">
                <table id=" table-xs" className=" table table-bordered table-hover table-xs">
                    {/*ENTETE DU TABLEAU*/}
                    <thead>
                    <tr>
                        <th className=" text-center" width="15%">Nom</th>
                        <th className="text-center" width="15%">Prenom</th>
                        <th className="text-center" width="30%">Email</th>
                        <th className="text-center" width="15%">Telephone</th>
                        <th className="text-center" width="25%">Actions</th>
                    </tr>
                    </thead>

                    {/*CORPS DU TABLEAU*/}
                    <tbody>
                    {/*For employee of employees*/}
                    {props.employees.map(employee =>
                        (
                            <tr key={employee.id} className="cursor-pointer">
                                <td className="text-center" width="15%">
                                    <span>
                                        {employee.nom}
                                    </span>
                                </td>
                                <td className="text-center" width="15%">
                                    <span>
                                        {employee.prenom}
                                    </span>
                                </td>
                                <td className="text-center" width="30%">
                                    <span>
                                        {employee.email}
                                    </span>
                                </td>
                                <td className="text-center" width="15%">
                                    <span>
                                        {employee.telephone}
                                    </span>
                                </td>
                                {/*ACTIONS*/}
                                <td className="text-center" width="25%">
                                    {/*<span onClick={editEmployee(employee.slug)} className="pr-3">*/}
                                    <span className="pr-3">
                                        <FaEdit className="fa-edit"/>
                                    </span>
                                    {/*<span onClick={shareEmployee(employee.slug)} className="pr-3">*/}
                                    <span className="pr-3">
                                        <FaShare className="fa-share"/>
                                    </span>
                                    {/*<span onClick={deleteEmployee(employee.slug)} className="pr-3">*/}
                                    <span className="pr-3">
                                        <FaTrashAlt className="fa-del"/>
                                    </span>
                                </td>
                            </tr>
                        )
                    )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// METHODES
////////////////////////////////////////////////////////////////////////

export default EmployeeList;
