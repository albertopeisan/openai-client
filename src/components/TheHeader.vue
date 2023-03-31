<template>
  <header
    class="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center border-b bg-blue-50 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex items-center w-full px-2 sm:px-4 md:px-6 lg:px-8">
      <button
        @click="toggleSiderBar"
        class="shrink-0 flex items-center justify-center w-10 h-10 text-gray-700 rounded-full outline-none hover:bg-gray-500/5 focus:bg-primary-500/10 lg:mr-4 rtl:lg:mr-0 rtl:lg:ml-4 lg:hidden"
      >
        <IconHamburguer></IconHamburguer>
      </button>
    </div>
  </header>

  <div v-if="sidebarIsOpen" class="fixed inset-0 z-20 w-full h-full bg-gray-900/50 lg:hidden"></div>
  <aside
    v-if="sidebarIsOpen"
    :class="
      sidebarIsOpen
        ? 'sidebar-open translate-x-0 max-w-[20em] lg:max-w-[var(--sidebar-width)]'
        : 'sidebar-closed -translate-x-full lg:translate-x-0 lg:max-w-[var(--collapsed-sidebar-width)] rtl:lg:-translate-x-0 rtl:translate-x-full'
    "
    class="sidebar fixed inset-y-0 left-0 rtl:left-auto rtl:right-0 z-20 flex flex-col h-screen overflow-hidden shadow-2xl transition-all bg-white lg:border-r rtl:lg:border-r-0 rtl:lg:border-l w-5/6 lg:z-0 dark:bg-gray-800 dark:border-gray-700 filament-sidebar-open translate-x-0 max-w-[20em] lg:max-w-[var(--sidebar-width)]"
  >
    <header
      class="sidebar-header border-b h-[4rem] shrink-0 flex items-center justify-center relative dark:border-gray-700"
    >
      <div class="flex items-center justify-between px-6 w-full lg:px-4">
        <div>Oasis IA</div>
        <button
          @click="toggleSiderBar"
          class="shrink-0 flex items-center justify-center w-10 h-10 text-gray-700 rounded-full outline-none hover:bg-gray-500/5 focus:bg-primary-500/10 lg:mr-4 rtl:lg:mr-0 rtl:lg:ml-4 lg:hidden"
        >
          <IconCloseMenu></IconCloseMenu>
        </button>
      </div>
    </header>
    <nav class="sidebar-nav flex-1 py-6 overflow-x-hidden overflow-y-auto">
      <ul class="px-6 space-y-6">
        <li>
          <RouterLink to="/home" @click="toggleSiderBar">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" @click="toggleSiderBar">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/" @click="toggleSiderBar">ChatGPT</RouterLink>
        </li>
        <li>
          <RouterLink to="/preview" @click="toggleSiderBar">ChatGPT Preview</RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import IconHamburguer from './icons/IconHamburguer.vue'
import IconCloseMenu from './icons/IconCloseMenu.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const sidebarIsOpen = ref(false)

function toggleSiderBar() {
  sidebarIsOpen.value = !sidebarIsOpen.value
}
</script>
