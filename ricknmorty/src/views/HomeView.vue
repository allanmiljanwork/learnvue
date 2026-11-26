<script setup>
import Filters from '@/components/Filters.vue';
import Pagination from '@/components/Pagination.vue';
import { getCharacters, getCharacterCount } from '@/api/CharactersStore';
import { onMounted, ref } from 'vue';

const characters = ref([])
const totalCharacters = ref(0)

async function loadCharacters(page = 1){
  try {
  characters.value = await getCharacters(page) 
} catch (error) {
  console.log(error)
}
}

onMounted(async () => {
  try {
    totalCharacters.value = await getCharacterCount()
    await loadCharacters(1)
  } catch (error) {
    console.log(error)
  }
})


</script>

<template>
  
  <Filters class="filters" @filter="applyFilters" />

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Status</th>
        <th>IMG</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="character in characters" :key="character.id">
        <td>{{ character.id }}</td>
        <td>{{ character.name }}</td>
        <td>{{ character.status }}</td>
        <td>
          <img :src="character.image"/>
        </td>
      </tr>
    </tbody>
  </table>
  
  <div class="pagination">
  <Pagination 
  :total-characters="totalCharacters"
  @change="loadCharacters"
  />
  </div>

</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
  color: #333;
  font-weight: 600;
}

td {
  color: #333;
}

tbody tr:hover {
  background-color: #f9f9f9;
}

</style>