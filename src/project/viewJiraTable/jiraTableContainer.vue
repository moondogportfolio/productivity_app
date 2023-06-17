<template>
  <div class="q-gutter-y-md">
    <div class="bg-grey-2 q-pa-sm">
      <sprint-table />
    </div>
    <div class="q-pa-sm bg-yellow-1">
      <sprint-table />
    </div>
  </div>
</template>

<script>
import sprintTable from './sprintTable.vue';
export default {
  components: { sprintTable },
};
</script>

<style></style>
