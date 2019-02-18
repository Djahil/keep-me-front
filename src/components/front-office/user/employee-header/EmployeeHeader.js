import React from 'react';
import './EmployeeHeader.scss';
import EmployeeSearch from "./employee-search/EmployeeSearch";
import EmployeeCreate from "./employee-create/EmployeeCreate";

const EmployeeHeader = () => (
    <div>
        {/*/!*TITRE*!/*/}
        <h1 className="title">Mes cartes de visites H1</h1>
        <EmployeeSearch />
        <EmployeeCreate />
    </div>
);

export default EmployeeHeader;
