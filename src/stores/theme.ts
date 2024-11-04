import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useTheme = defineStore('theme', () => {
  const isDark = ref(false);

  const switchTheme = () => {
    return isDark.value = !isDark.value;
  }

  watch(isDark, (newVal) => {
    if (newVal) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, { immediate: true })

  return {
    isDark: isDark,
    switchTheme
  }
}, {persist: true});
