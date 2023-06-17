<template>
  <q-input placeholder="Add comment" outlined />
  <div class="q-gutter-y-sm">
    <chat-bubble message="aw" :showMenu="true" />
    <chat-bubble message="aw" :showMenu="true" />
    <chat-bubble message="aw" :showMenu="true" />
    <chat-bubble message="aw" :showMenu="true" />
  </div>
</template>

<script>
import ChatBubble from 'src/components/chat/chatBubble.vue';
export default {
  components: { ChatBubble },
};
</script>

<style></style>
