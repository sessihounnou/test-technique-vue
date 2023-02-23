<template>
  <div class="animal-info">
    <b>{{ animal.name }}</b>
    <span><u>Espèce</u>: {{ animal.species }}</span>
    <span><u>Age</u>: {{ animal.age }}</span>

    <br />
    <p class="instructions">
      // TODO Ajouter les informations du dernier RDV chez le vétérinaire via un
      modèle AppointementModel dans le store
    </p>
    <ul class="instructions">
      <li>Date du rdv: Date</li>
      <li>Type de rdv: string parmi {contrôle, blessure, vaccin}</li>
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
    }
  },
  methods: {
    onEdit() {
      this.$emit('edit');
    }
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