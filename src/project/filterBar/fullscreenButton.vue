<template>
  <q-btn icon="fullscreen" flat @click="toggleFS"></q-btn>
</template>

<script>
import { useQuasar } from 'quasar';

export default {
  setup() {
    const $q = useQuasar();
    return {
      toggle() {
        $q.fullscreen.toggle();
      },
    };
  },
  methods: {
    toggleFS() {
      this.toggle();
    },
  },
};
</script>

<style></style>
