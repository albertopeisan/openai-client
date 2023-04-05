import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const isOpen = ref(false)

  function toggleSidebar() {
    isOpen.value = !isOpen.value
  }

  return { isOpen, toggleSidebar }
})
