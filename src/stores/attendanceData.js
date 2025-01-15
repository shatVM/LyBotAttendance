import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAttendanceStore = defineStore('attendance', () => {
  const attendanceData = ref({})

  const setAttendanceData = (data) => {
    attendanceData.value = data
  }

  const getGrades = () => {
    return Object.keys(attendanceData.value)
  }

  const getGradeAttendance = (grade) => {
    return attendanceData.value[grade]
  }

  const getGroupAttendance = (grade, group) => {
    return attendanceData.value[grade][group]
  }

  return {
    attendanceData,
    setAttendanceData,
    getGrades,
    getGradeAttendance,
    getGroupAttendance,
  }
})
