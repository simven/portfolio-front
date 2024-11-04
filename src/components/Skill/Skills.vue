<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Skill from '@/components/Skill/Skill.vue'

const skillTypes = ref(null);

onMounted(() => {
  axios.get('http://localhost:8080/api/skill-type')
    .then(response => {
      console.log(response.data);
      skillTypes.value = response.data.map(st => ({
        ...st,
        skills: st.skills.filter(s => s.display)
      }));
    })
    .catch(error => {
      console.error(error);
    });
})
</script>

<template>
  <div id="skills" class="pt-20">
    <h1 class="title flex justify-center">Mes skills</h1>

    <div class="skill-type-list grid gap-6 md:gap-10 mt-14 max-w-screen-2xl mx-auto">
      <template v-for="skillType in skillTypes" :key="skillType.id">
        <Skill :skillType="skillType" v-if="skillType.skills.length > 0" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.skill-type-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 768px) {
  .skill-type-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
