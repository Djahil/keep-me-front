import React from 'react';

const EmployeeSearch = ({ input, onChange }) => (
    <div>
        {/*RECHERCHE DES EMPLOYEE (BONUS)*/}
        <div className="form-group">
            <div className="form-control-wrapper form-control-icon-left">
                <input type="text" className="form-control" value={input} onChange={onChange}
                       placeholder="Rechercher ... "/>
            </div>
        </div>
    </div>
);

export default EmployeeSearch;
