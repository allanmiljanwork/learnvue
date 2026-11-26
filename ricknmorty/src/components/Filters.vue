<template>
  <section>
    <input type="search" placeholder="Search by name" />
    <select>
      <option value="">Any status</option>
      <option>Alive</option>
      <option>Dead</option>
      <option>Unknown</option>
    </select>
    <button>Filter</button>
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
