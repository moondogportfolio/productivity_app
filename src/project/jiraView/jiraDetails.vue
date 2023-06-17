<template>
  <div class="column q-gutter-y-sm">
    <div>
      <q-btn label="To Do" />
    </div>
    <details-list />
    <details-list />
    <div class="row q-pa-sm">
      <div>
        <div class="tiny-caption">Created 2 hours ago</div>
        <div class="tiny-caption">Updated 2 hours ago</div>
      </div>
      <q-space />
      <div>
        <q-btn icon="settings" label="Configure" />
      </div>
    </div>
  </div>
</template>

<script>
import detailsList from './details/detailsList.vue';
export default {
  components: { detailsList },
};
</script>

<style></style>
