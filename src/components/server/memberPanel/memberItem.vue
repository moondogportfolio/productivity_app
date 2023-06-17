<template>
  <q-item-section avatar>
    <q-avatar class="bg-grey-4" size="32px">
      <q-img :src="`src/assets/${index}.png`" v-if="false"></q-img>
      <q-badge
        floating
        color="green"
        rounded
        style="transform: translate(-25%, 50%)"
      ></q-badge>
    </q-avatar>
  </q-item-section>
  <q-item-section>
    <q-item-label lines="1">Hank Hoafger</q-item-label>
    <q-item-label lines="1" class="tiny-caption"
      >The quick brown fox jumps over the lazy dog.</q-item-label
    >
  </q-item-section>
  <q-menu
    context-menu="context-menu"
    anchor="top left"
    self="top left"
    class="shadow-fb"
  >
    <member-context />
  </q-menu>
</template>

<script>
import memberContext from './memberContext.vue';
export default {
  components: { memberContext },
  props: ['index'],
};
</script>

<style></style>
