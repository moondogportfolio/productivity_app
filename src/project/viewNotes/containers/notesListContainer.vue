<template>
  <q-list separator>
    <q-item clickable tag="label" v-for="n in 20" :key="n">
      <q-item-section avatar>
        <q-item-label>
          <q-checkbox v-model="check" />
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <q-item-label> Note Item </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  data() {
    return {
      check: true,
    };
  },
};
</script>

<style></style>
