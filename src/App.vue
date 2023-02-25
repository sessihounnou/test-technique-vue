<template>
  <div id="app">
    <h1>Mon animalerie</h1>
    <AnimalList />
  </div>
</template>

<script>
import AnimalList from './components/AnimalList.vue'

export default {
  name: 'app',
  components: {
    AnimalList
  },

  created() {

    // eslint-disable-next-line no-console
    this.$store.dispatch('animals/initializeAnimals')
  .then(() => {

    const animal_id= this.$store.getters['animals/getAllAnimals']
    
    this.$store.dispatch('appointement/initializeAppointement',animal_id)


    
  })
  } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.instructions {
  color:  rgb(55 65 81);
}
</style>
