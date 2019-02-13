import React from 'react';

const User = () => (
    <div>
        <h1>USER</h1>

        {/*/!*TITRE*!/*/}
        {/*<h1 className="with-border m-t-1 title">Mes cartes de visites*/}
            {/*/!*CREER UN NOUVEL EMPLOYEE*!/*/}
            {/*<span className="add" onClick="createEmployee()">*/}
                {/*<span className="font-icon font-icon-plus-1"></span> Ajouter une nouvelle carte*/}
            {/*</span>*/}
        {/*</h1>*/}

        {/*<!--RECHERCHE DES EMPLOYEE (BONUS) -->*/}
        {/*/!*<div className="form-group">*!/*/}
            {/*/!*<div className="form-control-wrapper form-control-icon-left">*!/*/}
                {/*/!*<input onKeyUp="searchAndSortEmployees($event)" type="text" class="form-control"*!/*/}
                       {/*/!*placeholder="Rechercher ... "/>*!/*/}
                {/*/!*<i className="font-icon font-icon-dots color-blue"></i>*!/*/}
            {/*/!*</div>*!/*/}
        {/*/!*</div>*!/*/}

        {/*<div className="admin-projets">*/}
            {/*<table id="table-xs" class="table table-bordered table-hover table-xs">*/}
                {/*/!*ENTETE DU TABLEAU*!/*/}
                {/*<thead>*/}
                {/*<tr>*/}
                    {/*<th class="text-center" width="15%">Nom</th>*/}
                    {/*<th class="text-center" width="15%">Prenom</th>*/}
                    {/*<th class="text-center" width="20%">Email</th>*/}
                    {/*<th class="text-center" width="20%">Telephone</th>*/}
                    {/*<th class="text-center" width="30%">Actions</th>*/}
                {/*</tr>*/}
                {/*</thead>*/}
                {/*/!*CORPS DU TABLEAU*!/*/}
                {/*<tbody>*/}
                {/*<tr className="cursor-pointer"> /!*For employee of employees*!/*/}
                    {/*<!--NOM -->*/}
                    {/*<td width="50%">*/}
                        {/*<span> {employee.firstname} </span>*/}
                    {/*</td>*/}
                    {/*<!--PRENOM -->*/}
                    {/*<td width="50%">*/}
                        {/*<span> {employee.lastname} </span>*/}
                    {/*</td>*/}
                    {/*<!--EMAIL -->*/}
                    {/*<td width="50%">*/}
                        {/*<span> {employee.email} </span>*/}
                    {/*</td>*/}
                    {/*<!--TELEPHONE -->*/}
                    {/*<td width="50%">*/}
                        {/*<span> {employee.phone} </span>*/}
                    {/*</td>*/}
                    {/*<!--ACTIONS-->*/}
                    {/*<td class="text-center" width="10%">*/}
                    {/*<span onClick="editEmployee(employee, i)"*/}
                          {/*class=" color-blue glyphicon glyphicon glyphicon-edit p-r-1">*/}
                    {/*</span>*/}
                        {/*<span onClick="shareEmployee(employee, i)"*/}
                              {/*class=" color-green glyphicon glyphicon-share-alt p-r-1">*/}
                    {/*</span>*/}
                        {/*<span onClick="deleteEmployee(employee.id, i)"*/}
                              {/*class=" color-red glyphicon glyphicon-trash p-r-1">*/}
                    {/*</span>*/}
                    {/*</td>*/}
                {/*</tr>*/}
                {/*</tbody>*/}
            {/*</table>*/}
        {/*</div>*/}
    </div>
);

export default User;
