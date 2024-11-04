<script setup lang="ts">
import { useDate } from '@/stores/date'
import { useString } from '@/stores/string'

export interface ExperienceType {
  id: number
  name: string
  contract: string
  company: string
  location: string
  status: string
  fromDate: string
  toDate: string
  work: boolean
  current: boolean
  display: boolean
}

defineProps<{
  experience: ExperienceType
}>()

const { getYear } = useDate()
const { uppercaseFirstLetter } = useString()
</script>

<template>
  <div
    class="rounded-xl backdrop-blur-md saturate-130 transition-all duration-300 ease-in-out bg-border-secondary hover:bg-border-primary dark:shadow-sm-green dark:hover:shadow-md-green"
  >
    <div class="flex flex-col justify-center gap-1 p-6">
      <p class="text-base">
        {{ experience.fromDate ? getYear(experience.fromDate) + ' - ' : null }}
        {{ experience.toDate ? getYear(experience.toDate) : 'Actuellement' }}
      </p>

      <h2>{{ experience.name }}</h2>

      <p class="text-base">
        <template v-if="experience.contract && experience.company">
          <span
            >{{ uppercaseFirstLetter(experience.contract) }} chez
            {{ experience.company }}
            <template v-if="experience.location">| </template></span
          >
        </template>

        <span v-if="experience.location">{{ experience.location }}</span>
      </p>

<!--      <p class="text-base font-light">{{ experience.status }}</p>-->
    </div>
  </div>
</template>

<style scoped></style>
