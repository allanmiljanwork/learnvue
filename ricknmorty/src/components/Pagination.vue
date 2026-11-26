<script setup>
import { ref } from 'vue'

defineProps({
  totalCharacters: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['change'])
const currentPage = ref(1)

function onClickHandler(page) {
  emit('change', page)
}
</script>

<template>
  <vue-awesome-paginate
    :total-items="totalCharacters"
    :items-per-page="20"
    :max-pages-shown="5"
    v-model="currentPage"
    @click="onClickHandler"
  />
</template>

<style>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}
</style>
