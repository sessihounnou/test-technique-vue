/* eslint-disable no-console */
import AnimalModel from './AnimalModel';


// initial state
const state = () => ({
    all: []
});

// getters
const getters = {
    getAllAnimals: state => state.all
}

// actions
const actions = {
    initializeAnimals ({ commit }) {
        commit('setAnimals', [
            new AnimalModel({name: 'Pépéroni', species: 'Chat', age: 4}),
            new AnimalModel({name: 'Chisa', species: 'Lapin', age: 5}),
            new AnimalModel({name: 'Yuki', species: 'Chien', age: 1}),
            new AnimalModel({name: 'Miaoukai', species: 'Chat', age: 4}),
            new AnimalModel({name: 'Gnar', species: 'Chat', age: 2}),
        ])
    },
    setUniqueAnimals ({ commit } , payload) {
        commit('setUniqueAnimals',payload)
    }
}

// mutations
const mutations = {
    setAnimals (state, animals) {
        state.all = animals
    },
    setUniqueAnimals(state, uniqueAnimals) {
        console.log('uniqueAnimals');
        console.log(uniqueAnimals);
        console.log(uniqueAnimals[1].name);
        state.all[uniqueAnimals[0]].name= uniqueAnimals[1].name
        state.all[uniqueAnimals[0]].species = uniqueAnimals[1].species
        state.all[uniqueAnimals[0]].age =  uniqueAnimals[1].age
        // state.all = uniqueAnimals[1];
      }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}