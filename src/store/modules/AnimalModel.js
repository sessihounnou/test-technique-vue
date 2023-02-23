import uuidv4 from 'uuid/v4';

export default class AnimalModel {
    constructor({name, species, age ,lastAppointement}) {
        this.id = uuidv4().substr(0, 8);
        this.name = name;
        this.species = species;
        this.lastAppointement = lastAppointement
        this.age = age;

        // TODO: ajouter `this.lastAppointement` de type AppointementModel
    }
}