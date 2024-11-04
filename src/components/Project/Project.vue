<script setup lang="ts">

import type { Skill } from '@/components/Skill/Skill.vue'

export interface Project {
  id: number;
  name: string;
  description: string;
  descriptionShort: string;
  projectType: ProjectType;
  appUrl: string;
  repoUrl: string;
  iconUrl: string;
  imageUrl: string;
  fromDate: string;
  toDate: string;
  skills: Skill[];
  display: boolean;
}
interface ProjectType {
  id: number;
  name: string;
}

const props = defineProps<{
  project: Project;
}>();

const emit = defineEmits(['openModal']);

function openModal() {
  emit('openModal', props.project);
}
</script>

<template>
  <div @click="openModal()" class="bg-border-secondary hover:bg-border-primary rounded-xl backdrop-blur-md saturate-130 cursor-pointer transition-all duration-300 ease-in-out col-span-4 md:col-span-2 2xl:col-span-2 hover:saturate-120 hover:-translate-y-1 dark:shadow-sm-green dark:hover:shadow-md-green">
    <div class="flex justify-start items-start p-6 md:p-10 gap-3.5 h-full">
      <div class="flex flex-1 flex-col gap-4">
        <div class="font-bold text-xl">{{project.name}}</div>
        <p class="text-base">
          {{project.descriptionShort}}
        </p>
      </div>

      <div class="h-full flex items-center">
        <img class="transition-all duration-200 ease-in-out" :src="project.iconUrl" alt="" width="100" height="100" loading="lazy">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
