<template>
  <div class="q-pa-md">
    <jira-header />
    <jira-actions />
    <jira-details />
    <activity-container />
  </div>
</template>

<script>
import ActivityContainer from '../jiraView/activity/activityContainer.vue';
import JiraActions from '../jiraView/jiraActions.vue';
import JiraDetails from '../jiraView/jiraDetails.vue';
import jiraHeader from '../jiraView/jiraHeader.vue';
export default {
  components: { jiraHeader, JiraDetails, JiraActions, ActivityContainer },
};
</script>

<style></style>
