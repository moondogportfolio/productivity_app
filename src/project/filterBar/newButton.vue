<template>
  <q-btn label="New" @click="newRecord"></q-btn>
</template>

<script>
import { useCounterStore } from 'src/stores/example-store';

export default {
  setup() {
    return {
      newRecord: useCounterStore().createRow,
    };
  },
};
</script>

<style></style>
