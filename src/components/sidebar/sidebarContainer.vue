<template>
  <div
    class="column window-height q-gutter-y-sm items-center bg-grey-3"
    style="width: 48px; z-index: 1000"
  >
    <home-button></home-button>
    <sidebar-button
      :content="`@`"
      :location="`User Profile`"
      @click="$router.push('/profile')"
    />
    <sidebar-button
      :content="`S`"
      :location="`server`"
      @click="$router.push('/server')"
    />
    <sidebar-button :content="`P`" :location="`project`" @click="goToProject" />
    <sidebar-button
      :content="`W`"
      :location="`workspace`"
      @click="goToWorkspace"
    />
  </div>
</template>

<script>
import { VisibleStore } from 'src/stores/peep-show';
import { storeToRefs } from 'pinia';

import HomeButton from './homeButton.vue';
import sidebarButton from './sidebarButton.vue';
export default {
  components: { sidebarButton, HomeButton },
  setup() {
    const { navbarTab } = storeToRefs(VisibleStore);
    return {
      navbarTab,
    };
  },
  methods: {
    goToProject() {
      this.$router.push('/project');
      this.navbarTab = 'project';
    },
    goToWorkspace() {
      this.$router.push('/workspace');
      this.navbarTab = 'workspace';
    },
  },
};
</script>

<style></style>
