<template>
  <div class="column q-gutter-y-sm q-mr-md">
    <div class="text-h6">asd</div>
    <actions-bar />
    <div class="text-italic text-grey-5">Description</div>
    <div>The quick brown fox.</div>
    <div class="text-italic text-grey-5">Activity</div>
    <activity-bar />
    <slot />
  </div>
</template>

<script>
import ActivityBar from './activity/activityBar.vue';
import ActionsBar from './actions/actionsBar.vue';

export default {
  components: {
    ActivityBar,
    ActionsBar,
  },
};
</script>

<style></style>
