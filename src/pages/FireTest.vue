<template>
  <div v-for="[key, message] in Object.entries(messages)" :key="key">
    {{ message }} {{ key }}
  </div>
  <div>{{ messages }}</div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { CounterStore } from 'src/stores/example-store';
export default {
  setup() {
    const { messages } = storeToRefs(CounterStore);
    return {
      messages,
    };
  },
};
</script>

<style></style>
