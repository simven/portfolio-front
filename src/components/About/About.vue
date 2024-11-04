<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Experience, { type ExperienceType } from '@/components/About/Experience.vue'

export interface HobbyType {
  id: number
  name: string
  icon: string
  display: boolean
}

const hobbies = ref<HobbyType[]|null>(null);
const experiences = ref<ExperienceType[]|null>(null);
const currentExperience = ref<ExperienceType|null>(null);

onMounted(() => {
  axios.get(import.meta.env.VITE_API_BASE_URL + '/hobby')
    .then(response => {
      hobbies.value = response.data;
    })
    .catch(error => {
      console.error(error);
    });

  axios.get(import.meta.env.VITE_API_BASE_URL + '/experience')
    .then(response => {
      experiences.value = response.data.toSorted((a: ExperienceType, b: ExperienceType) => {
        const dateA = a.toDate || a.fromDate;
        const dateB = b.toDate || b.fromDate;

        return new Date(dateB).getTime() - new Date(dateA).getTime();
      });

      currentExperience.value = response.data.find((e: ExperienceType) => e.current);
    })
    .catch(error => {
      console.error(error);
    });
})
</script>

<template>
  <div id="about" class="pt-20">
    <h1 class="title flex justify-center">À propos de moi</h1>
    <div class="flex justify-center text-text-secondary">
      <template v-for="hobby in hobbies" :key="hobby.id">
        <i class="bx bx-md px-2 transition-all duration-300 ease-in-out hover:text-text-primary" :class="hobby.icon" :title="hobby.name"></i>
      </template>
    </div>

    <div class="about-list grid gap-6 md:gap-10 mt-14 max-w-screen-2xl mx-auto">
      <div>
        <p class="mb-7">
          Je m'appelle Simon et je suis développeur fullstack.
          J'ai eu l'occasion de travailler sur des projets variés alliant le développement front-end et back-end.
        </p>
        <p class="mb-7">
          Ces projets m'ont permis de développer mes compétences en gestion de projet dans le cadre de la méthode agile.
        </p>

        <template v-if="currentExperience">
          <p v-if="currentExperience.work">Aujourd'hui, j'occupe le poste de {{ currentExperience.name }} <template v-if="currentExperience.contract">en {{ currentExperience.contract }}</template> <template v-if="currentExperience.company">chez {{ currentExperience.company }}</template>.</p>
          <p v-if="!currentExperience.work">Aujourd'hui, je suis une formation de {{ currentExperience.name }} à {{ currentExperience.location }} <template v-if="currentExperience.contract">en {{ currentExperience.contract }}<template v-if="currentExperience.company"> avec {{ currentExperience.company }}</template></template>.</p>
        </template>
      </div>

      <div class="flex flex-col gap-4">
        <template v-for="experience in experiences" :key="experience.id">
          <Experience :experience="experience" v-if="experience.display" />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-list {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
@media (min-width: 768px) {
  .about-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
