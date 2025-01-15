<script setup>
import { computed } from 'vue'
import { useAttendanceStore } from '@/stores/attendanceData'

const props = defineProps(['grade', 'groupName'])

const attendanceStore = useAttendanceStore()

const groupData = computed(() => {
  return attendanceStore.getGroupAttendance(props.grade, props.groupName)
})

const statuses = [
  ['si-check', 'green', 'В ліцеї'],
  ['si-rocket', 'black', 'В дорозі'],
  ['si-clock', 'blue', 'Запізниться'],
  ['si-x', 'red', 'Вдома'],
]
</script>

<template>
  <table>
    <thead>
      <tr>
        <th class="has-p-2">№</th>
        <th class="has-p-2">
          {{ props.groupName }}
        </th>
        <th class="has-p-2">Статус</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(studentName, index) in Object.keys(groupData)" :key="studentName">
        <td class="has-p-2">{{ index + 1 }}</td>
        <td class="has-p-2">{{ groupData[studentName].name }}</td>
        <td class="has-p-2 has-text-center tooltip">
          <i
            :class="statuses[groupData[studentName].status][0]"
            style="font-size: 20px"
            :style="{ color: statuses[groupData[studentName].status][1] }"
          ></i>
          <span class="tooltiptext">{{ statuses[groupData[studentName].status][2] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
