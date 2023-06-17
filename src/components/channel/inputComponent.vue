<template>
  <q-input
    standout
    dense
    v-model="chat"
    @keypress="log"
    @keypress.enter="sendChat"
    autogrow
    class="q-ma-sm"
  >
    <template #prepend>
      <q-btn flat icon="upload" dense></q-btn>
    </template>
    <template #append>
      <q-btn icon="more_vert" flat dense></q-btn>
      <q-btn icon="send" flat dense></q-btn>
      <div
        class="send-button cursor-pointer"
        :style="position"
        @mouseleave="cycleIndex"
      ></div>
    </template>
  </q-input>
</template>

<script>
import { ref } from 'vue';
import { writePost } from 'src/logic/managePosts';
import { messages } from 'src/stores/example-store';
export const chat = ref('b');
export default {
  setup() {
    return {
      chat,
      messages,
    };
  },
  computed: {
    position() {
      const x = (this.index % 11) * 22;
      const y = Math.floor(this.index / 11) * 22;
      return {
        'background-position': `-${x}px -${y}px`,
      };
    },
  },
  methods: {
    sendChat() {
      try {
        writePost('discord', this.chat);
      } catch (error) {
        this.messages[this.chat] = this.chat;
      }
      this.chat = '';
    },
    cycleIndex() {
      console.log(this.index);
      this.index = this.index + 1 > 49 ? 0 : this.index + 1;
    },
    log(evt) {
      return;
      console.log(evt.key);
    },
  },
  data() {
    return {
      index: 0,
    };
  },
};
</script>

<style>
.send-button {
  background-image: url(/src/assets/emojis.png);
  background-size: 242px 110px;
  transform: scale(1);
  filter: grayscale(100%);
  background-repeat: no-repeat;
  width: 22px;
  height: 22px;
  display: block;
}

.send-button:hover {
  transform: scale(1.2);
  filter: grayscale(0%);
}
</style>
