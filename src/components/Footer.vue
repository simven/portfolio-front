<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => {
  const date = new Date()
  return date.getFullYear()
})
</script>

<template>
  <footer class="flex justify-center max-w-screen-2xl mx-auto pt-24 pb-10">
    <div>&copy; {{ currentYear }} Simon Vennat</div>
  </footer>
</template>

<style scoped></style>
