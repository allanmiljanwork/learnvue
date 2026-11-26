<script setup>
import Filters from '@/components/Filters.vue';
import Pagination from '@/components/Pagination.vue';
import { onMounted, ref } from 'vue';
import { getCharacters } from '@/api/CharactersStore';

const characters = ref([])

async function loadCharacters() {
  try {
    characters.value = await getCharacters()
  } catch (error) {
    console.error(error)
  }
}

onMounted(loadCharacters)

</script>

<template>
  
  <Filters class="filters" />

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
  
  <Pagination class="pagination" />

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
