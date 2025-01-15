<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import { useAttendanceStore } from '../stores/attendanceData'

const route = useRoute()
const attendanceStore = useAttendanceStore()
const grades = computed(() => attendanceStore.getGrades())

const dynamicGrade = computed(() => route.params.grade || attendanceStore.getGrades()[0])
</script>
<template>
  <header class="tab-container is-flex has-direction-column-mobile has-bg-muted has-p-1">
    <RouterLink
      v-for="grade in grades"
      :key="grade"
      :to="`/grade/${grade}`"
      :id="grade"
      class="tab has-text-center has-h-8 navlink"
      :class="{
        active: dynamicGrade === grade && route.path !== '/settings',
        'has-bg-white': dynamicGrade === grade && route.path !== '/settings',
        'has-text-primary': dynamicGrade === grade && route.path !== '/settings',
      }"
      >{{ grade + '-ті класи' }}</RouterLink
    >
    <RouterLink
      to="/settings"
      class="tab has-text-center has-h-8 navlink settings-button"
      :class="{
        'has-bg-white has-text-primary': route.path === '/settings',
      }"
      ><i class="si-bars"></i
    ></RouterLink>
  </header>
</template>
