<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { computed } from 'vue'
import { useTheme } from '@/stores/theme'
import Contact from '@/components/Contact.vue'
import About from '@/components/About/About.vue'
import Hero from '@/components/Hero.vue'
import Projects from '@/components/Project/Projects.vue'
import Skills from '@/components/Skill/Skills.vue'
import { useRecaptchaProvider } from 'vue-recaptcha/head'

const storeTheme = useTheme()
const isDark = computed(() => storeTheme.isDark)

useRecaptchaProvider()
</script>

<template>
  <i  @click="storeTheme.switchTheme" class='bx bx-sm cursor-pointer fixed bottom-14 right-14 z-40 rounded-full bg-text-primary p-2 transition-all duration-300 ease-in-out' :class="isDark ? 'bxs-sun' : 'bxs-moon'"></i>

  <Header />

  <main class="px-8">
    <Hero />

    <About />
    <Projects />
    <Skills />
    <Contact />
  </main>

  <Footer />
</template>

<style scoped>
i {
  color: var(--color-primary);
}
</style>
