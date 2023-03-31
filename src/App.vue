<template>
  <TheHeader></TheHeader>
  <div class="flex-grow bg-green-50">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>
