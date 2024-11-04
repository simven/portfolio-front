<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Project, { type ProjectType } from '@/components/Project/Project.vue'
import { useDate } from '@/stores/date'
import Modal from '@/components/Modal.vue'
import TimeAgo from 'javascript-time-ago'
import fr from 'javascript-time-ago/locale/fr'

const projects = ref<ProjectType[]|null>(null);
const showModal = ref<boolean>(false);
const selectedProject = ref<ProjectType|null>(null);
const { getDayMonthYear } = useDate();

TimeAgo.addDefaultLocale(fr)
const timeAgo = new TimeAgo('fr-FR')

onMounted(() => {
  axios.get(import.meta.env.VITE_API_BASE_URL + '/project')
    .then(response => {
      projects.value = response.data.filter((p: ProjectType) => p.display);
    })
    .catch(error => {
      console.error(error);
    });
})


function openModal(project: ProjectType)
{
  document.addEventListener('keydown', handleEscape);
  selectedProject.value = project;
  showModal.value = true;
}

function closeModal()
{
  document.removeEventListener('keydown', handleEscape);
  showModal.value = false;
}

function handleEscape(event: KeyboardEvent)
{
  if (event.key === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', handleEscape);
  }
}
</script>

<template>
  <div id="projects" class="pt-20">
    <h1 class="title flex justify-center">Mes projets</h1>

    <div
      class="project-list grid gap-6 md:gap-10 mt-14 max-w-screen-2xl mx-auto"
    >
      <Project
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @openModal="openModal"
      />
    </div>

    <!-- Modal -->
    <Modal v-if="selectedProject" :show="showModal" @close="closeModal">
      <template #title>{{ selectedProject.name }}</template>

      <template #date>
        <time
          v-if="selectedProject.toDate"
          :datetime="selectedProject.toDate"
          :title="
            (selectedProject.fromDate
              ? getDayMonthYear(selectedProject.fromDate) + ' au '
              : '') + getDayMonthYear(selectedProject.toDate)
          "
        >
          {{ timeAgo.format(new Date(selectedProject.toDate)) }}
        </time>

        <time
          v-else-if="selectedProject.fromDate"
          :datetime="selectedProject.fromDate"
        >
          Depuis le {{ getDayMonthYear(selectedProject.fromDate) }}
        </time>
      </template>

      <template #img>
        <img
          v-if="selectedProject.imageUrl"
          :src="selectedProject.imageUrl"
          alt=""
          class="rounded-xl w-full object-cover"
          loading="lazy"
        />
      </template>

      <template #content>{{ selectedProject.description }}</template>

      <template #links>
        <div
          v-if="selectedProject.repoUrl || selectedProject.appUrl"
          class="flex flex-row justify-center gap-5"
        >
          <a
            v-if="selectedProject.repoUrl"
            class="btn"
            :href="selectedProject.repoUrl"
            title="Voir sur Github"
            target="_blank"
            ><i class="bx bxl-github bx-md"></i
          ></a>
          <a
            v-if="selectedProject.appUrl"
            class="btn"
            :href="selectedProject.appUrl"
            title="Ouvrir le projet"
            target="_blank"
            ><i class="bx bx-joystick bx-md"></i
          ></a>
        </div>
      </template>
    </Modal>
  </div>
</template>

<style scoped>
.project-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 768px) {
  .project-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
@media (min-width: 1536px) {
  .project-list {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

.btn {
  @apply flex items-center justify-center rounded-xl bg-opaque hover:bg-border-primary w-max p-3;
}
</style>
