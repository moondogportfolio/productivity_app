<template>
  <q-separator vertical />
  <div class="bg-grey-2 col">
    <q-scroll-area
      class="col full-height"
      ref="scrollArea"
      :thumb-style="thumbStyle"
    >
      <div
        class="pinned-message q-ma-sm bg-white softshadow"
        v-for="n in 5"
        :key="n"
        :id="`post-${n}`"
      >
        <chat-bubble :message="`aw`" :showMenu="false"></chat-bubble>
      </div>
    </q-scroll-area>
  </div>
  <q-separator />
</template>

<script>
import chatBubble from 'src/components/chat/chatBubble.vue';
export default {
  components: { chatBubble },
  setup() {
    return {
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        width: '5px',
        opacity: '0.75',
      },
    };
  },
};
</script>

<style>
.pinned-message {
  border: 1px solid lightgray;
  border-radius: 8px;
}
</style>
