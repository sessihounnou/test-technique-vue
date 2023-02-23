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
    initializeAppointement ({ commit }) {
        commit('setAnimals', [
            new AppointementModel({animalsId : 1,rdvDate : '2023-02-21' , rdvType : 'Controle' }),
            new AppointementModel({animalsId : 2,rdvDate : '2023-02-21' , rdvType : 'Controle' }),
            new AppointementModel({animalsId : 3,rdvDate: '2023-02-21', rdvType : 'Blessure' }),
            new AppointementModel({animalsId : 4,rdvDate: '2023-02-21', rdvType : 'Vaccin' }),
            new AppointementModel({animalsId : 5,rdvDate :'2023-02-21' , rdvType : 'Blessure' }),
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