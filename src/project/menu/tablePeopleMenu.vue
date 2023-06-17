<template>
  <q-list>
    <q-item>
      <q-item-section>
        <q-input v-model="search" dense outlined />
      </q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-section avatar>
        <q-avatar icon="person" color="black" text-color="white" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Tanyya Cruz (assign to me)</q-item-label>
        <q-item-label class="tiny-caption">dummy@mail.com</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style></style>
