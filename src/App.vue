<template>
  <div></div>
  <div class="overflow-hidden w-full h-full relative">
    <div class="flex h-full flex-1 flex-col md:pl-[260px]">
      <TheHeader></TheHeader>
      <ChatbotView></ChatbotView>
    </div>
    <TheDesktopSidebar></TheDesktopSidebar>
  </div>
  <div class="absolute top-0 left-0 right-0 z-[2]"></div>
  <TheSidebar></TheSidebar>
</template>

<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue'
import TheSidebar from './components/layout/TheSidebar.vue'
import TheDesktopSidebar from './components/layout/TheDesktopSidebar.vue'
import ChatbotView from './views/ChatbotView.vue'
</script>
