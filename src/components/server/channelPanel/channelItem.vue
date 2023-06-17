<template>
  <q-item-section>
    <div class="row">
      <q-icon name="tag" color="grey-6"></q-icon>
      <q-item-label lines="1">Hank Hoafger</q-item-label>
    </div>
  </q-item-section>
  <q-item-section side no-wrap>
    <div class="q-gutter-x-xs hoverable-btn">
      <q-btn icon="group_add" size="12px" flat dense>
        <q-tooltip
          anchor="top middle"
          self="center middle"
          class="softshadow-1 bg-white text-black"
          >Add invitation.</q-tooltip
        >
      </q-btn>
      <q-btn icon="settings" size="12px" flat dense />
    </div>
  </q-item-section>
  <q-menu
    context-menu="context-menu"
    anchor="top left"
    self="top left"
    class="shadow-fb"
  >
    <channel-context />
  </q-menu>
</template>

<script>
import channelContext from './channelContext.vue';
export default {
  components: { channelContext },
};
</script>

<style>
.hoverable-btn:hover {
  opacity: 1;
}

.hoverable-btn {
  opacity: 0;
}
</style>
