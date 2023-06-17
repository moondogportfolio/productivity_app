<template>
  <div class="row q-gutter-x-xs">
    <attach-button />
    <add-child-button />
    <link-issue-button />
    <q-btn flat dense icon="more_horiz" class="bg-grey-4" />
  </div>
</template>

<script>
import LinkIssueButton from './linkIssueButton.vue';
import AttachButton from './attachButton.vue';
import AddChildButton from './addChildButton.vue';

export default {
  components: {
    AttachButton,
    AddChildButton,
    LinkIssueButton,
  },
};
</script>

<style></style>
