<template>
  <q-item @click="viewSettings = true" clickable v-close-popup>
    <q-item-section>
      <q-item-label>{{ viewSettings }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-icon name="settings"></q-icon>
    </q-item-section>
  </q-item>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useVisibleStore } from 'src/stores/peep-show';

export default {
  setup() {
    const { viewSettings } = storeToRefs(useVisibleStore());
    return {
      viewSettings,
    };
  },
};
</script>

<style></style>
