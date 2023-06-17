<template>
  <q-expansion-item
    default-opened
    :label="group"
    dense
    expand-separator
    header-class="bg-grey-3"
  >
    <div class="fields-grid q-pa-sm">
      <template v-for="[key, value] in Object.entries(fields)" :key="key">
        <field-button v-bind="value" :type="key" />
      </template>
    </div>
  </q-expansion-item>
</template>

<script>
import fieldButton from './fieldButton.vue';
export default {
  components: { fieldButton },
  props: ['fields', 'group'],
};
</script>

<style>
.fields-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6px;
}
</style>
