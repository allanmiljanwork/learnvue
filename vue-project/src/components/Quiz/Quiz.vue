<script setup>
import QuizHeader from '@/components/Quiz/QuizHeader.vue'
import QuizQuestion from '@/components/Quiz/QuizQuestion.vue'
import QuizFooter from '@/components/Quiz/QuizFooter.vue'
import { state } from '@/stores/QuizStore'
</script>

<template>
  <QuizHeader />
  <QuizQuestion />
  <QuizFooter />
</template>
