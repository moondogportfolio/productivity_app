<template>
  <q-item dense>
    <q-item-section avatar>
      <q-btn icon="arrow_back" @click="$emit('close')" flat></q-btn>
    </q-item-section>
    <q-item-section>
      <q-item-label>Back</q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn flat icon="add"></q-btn>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  emits: ['close'],
};
</script>

<style></style>
