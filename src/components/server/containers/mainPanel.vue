<template>
  <div class="column fit">
    <!-- <div style="height: 36px"> -->
    <!-- </div> -->
    <q-separator></q-separator>

    <div class="col-grow q-pa-sm full-width">
      <!-- <div v-html="code"></div> -->
      <!-- <div v-html="content" class="col"></div> -->
      <channel-container></channel-container>
    </div>
  </div>
</template>

<script>
import { test } from './testString';
import { testCode } from './testCode';
import 'highlight.js/styles/github-dark.css';
import channelContainer from 'src/components/channel/containers/channelContainer.vue';
export default {
  components: { channelContainer },
  setup() {
    return {
      testCode,
    };
  },
  computed: {
    content() {
      return this.$markdown.render(test);
    },
    code() {
      return this.$markdown.render(testCode);
    },
  },
};
</script>

<style>
pre code {
  color: #c9d1d9;
  background: #0d1117;
  display: block;
  overflow-x: auto;
  padding: 1em;
  border-radius: 5px;
}
</style>
