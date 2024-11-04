<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useScrollStore } from '@/stores/scroll'

const scroll = useScrollStore();

onMounted(() => {
  window.addEventListener('scroll', scroll.handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scroll.handleScroll)
})
</script>

<template>
  <header class="fixed w-full top-0 right-0 left-0 px-4 z-50">
    <!-- NavBar -->
    <nav class="flex justify-center items-center mt-5 mx-auto text-base">
      <ul class="flex flex-wrap justify-center p-2.5 rounded-full transition-all duration-200 ease-linear bg-beige-300 dark:bg-green-750">
        <li>
          <a class="mx-3 px-2.5 py-1.5 md:px-5 text-text-secondary" href="#about">Profil</a>
        </li>
        <li>
          <a class="mx-3 px-2.5 py-1.5 md:px-5 text-text-secondary" href="#projects">Projets</a>
        </li>
        <li>
          <a class="mx-3 px-2.5 py-1.5 md:px-5 text-text-secondary" href="#skills">Skills</a>
        </li>
        <li>
          <a class="mx-3 px-2.5 py-1.5 md:px-5 text-text-secondary" href="#contact">Contact</a>
        </li>
        <li>
          <a class="mx-3 px-2.5 py-1.5 md:px-5 text-text-secondary" href="../../public/CV_Simon_Vennat.pdf" role="button" target="_blank">CV</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>
