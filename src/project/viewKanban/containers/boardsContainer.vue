<template>
  <q-btn icon="label" @click="viewDetails = true" />
  <div class="row q-gutter-x-md q-pa-md">
    <board-component />
    <board-component />
    <board-component />
  </div>
  <q-dialog v-model="viewDetails" full-width>
    <jira-dialog-container />
  </q-dialog>
</template>

<script>
import boardComponent from '../boardComponent.vue';
import JiraDialogContainer from './jiraDialogContainer.vue';
export default {
  components: { boardComponent, JiraDialogContainer },
  data() {
    return {
      viewDetails: false,
    };
  },
};
</script>

<style></style>
