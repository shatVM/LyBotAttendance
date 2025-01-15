<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAttendanceStore } from '@/stores/attendanceData'

import TableComponent from '@/components/TableComponent.vue'

const route = useRoute()
const attendanceStore = useAttendanceStore()

const grade = computed(() => route.params.grade || attendanceStore.getGrades()[0])

const groupsData = computed(() => {
  if (!grade.value) return {}
  return attendanceStore.getGradeAttendance(grade.value) || {}
})
</script>

<template>
  <div class="table-container columns has-w-full has-ml-0 has-mr-0">
    <TableComponent
      v-for="groupName in Object.keys(groupsData || {})"
      :key="groupName"
      :grade="grade"
      :groupName="groupName"
      class="column has-mb-0"
    />
  </div>
</template>
