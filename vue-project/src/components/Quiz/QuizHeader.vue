<script setup>
import { state } from '@/stores/QuizStore'
</script>
<template>
  <header>
    <h1>{{ state.name }}</h1>
    <p>Welcome to your first quiz. How do you think you'll do?</p>
  </header>
</template>
