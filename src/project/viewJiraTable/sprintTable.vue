<template>
  <div class="row q-gutter-x-sm q-mb-sm">
    <q-item clickable class="col-grow" dense>
      <q-item-section avatar>
        <q-avatar icon="expand_more" />
      </q-item-section>
      <q-item-section>
        <q-item-label>TEST Sprint 3</q-item-label>
      </q-item-section>
    </q-item>
    <q-btn label="Start sprint" dense></q-btn>
    <q-btn icon="more_horiz" flat dense />
  </div>
  <q-list bordered separator>
    <single-task />
    <single-task />
    <single-task />
  </q-list>
  <create-task-item />
</template>

<script>
import CreateTaskItem from './createTaskItem.vue';
import singleTask from './singleTaskItem.vue';
export default {
  components: { singleTask, CreateTaskItem },
  methods: {
    log() {
      console.log('aw');
    },
  },
};
</script>

<style></style>
