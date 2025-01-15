import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const showAvatars = ref(false)

  const setShowAvatars = (value) => {
    showAvatars.value = value
    localStorage.setItem('showAvatars', JSON.stringify(value))
  }

  const getShowAvatars = () => {
    let data = localStorage.getItem('showAvatars')
    if (!data) {
      return false
    }
    return JSON.parse(data)
  }

  return {
    showAvatars,
    setShowAvatars,
    getShowAvatars,
  }
})
