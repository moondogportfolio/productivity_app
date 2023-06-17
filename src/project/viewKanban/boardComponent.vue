<template>
  <div class="bg-grey-2 rounded-borders col q-pa-sm">
    <div cla>Title</div>
    <div class="q-pa-sm full-width column gutter-y">
      <board-item />
      <board-item />
      <board-item />
    </div>
  </div>
</template>

<script>
import boardItem from './boardItem.vue';
export default {
  components: { boardItem },
};
</script>

<style>
.gutter-y {
  gap: 10px;
}
</style>
