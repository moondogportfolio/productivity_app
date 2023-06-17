<template>
  <q-card>
    <q-card-section>
      <q-select
        use-chips
        multiple
        v-model="selection"
        :options="options"
      ></q-select>
    </q-card-section>

    <q-card-section class="q-pt-none">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus
      sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam,
      ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="OK" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      selection: [],
      options: ['Google', 'Facebook', 'Netflix'],
    };
  },
};
</script>

<style></style>
