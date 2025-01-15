import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const theme = ref('light')

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  const showAvatars = ref(false)

  const toggleShowAvatars = () => {
    showAvatars.value = !showAvatars.value
  }

  return {
    theme,
    toggleTheme,
    showAvatars,
    toggleShowAvatars,
  }
})
