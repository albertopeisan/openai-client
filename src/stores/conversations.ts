import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

type Message = {
  source: string
  content: string
}

type Conversation = {
  messages: Array<Message>
}

export const useConversationsStore = defineStore('conversations', () => {
  const conversations: Array<Conversation> = reactive([])
  const activeConversationId = ref(0)
  const conversation: Array<Message> = reactive([])

  function clearConversations() {}

  return { conversation, conversations, activeConversationId, clearConversations }
})
