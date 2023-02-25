/* eslint-disable no-console */
import AppointementModel from "./AppointementModel";
// initial state
const state = () => ({
    all: []
});

// getters
const getters = {
    getAllAppointement: state => state.all
}

// actions
const actions = {
    initializeAppointement ({ commit },id) {
        let id0=id[0].id
        let id1=id[1].id
        let id2=id[2].id
        let id3=id[3].id
        let id4=id[4].id
        commit('setAppointement', [
            new AppointementModel({animalsId : id0,rdvDate : '2023-02-21' , rdvType : 'Controle' }),
            new AppointementModel({animalsId : id1,rdvDate : '2023-02-21' , rdvType : 'Controle' }),
            new AppointementModel({animalsId : id2,rdvDate: '2023-02-21', rdvType : 'Blessure' }),
            new AppointementModel({animalsId : id3,rdvDate: '2023-02-21', rdvType : 'Vaccin' }),
            new AppointementModel({animalsId : id4,rdvDate :'2023-02-21' , rdvType : 'Blessure' }),
        ])
    },
    setAppointement ({ commit } , payload) {
        commit('setAppointement',payload)
    }
}
// mutations
const mutations = {
    setAppointement(state, setAppointement) {
        state.all.push(setAppointement)
      }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}