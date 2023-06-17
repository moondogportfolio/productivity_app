<template>
  <div class="jira-grid q-pa-md">
    <jira-header class="jira-header" />
    <jira-actions class="jira-actions">
      <activity-container />
    </jira-actions>
    <jira-details class="jira-details" />
    <div style="grid-area: details"></div>
  </div>
</template>

<script>
import ActivityContainer from 'src/project/jiraView/activity/activityContainer.vue';
import JiraActions from '../../jiraView/jiraActions.vue';
import JiraDetails from '../../jiraView/jiraDetails.vue';
import jiraHeader from '../../jiraView/jiraHeader.vue';
export default {
  components: { jiraHeader, JiraActions, JiraDetails, ActivityContainer },
};
</script>

<style>
.jira-grid {
  background: white;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60px auto;
  grid-template-areas:
    'header header'
    'actions details';
}

.jira-header {
  grid-area: header;
}

.jira-actions {
  grid-area: actions;
}
.jira-details {
  grid-area: details;
}
</style>
