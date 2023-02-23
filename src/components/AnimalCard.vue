<template>
        <div
        class="w-[80%] mt-2 mx-8 sm:flex justify-between py-2  bg-white/30 shadow-sm shadow-primary  sm:shadow-sm sm:shadow-black-500/40 hover:sm:shadow-md hover:sm:shadow-primary"
      >
        <div class="sm:flex sm:items-center sm:space-x-4 px-12">
          <div class=" sm:flex sm:flex-col my-16 ">
            <animal-input v-if="isEditMode" @save="isEditMode = false " :current_animal="animal" :index="index" />
            <animal-info v-else :animal="animal" @edit="isEditMode = true" />
          </div>
        </div>
      </div>

</template>

<script>
import AnimalInput from './AnimalInput'
import AnimalInfo from './AnimalInfo'

export default {
  components: { AnimalInfo, AnimalInput },
  props: {
    animal: {
      required: true
    },
    index: {
      required: true
    }
  },
  data() {
    return {
      isEditMode: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.animal-card {
  border: 1px solid lightgray;
  border-radius: 4px;
  margin: 12px;
  padding: 24px;
  width: 65ch;
}
</style>