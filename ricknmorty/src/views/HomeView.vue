<script setup>
import Filters from '@/components/Filters.vue';
import Pagination from '@/components/Pagination.vue';

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
      <tr>
        <td>1</td>
        <td>Example</td>
        <td>Active</td>
        <td>
          <h1>img</h1>
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
