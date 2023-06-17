<template>
  <q-scroll-area :thumb-style="thumbStyle">
    <template v-if="messages">
      <chat-bubble
        v-for="[key, message] in Object.entries(messages)"
        :key="key"
        :message="message"
        :showMenu="true"
      ></chat-bubble>
    </template>
  </q-scroll-area>
</template>

<script>
import chatBubble from '../chat/chatBubble.vue';
import { messages } from 'src/stores/example-store';

export default {
  components: { chatBubble },
  setup() {
    return {
      thumbStyle: {
        borderRadius: '5px',
        backgroundColor: '#555555',
        width: '5px',
        opacity: 0.75,
      },
      messages,
    };
  },
};
</script>

<style></style>
