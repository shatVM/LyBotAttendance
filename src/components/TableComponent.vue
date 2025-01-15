<script setup>
import { computed } from 'vue'
import { useAttendanceStore } from '@/stores/attendanceData'

const props = defineProps(['grade', 'groupName'])

const attendanceStore = useAttendanceStore()

const groupData = computed(() => {
  return attendanceStore.getGroupAttendance(props.grade, props.groupName)
})

const statuses = [
  {
    class: 'si-check',
    color: 'green',
    text: 'В ліцеї',
  },
  {
    class: 'si-rocket',
    color: 'black',
    text: 'В дорозі',
  },
  {
    class: 'si-clock',
    color: 'blue',
    text: 'Запізниться',
  },
  {
    class: 'si-x',
    color: 'red',
    text: 'Вдома',
  },
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
            :class="statuses[groupData[studentName].status].class"
            style="font-size: 20px"
            :style="{ color: statuses[groupData[studentName].status].color }"
          ></i>
          <span class="tooltiptext">{{ statuses[groupData[studentName].status].text }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
