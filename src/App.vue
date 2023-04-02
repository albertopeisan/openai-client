<template>
  <TheHeader></TheHeader>
  <div class="flex-grow bg-white">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
</script>
