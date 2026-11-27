<script setup>
const status = defineModel({type: String, default: ''})
</script>

<template>
  <section>
    <select v-model="status">
      <option value="">Any status</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  </section>
</template>

<style>
.filters {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}
</style>
