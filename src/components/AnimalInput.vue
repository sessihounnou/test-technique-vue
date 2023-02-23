<template>
  <!-- <div class="animal-input"> -->
    <!-- <p class="instructions">
      // TODO modifer ce composant pour permettre de modifier l'animal et de le
      sauvegarder via le store      
    </p> -->
    <!-- <ul class="instructions text-gray-800"> -->
          <div class="relative py-3 sm:w-96 mx-auto text-center">
            <span class="text-2xl font-light ">Modifier les informations de l'animal</span>
            <div class="mt-4 bg-white shadow-md rounded-lg text-left">
              <div class="h-2 bg-primary rounded-t-md"></div>
              <div class="px-8 py-6 ">
                <label class="block font-semibold pt-2"> Nom de l'animal </label>
                <input type="text" id="name" placeholder="Nom de l'animal" :value="current_animal.name" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                <label class="block mt-3 font-semibold"> Age de l'animal </label>
                <input type="number" id="age" placeholder="l'age de l'animal" :value="current_animal.age" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                <label class="block font-semibold py-2 "> Espece de l'animal</label>
                <select  id="species" :value="current_animal.species" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                  <option selected>Selectionnez une espece</option>
                  <option value="Chat">Chat</option>
                  <option value="Chien">Chien</option>
                  <option value="Lapin">Lapin</option>
                </select>
                <label class="block font-semibold pt-2">  Dernier rendez-vous chez le vétérinaire </label>

                <div class="flex justify-between">
                  <div>
                    <input type="date" id="date" class="mt-2 border w-full px-3 py-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                  </div>
                  <div>
                    <select  id="rdvtype" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                      <option selected>Type de rdv</option>
                      <option value="controle" selected>Contrôle</option>
                      <option value="blessure">Blessure</option>
                      <option value="vaccin">Vaccin</option>
                    </select> 
                  </div>
                </div>
                <div class="flex justify-center items-baseline mt-4">
                  <button @click="onSave" class="mt-4 bg-primary text-white py-2 px-6 rounded-md hover:bg-primary ">Sauvegarder</button>
                </div>
              </div>
            
          </div>
        </div>

        <!-- <li>Nom de l'animal: string</li>
        <li>Age de l'animal: integer > 0</li>
        <li>Espèce de l'animal: string parmi {Chat, Chien, Lapin}</li>
        <li>
            Dernier rdv chez le vétérinaire (// TODO Créer un modèle AppointementModel dans le store)
            <ul>
                <li>
                    Date du rdv: Date
                </li>
                <li>
                    Type de rdv: string parmi {contrôle, blessure, vaccin}
                </li>
            </ul>
        </li>
    </ul>
    <br />
    <button @click="onSave">Sauvegarder</button> -->
  <!-- </div> -->
</template>

<script>
// import appointement from '../store/modules/appointement'

// import AnimalModel from '../store/modules/AnimalModel';
export default {
  data() {
    return {
      animal : {} ,
      name : this.current_animal.name,
      age : this.current_animal.age,
      species : this.current_animal.species,
      // rdvdate : "",
      // rdvtype : "",
    }
  },
  props: {
    current_animal: {
      required: true
    },
    index:{
      required: true
    }
  },
  methods: {

    onSave() {
      this.name =document.getElementById('name').value ? document.getElementById('name').value : this.name
      this.age =document.getElementById('age').value  ? document.getElementById('age').value  : this.age
      this.species =document.getElementById('species').value ? document.getElementById('species').value : this.species
      this.rdvdate =document.getElementById('date').value ? document.getElementById('date').value : this.rdvdate
      this.rdvtype  =document.getElementById('rdvtype' ).value ?  document.getElementById('rdvtype' ).value : this.rdvtype 

      this.animal = {
      name : this.name, 
      age : this.age,
      }
      // this.appointement= {
      //   species : this.species,
      //   rdvdate : this.rdvdate,
      //   rdvtype : this.rdvtype ,
      // }
      let animals = [];
      // eslint-disable-next-line no-console
      console.log(this.index)
      animals.push(this.index)
      animals.push(this.animal)
      // eslint-disable-next-line no-console
      console.log(this.animal);
      this.$store.dispatch('animals/setUniqueAnimals', animals )
      // this.$store.dispatch('appointement/initializeAppointement', appointement )
      // eslint-disable-next-line no-console
      console.log(this.animal);
      this.$emit('save')
      // this.$store.dispatch(
      //   'setUniqueAnimals',this.animal
      // )
    }
  }
}
</script>

<style>
.animal-input {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  text-align: left;
}
</style>