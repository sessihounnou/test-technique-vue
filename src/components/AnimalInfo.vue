<template>
  <div class="animal-info">
    <b>{{ animal.name }}</b>
    <span><u>Espèce</u>: {{ animal.species }}</span>
    <span><u>Age</u>: {{ animal.age }}</span>
    <br />
    <h2 class="mb-2 font-bold">Rendez-vous vétérinaire</h2>
    <p class="instructions">
      <!-- // TODO Ajouter les informations du dernier RDV chez le vétérinaire via un
      modèle AppointementModel dans le store -->
    <span><u>Dernier Rdv </u>: {{ animal.lastAppointement }}</span>
    </p>
    <ul class="instructions">
      <li>Date du rdv: {{  getApointement(index)}}</li>
      <li>Type de rdv: {{  getApointement(index)}}</li>
    </ul>
    <br />
    <button
        type="button"
        @click="onEdit"
        class="border border-primary bg-primary text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      >Modifier</button>
  </div>
</template>

<script>
export default {
  props: {
    animal: {
      required: true
    },
    appointement: {
      required: true
    },
    index: {
      required: true
    },
  },
  commit:{
    
  },
  methods: {
    getApointement(index){
      let my_index = index
      const apointement = this.appointement[my_index].id
      return apointement
    },
    onEdit() {
      this.$emit('edit');
    },
  }
}
</script>

<style scoped>
.animal-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
</style>