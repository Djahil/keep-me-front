import React from 'react';

import EmployeeRow from './EmployeeRow';

const EmployeeList = ({ handleDelete, handleEdit, handleShare, employees }) => (
        <div className=" admin-projets">
            <table id=" table-xs" className=" table table-bordered table-hover table-xs">
                <thead>
                    <tr>
                        <th className=" text-center" width="15%">Nom</th>
                        <th className="text-center" width="15%">Prenom</th>
                        <th className="text-center" width="30%">Email</th>
                        <th className="text-center" width="15%">Telephone</th>
                        <th className="text-center" width="25%">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(e => (
                        <EmployeeRow key={e.id}
                            employee={e}
                            onEdit={handleEdit}
                            onShare={handleShare}
                            onDelete={handleDelete}
                        />
                    )
                    )}
                </tbody>
            </table>
    </div>
);

export default EmployeeList;
