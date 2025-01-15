<script setup>
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>
<template>
  <div class="container">
    <h2>Налаштування</h2>
    <label class="label" for="showAvatars">
      <input
        type="checkbox"
        id="showAvatars"
        class="switch has-mr-2"
        :checked="settingsStore.getShowAvatars()"
        @change="settingsStore.setShowAvatars($event.target.checked)"
      />
      Показувати аватари користувачів (працює не правильно)
    </label>
  </div>
</template>
