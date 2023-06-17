<template>
  <q-btn
    stack
    flat
    class="shadow-jira"
    :label="label"
    :icon="icon"
    no-caps
    @click="createColumn(type)"
  >
    <!-- <q-menu max-width="400px">
      <q-card-section>{{ description }}</q-card-section>
    </q-menu> -->
  </q-btn>
</template>

<script>
import { CounterStore } from 'src/stores/example-store';

export default {
  setup() {
    return {
      createColumn: CounterStore.createColumn,
    };
  },
  props: ['label', 'icon', 'description', 'type'],
};
</script>

<style></style>
