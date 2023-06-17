<template>
  <div
    class="column basic-box full-height rounded-borders q-my-xs"
    :class="{ 'active-chatbox': isActive }"
  >
    <header-component />
    <q-separator />
    <div class="col-grow row">
      <chatbox-component class="full-height col" />
      <pinned-container v-if="false" />
    </div>
    <q-separator />
    <div class="full-width">
      <div class="relative-position">
        <input-menu-container v-if="castingCommand" />
      </div>
      <input-component />
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../headerComponent.vue';
import inputComponent, { chat } from '../inputComponent.vue';
import PinnedContainer from './pinnedContainer.vue';
import InputMenuContainer from './inputMenuContainer.vue';
import ChatboxComponent from '../chatboxComponent.vue';
export default {
  setup() {
    return {
      chat,
    };
  },
  components: {
    inputComponent,
    HeaderComponent,
    PinnedContainer,
    InputMenuContainer,
    ChatboxComponent,
  },
  computed: {
    castingCommand() {
      return this.chat?.[0] == '/';
    },
  },
  props: ['isActive'],
};
</script>

<style>
.active-chatbox {
  background: #f8c440;
}

.gradient-dull {
  background: #c9d6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e2e2e2,
    #c9d6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e2e2e2,
    #c9d6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
