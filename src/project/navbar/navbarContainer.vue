<template>
  <div class="row bg-black full-width">
    <q-tabs
      v-model="navbarTab"
      dense
      class="text-grey-4 q-ml-md"
      active-bg-color="white"
      indicator-color="black"
      narrow-indicator
      align="left"
      shrink
      active-class="active-tab soft-shadow text-black"
      inline-label
    >
      <q-tab name="project" label="Projects"></q-tab>
      <q-tab name="workspace" label="Workspace"></q-tab>
      <q-tab name="jiratable" label="Jira Table"></q-tab>
      <q-tab name="maintable" label="Main Table"></q-tab>
      <q-tab name="kanban" label="Kanban"></q-tab>
      <q-tab name="settings" label="Settings"></q-tab>
      <q-tab name="notes" label="Notes"></q-tab>
    </q-tabs>
    <q-separator vertical spaced inset />
    <q-btn icon="add" label="Add view" flat dense />
    <q-space />
  </div>
</template>

<script>
import { VisibleStore } from 'src/stores/peep-show';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const { navbarTab } = storeToRefs(VisibleStore);
    return {
      navbarTab,
    };
  },
};
</script>

<style>
.tab-rounded {
  border-radius: 10px 10px 0 0 !important;
}

.q-tab {
  transition: none;
}
</style>
