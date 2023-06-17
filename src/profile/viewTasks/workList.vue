<template>
  <template v-if="!viewDoneWork">
    <div class="basic-box">
      <q-expansion-item label="Past dates / 1 item">
        <q-separator />
      </q-expansion-item>
    </div>
    <div class="basic-box">
      <q-expansion-item label="Today / 1 item">
        <q-separator />
      </q-expansion-item>
    </div>
    <div class="basic-box">
      <q-expansion-item label="This week / 1 item">
        <q-separator />
      </q-expansion-item>
    </div>
    <div class="basic-box">
      <q-expansion-item label="Next week / 1 item">
        <q-separator />
      </q-expansion-item>
    </div>
    <div class="basic-box">
      <q-expansion-item label="Later / 1 item">
        <q-separator />
      </q-expansion-item>
    </div>
    <div class="basic-box">
      <q-expansion-item label="Without a date / 1 item">
        <q-separator />
      </q-expansion-item>
    </div>
  </template>
  <div v-else class="absolute-center">
    <q-icon name="verified" size="lg" />
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
};
</script>

<style></style>
