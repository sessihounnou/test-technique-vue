
export default class AppointementModel {
    constructor({animalsId,rdvDate, rdvType}) {
        this.id = animalsId ;
        this.rdvDate = rdvDate;
        this.rdvtype = rdvType;
        // TODO: ajouter `this.lastAppointement` de type AppointementModel
    }
}