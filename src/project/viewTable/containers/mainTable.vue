<template>
  <div class="q-pa-md">
    <table-component />
  </div>
  <div class="q-pa-md">
    <table-component />
  </div>
  <div
    v-if="viewSidebar"
    class="fixed-right window-height shadow-1 bg-white"
    style="z-index: 2000; width: 60vw"
  >
    <side-menu-container />
  </div>
</template>

<script>
import SideMenuContainer from 'src/project/sideMenu/sideMenuContainer.vue';
import tableComponent from '../tableComponent.vue';
import { VisibleStore } from 'src/stores/peep-show';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const { viewSidebar } = storeToRefs(VisibleStore);
    return {
      viewSidebar,
    };
  },
  components: { tableComponent, SideMenuContainer },
};
</script>
