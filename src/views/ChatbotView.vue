<template>
  <div class="flex flex-col min-w-full min-h-screen z-0">
    <!-- Dev environment  
    <button @click="isFilled = !isFilled" class="w-full border-red-500 border bg-blue-300 p-5">
      Fill
    </button>
    -->
    <div class="flex flex-col flex-grow overflow-y-scroll">
      <ul class="space-y-2" v-if="Array.isArray(messageHistory) && messageHistory.length > 0">
        <li
          v-for="item in messageHistory"
          class="flex"
          :class="{
            'justify-start': item.type == 'question',
            'justify-end': item.type == 'answer'
          }"
        >
          <div class="relative max-w-xl p-2 text-gray-700">
            <span class="text-sm" v-if="item.type == 'question'">Tú</span>
            <span class="text-sm" v-if="item.type == 'answer'">{{ botName }}</span>
            <span class="block rounded shadow p-2 bg-gray-50 border border-gray-100">{{
              item.message
            }}</span>
          </div>
        </li>
        <li class="flex justify-end" v-if="isLoading">
          <div class="relative max-w-xl p-2 text-gray-700">
            <span class="text-sm">{{ botName }}</span>
            <span class="block rounded shadow p-2 bg-gray-50 border border-gray-100">
              <font-awesome-icon :icon="['fas', 'ellipsis']" beat-fade size="lg" />
            </span>
          </div>
        </li>
      </ul>
      <div v-else>
        <section class="dark:bg-gray-800 dark:text-gray-100">
          <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p class="p-2 text-sm font-medium tracking-wider text-center uppercase">
              Chatbot de Inteligencia Artificial
            </p>
            <h2 class="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Pregunta lo que se te ocurra
            </h2>
            <div class="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
              <div>
                <h3 class="font-semibold">¿Còmo funciona un ordenador cuántico?</h3>
                <p class="mt-1 dark:text-gray-400">
                  Un ordenador cuántico es un dispositivo informático que utiliza los principios de
                  la mecánica cuántica para procesar información. Estos ordenadores se basan en los
                  principios de la superposición y la entrelazamiento cuántico para procesar
                  información de manera mucho más rápida y eficiente que los ordenadores
                  convencionales.
                </p>
              </div>
              <div>
                <h3 class="font-semibold">¿Que son las ondas alfa?</h3>
                <p class="mt-1 dark:text-gray-400">
                  Las ondas alfa son un tipo de onda cerebral que se produce cuando una persona está
                  en un estado de relajación profunda. Estas ondas se producen entre 8 y 12 ciclos
                  por segundo (Hz) y se consideran una señal de relajación y descanso. Estas ondas
                  se asocian con la meditación, la visualización creativa y el sueño profundo. Estas
                  ondas también se han relacionado con la creatividad, la memoria y el aprendizaje.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FillChatBot v-if="isFilled"></FillChatBot>
    </div>
    <div class="sticky inset-x-0 bottom-0 flex items-center justify-between w-full p-1">
      <div class="flex w-full border rounded-sm shadow-md bg-gray-100">
        <input
          type="text"
          v-model="prompt"
          placeholder="Write a message!"
          class="block w-full py-2 pl-4 outline-none focus:text-gray-700 bg-gray-100"
          name="message"
          required
        />
        <button class="mx-2" type="submit" @click="request">
          <IconSendMessage class="w-6 h-6"></IconSendMessage>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FillChatBot from '@/components/FillChatBot.vue'
import IconSendMessage from '@/components/icons/IconSendMessage.vue'
import type { AxiosInstance } from 'axios'
import { ref, reactive, inject } from 'vue'

interface Message {
  type: string
  message: string
}

// Dev environment
const isFilled = ref(false)

const axios: AxiosInstance = inject('axios')
const prompt = ref('')
const isLoading = ref(false)
const messageHistory: Array<Message> = reactive([])
const botName = import.meta.env.VITE_CHATBOT_IA_NAME

function request() {
  isLoading.value = true

  axios
    .post(
      '/',
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
      messageHistory.push({ type: 'answer', message: response.data.choices[0].text })
    })
    .catch((errors) => {
      console.log(errors)
    })
    .finally(() => {
      isLoading.value = false
    })
  messageHistory.push({ type: 'question', message: prompt.value })
  prompt.value = ''
}
</script>
