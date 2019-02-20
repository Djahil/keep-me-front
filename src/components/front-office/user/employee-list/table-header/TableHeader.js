import React from 'react';
import './TableHeader.scss'

const TableHeader = () => (
    <React.Fragment>
        <thead>
        <tr>
            <th className=" text-center" width="15%">Nom</th>
            <th className="text-center" width="15%">Prenom</th>
            <th className="text-center" width="30%">Email</th>
            <th className="text-center" width="15%">Telephone</th>
            <th className="text-center" width="25%">Actions</th>
        </tr>
        </thead>
    </React.Fragment>
);

export default TableHeader;
