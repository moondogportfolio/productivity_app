<template>
  <q-tabs v-model="topbar" dense>
    <q-tab name="a" icon="filter_vintage"></q-tab>
    <q-tab name="b" icon="blur_on"></q-tab>
    <q-tab name="c" icon="style"></q-tab>
    <q-tab name="d" icon="contrast"></q-tab>
  </q-tabs>
</template>

<script>
export default {
  data() {
    return {
      topbar: 'a',
    };
  },
};
</script>

<style></style>
