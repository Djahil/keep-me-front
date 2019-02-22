/**
 * Created by adminHOC on 19/02/2019.
 */
import  Faker from 'faker';


const MapPropsToValues = ({
    objet: Faker.lorem.words(),
    prenom: Faker.name.firstName(),
    nom: Faker.name.lastName(),
    email: Faker.internet.email(),
    entreprise: Faker.random.word(),
    message: Faker.lorem.sentences(),
    //
    // objet: '',
    // prenom: '',
    // nom: '',
    // email: '',
    // entreprise: '',
    // message: '',
});
export default MapPropsToValues;

