<template>
  <div class="row">
    <q-input v-model="search" placeholder="Search" outlined dense>
      <template #append>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-checkbox label="Hide done items" v-model="viewDoneWork" />
    <q-space />
    <q-btn icon="display_settings" label="Customize" dense />
  </div>
</template>

<script>
import { VisibleStore } from 'src/stores/peep-show';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const { viewDoneWork } = storeToRefs(VisibleStore);
    return {
      viewDoneWork,
    };
  },
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style></style>
