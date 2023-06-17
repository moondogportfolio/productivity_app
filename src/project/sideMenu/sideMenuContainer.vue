<template>
  <div class="bg-white column q-pa-md">
    <q-tabs v-model="tab" class="col-shrink" dense align="left">
      <q-tab name="update" label="Update"></q-tab>
      <q-tab name="card" label="Card"></q-tab>
      <q-tab name="files" label="Files"></q-tab>
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="tab" class="col">
      <q-tab-panel name="update">
        <activity-container />
      </q-tab-panel>
      <q-tab-panel name="card"></q-tab-panel>
      <q-tab-panel name="files">
        <q-btn icon="label" @click="dialog = true" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
  <q-dialog v-model="dialog" full-width>
    <file-viewer-dialog />
  </q-dialog>
</template>

<script>
import activityContainer from '../jiraView/activity/activityContainer.vue';
import FileViewerDialog from '../rowFiles/fileViewerDialog.vue';

export default {
  components: { activityContainer, FileViewerDialog },
  data() {
    return {
      dialog: false,
      tab: 'update',
    };
  },
};
</script>

<style></style>
