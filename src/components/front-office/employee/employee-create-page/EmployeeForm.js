import React from 'react';
import Input from '../../../common/input'
import Button from 'react-bootstrap/Button';

// Le markup de notre formulaire
// Reçoit le handler de changement et de soumission
// ainsi que les datas et les erreurs
// Les datas et erreurs seront gérées à un niveau supérieur dans un état
// et transmises en tant que propriétés pour assurer la mise à jour du formulaire à chaque mise à jour de l'état
const EmployeeForm = ({ handleSubmit, handleChange, data, errors }) => (
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6">
                <Input type="text"
                    name={'nom'}
                    value={data['nom']}
                    label={'Nom'}
                    onChange={handleChange}
                    error={errors['nom']}
                />
            </div>
            <div className="col-md-6">
                <Input type="text"
                    name={'prenom'}
                    value={data['prenom']}
                    label={'Prénom'}
                    onChange={handleChange}
                    error={errors['prenom']}
                />
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <Input type="email"
                    name={'email'}
                    value={data['email']}
                    label={'Email'}
                    onChange={handleChange}
                    error={errors['email']}
                />
            </div>
            <div className="col-md-6">
                <Input type="text"
                    name={'telephone'}
                    value={data['telephone']}
                    label={'Téléphone'}
                    onChange={handleChange}
                    error={errors['telephone']}
                />
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <Input type="text"
                    name={'poste'}
                    value={data['poste']}
                    label={'Poste occupé'}
                    onChange={handleChange}
                    error={errors['poste']}
                />
            </div>
            <div className="col-md-6">
                <Input type="text"
                    name={'entreprise'}
                    value={data['entreprise']}
                    label={'Entreprise'}
                    onChange={handleChange}
                    error={errors['entreprise']}
                />
            </div>
        </div>

        <div className="row d-flex justify-content-end">
            <Button disabled={Object.entries(errors).length > 0} // block submit button
                variant="success"
                className="btn-alert ml-4"
                type="submit">
                <span style={{ color: "white" }}>
                    Enregistrer
            </span>
            </Button>
        </div>
    </form>
);

export default EmployeeForm;