<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import axios from 'axios'

import { useAttendanceStore } from './stores/attendanceData'
import HeaderComponent from './components/HeaderComponent.vue'

const API_URL = import.meta.env.VITE_API_URL
const attendanceStore = useAttendanceStore()

const fetchAttendanceData = async () => {
  try {
    const response = await axios.get(`${API_URL}/attendance`)
    attendanceStore.setAttendanceData(response.data)
    console.log('Data fetched:', response.data)
  } catch (error) {
    console.error(error)
    alert('Помилка завантаження даних')
  }
}

const startAutoUpdate = () => {
  setInterval(() => {
    fetchAttendanceData()
  }, 30000)
}

onMounted(() => {
  fetchAttendanceData()
  startAutoUpdate()
})
</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>
