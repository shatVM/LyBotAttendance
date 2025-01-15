import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useClipboardStore = defineStore('clipboard', () => {
  const clipboard = ref('')

  const addToClipboard = (text) => {
    clipboard.value += '\n' + text
    navigator.clipboard.writeText(clipboard.value)
    showAlert()
  }

  const clearClipboard = () => {
    clipboard.value = ''
  }

  const clearAndAddToClipboard = (text) => {
    clearClipboard()
    addToClipboard(text)
    showAlert()
  }

  const copyClipboard = () => {
    navigator.clipboard.writeText(clipboard.value)
  }

  const showAlert = () => {
    const alertDiv = document.createElement('div')
    alertDiv.className = 'alert has-mb-none'
    alertDiv.id = 'copy'
    alertDiv.style.position = 'fixed'
    alertDiv.style.bottom = '10px'
    alertDiv.innerHTML = clipboard.value.replace(/\n/g, '<br>')
    console.log(alertDiv.innerHTML)
    document.body.appendChild(alertDiv)
    setTimeout(() => {
      document.body.removeChild(alertDiv)
    }, 3000)
  }
  return {
    clipboard,
    addToClipboard,
    clearClipboard,
    copyClipboard,
    clearAndAddToClipboard,
    showAlert,
  }
})
