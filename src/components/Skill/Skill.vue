<script setup lang="ts">
export interface SkillTypeType {
  id: number
  name: string
  position: number
  skills: SkillType[]
}

export interface SkillType {
  id: number
  name: string
  description: string
  masteryPercent: number
  iconUrl: string
  display: boolean
}

defineProps<{
  skillType: SkillTypeType
}>()
</script>

<template>
  <div class="bg-border-secondary rounded-xl backdrop-blur-md saturate-130 transition-all duration-300 ease-in-out col-span-4 md:col-span-2 hover:saturate-120 hover:-translate-y-1 dark:shadow-sm-green dark:hover:shadow-md-green">
    <div class="flex flex-1 flex-col p-6 md:p-10 gap-4 h-full">
      <div class="font-bold text-xl">{{skillType.name}}</div>

      <div class="skill-list grid gap-2 w-full">
        <template v-for="skill in skillType.skills" :key="skill.id">
          <div class="flex flex-row">

            <span class="flex items-center mr-3" v-if="skill.iconUrl">
              <img class="transition-all duration-200 ease-in-out" :src="skill.iconUrl" alt="" width="25" height="25" loading="lazy">
            </span>

            <p class="text-text-secondary text-base px-3 py-2 bg-beige-400 dark:bg-green-800 rounded-md" :title="skill.masteryPercent + '%'">{{ skill.name }}</p>

          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-list {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
</style>
