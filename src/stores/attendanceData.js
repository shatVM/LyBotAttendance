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

  const getClasses = (grade) => {
    const classes = []
    for (const className in attendanceData.value[grade]) {
      classes.push(className)
    }
    return classes
  }

  return {
    attendanceData,
    setAttendanceData,
    getGrades,
    getGradeAttendance,
    getGroupAttendance,
    getClasses,
  }
})
