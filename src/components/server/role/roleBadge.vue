<template>
  <q-badge>
    <div class="q-gutter-xs row q-pa-xs">
      <q-icon name="explore"></q-icon>
      <q-icon color="red" name="circle"></q-icon>
      <div>
        {{ name }}
      </div>
    </div>
  </q-badge>
</template>

<script>
export default {
  props: ['name', 'color', 'icon'],
};
</script>

<style></style>
