<template>
  <q-item style="width: 200px">
    <q-item-section avatar>
      <q-avatar font-size="16px" icon="edit" color="red"></q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ nick }}</q-item-label>
      <q-item-label caption> @{{ username }}#{{ discriminator }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: ['username', 'discriminator', 'nick'],
};
</script>

<style></style>
