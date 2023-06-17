<template>
  <div
    class="row chat-bubble q-pa-xs border-soft q-ma-sm"
    @mouseenter.passive="visible = true"
    @mouseleave.passive="visible = false"
  >
    <q-icon name="explore" size="32px" color="grey-5"></q-icon>
    <div class="col column q-mx-sm">
      <div class="q-mb-sm q-gutter-x-xs relative-position">
        <span class="text-weight-medium" style="font-size: 14px">Wumpus </span>
        <q-icon name="settings_input_antenna " color="grey-8"></q-icon>
        <span style="font-size: 12px" class="text-grey-5"
          >Today at 8:11 am</span
        >
        <template v-if="showMenu">
          <chat-menu :visible="visible" />
        </template>
      </div>
      <div v-html="content"></div>
      <chat-reactions />
    </div>
  </div>
</template>

<script>
import chatMenu from './chatMenu.vue';
import ChatReactions from './chatReactions.vue';
export default {
  components: { chatMenu, ChatReactions },
  props: ['message', 'showMenu'],
  computed: {
    content() {
      return this.$markdown.render(this.message);
    },
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(5px);
  opacity: 0;
}

.chat-bubble:hover {
  background: whitesmoke;
}
</style>
