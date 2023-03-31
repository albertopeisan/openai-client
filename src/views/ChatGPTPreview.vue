<template>
  <div>
    <div class="w-full overflow-y-scroll">
      <ul class="space-y-2">
        <li
          v-for="item in messageHistory"
          class="flex"
          :class="{
            'justify-start': item.user == 'client',
            'justify-end': item.user == 'chatgpt'
          }"
        >
          <div class="relative max-w-xl p-2 text-gray-700">
            <span class="text-sm">{{ item.user }}</span>
            <span class="block rounded shadow p-2 bg-white">{{ item.message }}</span>
          </div>
        </li>
        <li class="flex justify-end">
          <div class="relative max-w-xl p-2 text-gray-700">
            <span class="text-sm">chatgpt</span
            ><span class="block rounded shadow p-2 bg-white"
              >package com.example.demo.controller; import com.example.demo.model.User; import
              com.example.demo.service.UserService; import
              org.springframework.beans.factory.annotation.Autowired; import
              org.springframework.web.bind.annotation.*; import java.util.List; @RestController
              @RequestMapping("/user") public class UserController { @Autowired private UserService
              userService; @GetMapping("/all") public List&lt;User&gt; getAllUsers(){ return
              userService.getAllUsers(); } @PostMapping("/add") public void addUser(@RequestBody
              User user){ userService.addUser(user); } @PutMapping("/update") public void
              updateUser(@RequestBody User user){ userService.updateUser(user); }
              @DeleteMapping("/delete/{id}") public void deleteUser(@PathVariable int id){
              userService.deleteUser(id); } }</span
            >
          </div>
        </li>
        <li class="flex justify-end">
          <div class="relative max-w-xl p-2 text-gray-700">
            <span class="text-sm">chatgpt</span
            ><span class="block rounded shadow p-2 bg-white"
              >package com.example.demo.controller; import com.example.demo.model.User; import
              com.example.demo.service.UserService; import
              org.springframework.beans.factory.annotation.Autowired; import
              org.springframework.web.bind.annotation.*; import java.util.List; @RestController
              @RequestMapping("/user") public class UserController { @Autowired private UserService
              userService; @GetMapping("/all") public List&lt;User&gt; getAllUsers(){ return
              userService.getAllUsers(); } @PostMapping("/add") public void addUser(@RequestBody
              User user){ userService.addUser(user); } @PutMapping("/update") public void
              updateUser(@RequestBody User user){ userService.updateUser(user); }
              @DeleteMapping("/delete/{id}") public void deleteUser(@PathVariable int id){
              userService.deleteUser(id); } }</span
            >
          </div>
        </li>
        <li class="flex justify-end">
          <div class="relative max-w-xl p-2 text-gray-700">
            <span class="text-sm">chatgpt</span
            ><span class="block rounded shadow p-2 bg-white"
              >package com.example.demo.controller; import com.example.demo.model.User; import
              com.example.demo.service.UserService; import
              org.springframework.beans.factory.annotation.Autowired; import
              org.springframework.web.bind.annotation.*; import java.util.List; @RestController
              @RequestMapping("/user") public class UserController { @Autowired private UserService
              userService; @GetMapping("/all") public List&lt;User&gt; getAllUsers(){ return
              userService.getAllUsers(); } @PostMapping("/add") public void addUser(@RequestBody
              User user){ userService.addUser(user); } @PutMapping("/update") public void
              updateUser(@RequestBody User user){ userService.updateUser(user); }
              @DeleteMapping("/delete/{id}") public void deleteUser(@PathVariable int id){
              userService.deleteUser(id); } }</span
            >
          </div>
        </li>
      </ul>
    </div>

    <div
      class="absolute sticky z-50 bg-green-700 inset-x-0 bottom-0 flex items-center justify-between w-full p-3 border-t border-red-500"
    >
      <div class="flex w-full bg-gray-50 border border-red-900 rounded-sm">
        <input
          type="text"
          v-model="prompt"
          placeholder="Write a message"
          class="block w-full py-2 pl-4 outline-none focus:text-gray-700 bg-gray-50"
          name="message"
          required
        />
        <button class="mx-2" type="submit" @click="request">
          <IconSendMessage class="w-8 h-8"></IconSendMessage>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSendMessage from '@/components/icons/IconSendMessage.vue'
import { ref } from 'vue'
import axios from 'axios'

const prompt = ref('')
const messageHistory = ref([{ user: '', message: '' }])

function request() {
  messageHistory.value.push({ user: 'client', message: prompt.value })
  prompt.value = ''
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
}
</script>
