<template>
  <div class="flex flex-col justify-between">
    <div class="p-4 overflow-y-scroll">
      <ul class="space-y-4">
        <li v-for="item in messageHistory" class="flex space-x-4">
          <div
            class="flex items-center justify-center rounded-full w-8 h-8 border border-green-300"
          >
            A
          </div>
          <div class="flex-col">
            <div>{{ item.user }}</div>
            <div class="border border-gray-300 rounded-sm w-full p-2">{{ item.message }}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex w-full p-1 px-3 border border-gray-300">
      <input v-model="prompt" class="w-full p-3 rounded-sm" />
      <IconSendMessage @click="request()"></IconSendMessage>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSendMessage from '@/components/icons/IconSendMessage.vue'
import { ref } from 'vue'
import axios from 'axios'

const prompt = ref('')
const messageHistory = ref([])

function request() {
  messageHistory.value.push({ user: 'client', message: prompt.value })
  axios
    .post(
      'https://r3a4heqbu1.execute-api.eu-west-3.amazonaws.com',
      {
        model: 'text-davinci-003',
        prompt: prompt.value,
        temperature: '0',
        max_tokens: '2048'
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then((response) => {
      messageHistory.value.push({ user: 'chatgpt', message: response.data.choices[0].text })
    })
    .catch((errors) => {
      console.log(errors)
    })
  console.log(messageHistory.value)
}
</script>
