<template>
  <Transition name="slide-fade">
    <div class="absolute-top-right" v-if="visible">
      <q-btn icon="reply" dense flat></q-btn>
      <q-btn icon="add_reaction" flat dense></q-btn>
      <q-btn icon="redo" flat dense></q-btn>
      <q-btn icon="more_vert" flat dense></q-btn>
    </div>
  </Transition>
</template>

<script>
export default {
  props: ['visible'],
};
</script>

<style></style>
