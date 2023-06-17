<template>
  <q-splitter
    id="photos"
    :model-value="50"
    :limits="[35, 65]"
    separator-class="bg-orange"
    separator-style="width: 3px"
  >
    <template v-slot:before>
      <jira-table-container />
    </template>

    <template v-slot:after>
      <composite-action-details />
    </template>
  </q-splitter>
</template>

<script>
import CompositeActionDetails from '../viewComposite/compositeActionDetails.vue';
import JiraTableContainer from './jiraTableContainer.vue';
export default {
  components: {
    JiraTableContainer,
    CompositeActionDetails,
  },
};
</script>

<style></style>

JiraTableContainer
