<template>
  <primary-layout>
    <div class="row full-height col">
      <div class="col-2 column items-stretch" style="background: whitesmoke">
        <router-view name="left"></router-view>
      </div>
      <div class="col shadow-1" style="z-index: 1000">
        <router-view></router-view>
      </div>
      <div class="fullscreen bg-white" v-if="viewSettings">
        <router-view name="settings"></router-view>
      </div>
    </div>
  </primary-layout>
</template>

<script>
import { storeToRefs } from 'pinia';
import { CounterStore } from 'src/stores/example-store';
import PrimaryLayout from 'src/layouts/primaryLayout.vue';

export default {
  setup() {
    const { viewSettings } = storeToRefs(CounterStore);
    return {
      viewSettings,
    };
  },
  components: { PrimaryLayout },
};
</script>

<style>
blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
}

code {
  background: lightgrey;
  padding: 3px;
}

.shadow-fb {
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
}

.q-item__section--avatar {
  max-width: 42px !important;
  min-width: 50px !important;
}

.q-item--dense {
  padding: 0 4px;
}
</style>
