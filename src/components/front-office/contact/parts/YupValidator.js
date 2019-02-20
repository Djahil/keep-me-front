/**
 * Created by adminHOC on 19/02/2019.
 */
import * as Yup from "yup";

const YupValidator = () => Yup.object().shape({
    objet: Yup.string()
        .min(5, "Objet doit contenir au minimum 5 lettres")
        .required('L\'objet est requis'),
    prenom: Yup.string()
        .min(3, "Objet doit contenir au minimum 3 lettres")
        .required('Le prénom est requis'),
    nom: Yup.string()
        .min(3, "Objet doit contenir au minimum 3 lettres")
        .required('Le nom est requis'),
    email: Yup.string()
        .email('Email invalid')
        .required('l\'Email est requies!'),
    entreprise: Yup.string()
        .min(3, "Objet doit contenir au minimum 3 lettres")
        .required('La firme est requis'),
    message: Yup.string()
        .min(15, "Objet doit contenir au minimum 15 lettres")
        .required('Le message est requis'),
});

export default YupValidator;